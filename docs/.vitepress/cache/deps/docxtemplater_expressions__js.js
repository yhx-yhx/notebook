import {
  __commonJS
} from "./chunk-HM4MQYWN.js";

// node_modules/angular-expressions/lib/parse.js
var require_parse = __commonJS({
  "node_modules/angular-expressions/lib/parse.js"(exports) {
    "use strict";
    var window = { document: {} };
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var lowercase = function(string) {
      return isString(string) ? string.toLowerCase() : string;
    };
    var uppercase = function(string) {
      return isString(string) ? string.toUpperCase() : string;
    };
    var isArray = Array.isArray;
    var manualLowercase = function(s) {
      return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
        return String.fromCharCode(ch.charCodeAt(0) | 32);
      }) : s;
    };
    var manualUppercase = function(s) {
      return isString(s) ? s.replace(/[a-z]/g, function(ch) {
        return String.fromCharCode(ch.charCodeAt(0) & ~32);
      }) : s;
    };
    if ("i" !== "I".toLowerCase()) {
      lowercase = manualLowercase;
      uppercase = manualUppercase;
    }
    var msie;
    var jqLite;
    var slice = [].slice;
    var splice = [].splice;
    var push = [].push;
    var toString = Object.prototype.toString;
    var getPrototypeOf = Object.getPrototypeOf;
    var ngMinErr = minErr("ng");
    var angular = window.angular || (window.angular = {});
    msie = window.document.documentMode;
    function isArrayLike(obj) {
      if (obj == null || isWindow(obj))
        return false;
      if (isArray(obj) || isString(obj) || jqLite && obj instanceof jqLite)
        return true;
      var length = "length" in Object(obj) && obj.length;
      return isNumber(length) && (length >= 0 && (length - 1 in obj || obj instanceof Array) || typeof obj.item === "function");
    }
    function forEach(obj, iterator, context) {
      var key, length;
      if (obj) {
        if (isFunction(obj)) {
          for (key in obj) {
            if (key !== "prototype" && key !== "length" && key !== "name" && obj.hasOwnProperty(key)) {
              iterator.call(context, obj[key], key, obj);
            }
          }
        } else if (isArray(obj) || isArrayLike(obj)) {
          var isPrimitive = typeof obj !== "object";
          for (key = 0, length = obj.length; key < length; key++) {
            if (isPrimitive || key in obj) {
              iterator.call(context, obj[key], key, obj);
            }
          }
        } else if (obj.forEach && obj.forEach !== forEach) {
          obj.forEach(iterator, context, obj);
        } else if (isBlankObject(obj)) {
          for (key in obj) {
            iterator.call(context, obj[key], key, obj);
          }
        } else if (typeof obj.hasOwnProperty === "function") {
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              iterator.call(context, obj[key], key, obj);
            }
          }
        } else {
          for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
              iterator.call(context, obj[key], key, obj);
            }
          }
        }
      }
      return obj;
    }
    function setHashKey(obj, h) {
      if (h) {
        obj.$$hashKey = h;
      } else {
        delete obj.$$hashKey;
      }
    }
    var isNumberNaN = Number.isNaN || function isNumberNaN2(num) {
      return num !== num;
    };
    function noop() {
    }
    noop.$inject = [];
    function identity($) {
      return $;
    }
    identity.$inject = [];
    function isUndefined(value) {
      return typeof value === "undefined";
    }
    function isDefined(value) {
      return typeof value !== "undefined";
    }
    function isObject(value) {
      return value !== null && typeof value === "object";
    }
    function isBlankObject(value) {
      return value !== null && typeof value === "object" && !getPrototypeOf(value);
    }
    function isString(value) {
      return typeof value === "string";
    }
    function isNumber(value) {
      return typeof value === "number";
    }
    function isFunction(value) {
      return typeof value === "function";
    }
    function isWindow(obj) {
      return obj && obj.window === obj;
    }
    function isScope(obj) {
      return obj && obj.$evalAsync && obj.$watch;
    }
    var TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
    function isTypedArray(value) {
      return value && isNumber(value.length) && TYPED_ARRAY_REGEXP.test(toString.call(value));
    }
    function isArrayBuffer(obj) {
      return toString.call(obj) === "[object ArrayBuffer]";
    }
    function copy(source, destination) {
      var stackSource = [];
      var stackDest = [];
      if (destination) {
        if (isTypedArray(destination) || isArrayBuffer(destination)) {
          throw ngMinErr(
            "cpta",
            "Can't copy! TypedArray destination cannot be mutated."
          );
        }
        if (source === destination) {
          throw ngMinErr(
            "cpi",
            "Can't copy! Source and destination are identical."
          );
        }
        if (isArray(destination)) {
          destination.length = 0;
        } else {
          forEach(destination, function(value, key) {
            if (key !== "$$hashKey") {
              delete destination[key];
            }
          });
        }
        stackSource.push(source);
        stackDest.push(destination);
        return copyRecurse(source, destination);
      }
      return copyElement(source);
      function copyRecurse(source2, destination2) {
        var h = destination2.$$hashKey;
        var key;
        if (isArray(source2)) {
          for (var i = 0, ii = source2.length; i < ii; i++) {
            destination2.push(copyElement(source2[i]));
          }
        } else if (isBlankObject(source2)) {
          for (key in source2) {
            destination2[key] = copyElement(source2[key]);
          }
        } else if (source2 && typeof source2.hasOwnProperty === "function") {
          for (key in source2) {
            if (source2.hasOwnProperty(key)) {
              destination2[key] = copyElement(source2[key]);
            }
          }
        } else {
          for (key in source2) {
            if (hasOwnProperty.call(source2, key)) {
              destination2[key] = copyElement(source2[key]);
            }
          }
        }
        setHashKey(destination2, h);
        return destination2;
      }
      function copyElement(source2) {
        if (!isObject(source2)) {
          return source2;
        }
        var index = stackSource.indexOf(source2);
        if (index !== -1) {
          return stackDest[index];
        }
        if (isWindow(source2) || isScope(source2)) {
          throw ngMinErr(
            "cpws",
            "Can't copy! Making copies of Window or Scope instances is not supported."
          );
        }
        var needsRecurse = false;
        var destination2 = copyType(source2);
        if (destination2 === void 0) {
          destination2 = isArray(source2) ? [] : Object.create(getPrototypeOf(source2));
          needsRecurse = true;
        }
        stackSource.push(source2);
        stackDest.push(destination2);
        return needsRecurse ? copyRecurse(source2, destination2) : destination2;
      }
      function copyType(source2) {
        switch (toString.call(source2)) {
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return new source2.constructor(
              copyElement(source2.buffer),
              source2.byteOffset,
              source2.length
            );
          case "[object ArrayBuffer]":
            if (!source2.slice) {
              var copied = new ArrayBuffer(source2.byteLength);
              new Uint8Array(copied).set(new Uint8Array(source2));
              return copied;
            }
            return source2.slice(0);
          case "[object Boolean]":
          case "[object Number]":
          case "[object String]":
          case "[object Date]":
            return new source2.constructor(source2.valueOf());
          case "[object RegExp]":
            var re = new RegExp(
              source2.source,
              source2.toString().match(/[^\/]*$/)[0]
            );
            re.lastIndex = source2.lastIndex;
            return re;
          case "[object Blob]":
            return new source2.constructor([source2], { type: source2.type });
        }
        if (isFunction(source2.cloneNode)) {
          return source2.cloneNode(true);
        }
      }
    }
    function toJsonReplacer(key, value) {
      var val = value;
      if (typeof key === "string" && key.charAt(0) === "$" && key.charAt(1) === "$") {
        val = void 0;
      } else if (isWindow(value)) {
        val = "$WINDOW";
      } else if (value && window.document === value) {
        val = "$DOCUMENT";
      } else if (isScope(value)) {
        val = "$SCOPE";
      }
      return val;
    }
    function allowAutoBootstrap(document) {
      if (!document.currentScript) {
        return true;
      }
      var src = document.currentScript.getAttribute("src");
      var link = document.createElement("a");
      link.href = src;
      var scriptProtocol = link.protocol;
      var docLoadProtocol = document.location.protocol;
      if ((scriptProtocol === "resource:" || scriptProtocol === "chrome-extension:") && docLoadProtocol !== scriptProtocol) {
        return false;
      }
      return true;
    }
    var isAutoBootstrapAllowed = allowAutoBootstrap(window.document);
    function createMap() {
      return /* @__PURE__ */ Object.create(null);
    }
    function serializeObject(obj) {
      var seen = [];
      return JSON.stringify(obj, function(key, val) {
        val = toJsonReplacer(key, val);
        if (isObject(val)) {
          if (seen.indexOf(val) >= 0)
            return "...";
          seen.push(val);
        }
        return val;
      });
    }
    function toDebugString(obj) {
      if (typeof obj === "function") {
        return obj.toString().replace(/ \{[\s\S]*$/, "");
      } else if (isUndefined(obj)) {
        return "undefined";
      } else if (typeof obj !== "string") {
        return serializeObject(obj);
      }
      return obj;
    }
    function minErr(module2, ErrorConstructor) {
      ErrorConstructor = ErrorConstructor || Error;
      return function() {
        var SKIP_INDEXES = 2;
        var templateArgs = arguments, code = templateArgs[0], message = "[" + (module2 ? module2 + ":" : "") + code + "] ", template = templateArgs[1], paramPrefix, i;
        message += template.replace(/\{\d+\}/g, function(match) {
          var index = +match.slice(1, -1), shiftedIndex = index + SKIP_INDEXES;
          if (shiftedIndex < templateArgs.length) {
            return toDebugString(templateArgs[shiftedIndex]);
          }
          return match;
        });
        message += '\nhttp://errors.angularjs.org/"NG_VERSION_FULL"/' + (module2 ? module2 + "/" : "") + code;
        for (i = SKIP_INDEXES, paramPrefix = "?"; i < templateArgs.length; i++, paramPrefix = "&") {
          message += paramPrefix + "p" + (i - SKIP_INDEXES) + "=" + encodeURIComponent(toDebugString(templateArgs[i]));
        }
        return new ErrorConstructor(message);
      };
    }
    var $parseMinErr = minErr("$parse");
    var objectValueOf = {}.constructor.prototype.valueOf;
    function getStringValue(name) {
      return name + "";
    }
    var OPERATORS = createMap();
    forEach(
      "+ - * / % === !== == != < > <= >= && || ! = |".split(" "),
      function(operator) {
        OPERATORS[operator] = true;
      }
    );
    var ESCAPE = {
      n: "\n",
      f: "\f",
      r: "\r",
      t: "	",
      v: "\v",
      "'": "'",
      '"': '"'
    };
    var Lexer = function Lexer2(options) {
      this.options = options;
    };
    Lexer.prototype = {
      constructor: Lexer,
      lex: function(text) {
        this.text = text;
        this.index = 0;
        this.tokens = [];
        while (this.index < this.text.length) {
          var ch = this.text.charAt(this.index);
          if (ch === '"' || ch === "'") {
            this.readString(ch);
          } else if (this.isNumber(ch) || ch === "." && this.isNumber(this.peek())) {
            this.readNumber();
          } else if (this.isIdentifierStart(this.peekMultichar())) {
            this.readIdent();
          } else if (this.is(ch, "(){}[].,;:?")) {
            this.tokens.push({ index: this.index, text: ch });
            this.index++;
          } else if (this.isWhitespace(ch)) {
            this.index++;
          } else {
            var ch2 = ch + this.peek();
            var ch3 = ch2 + this.peek(2);
            var op1 = OPERATORS[ch];
            var op2 = OPERATORS[ch2];
            var op3 = OPERATORS[ch3];
            if (op1 || op2 || op3) {
              var token = op3 ? ch3 : op2 ? ch2 : ch;
              this.tokens.push({ index: this.index, text: token, operator: true });
              this.index += token.length;
            } else {
              this.throwError(
                "Unexpected next character ",
                this.index,
                this.index + 1
              );
            }
          }
        }
        return this.tokens;
      },
      is: function(ch, chars) {
        return chars.indexOf(ch) !== -1;
      },
      peek: function(i) {
        var num = i || 1;
        return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
      },
      isNumber: function(ch) {
        return "0" <= ch && ch <= "9" && typeof ch === "string";
      },
      isWhitespace: function(ch) {
        return ch === " " || ch === "\r" || ch === "	" || ch === "\n" || ch === "\v" || ch === " ";
      },
      isIdentifierStart: function(ch) {
        return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
      },
      isValidIdentifierStart: function(ch) {
        return "a" <= ch && ch <= "z" || "A" <= ch && ch <= "Z" || "_" === ch || ch === "$";
      },
      isIdentifierContinue: function(ch) {
        return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
      },
      isValidIdentifierContinue: function(ch, cp) {
        return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
      },
      codePointAt: function(ch) {
        if (ch.length === 1)
          return ch.charCodeAt(0);
        return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 56613888;
      },
      peekMultichar: function() {
        var ch = this.text.charAt(this.index);
        var peek = this.peek();
        if (!peek) {
          return ch;
        }
        var cp1 = ch.charCodeAt(0);
        var cp2 = peek.charCodeAt(0);
        if (cp1 >= 55296 && cp1 <= 56319 && cp2 >= 56320 && cp2 <= 57343) {
          return ch + peek;
        }
        return ch;
      },
      isExpOperator: function(ch) {
        return ch === "-" || ch === "+" || this.isNumber(ch);
      },
      throwError: function(error, start, end) {
        end = end || this.index;
        var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
        throw $parseMinErr(
          "lexerr",
          "Lexer Error: {0} at column{1} in expression [{2}].",
          error,
          colStr,
          this.text
        );
      },
      readNumber: function() {
        var number = "";
        var start = this.index;
        while (this.index < this.text.length) {
          var ch = lowercase(this.text.charAt(this.index));
          if (ch === "." || this.isNumber(ch)) {
            number += ch;
          } else {
            var peekCh = this.peek();
            if (ch === "e" && this.isExpOperator(peekCh)) {
              number += ch;
            } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) === "e") {
              number += ch;
            } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) === "e") {
              this.throwError("Invalid exponent");
            } else {
              break;
            }
          }
          this.index++;
        }
        this.tokens.push({
          index: start,
          text: number,
          constant: true,
          value: Number(number)
        });
      },
      readIdent: function() {
        var start = this.index;
        this.index += this.peekMultichar().length;
        while (this.index < this.text.length) {
          var ch = this.peekMultichar();
          if (!this.isIdentifierContinue(ch)) {
            break;
          }
          this.index += ch.length;
        }
        this.tokens.push({
          index: start,
          text: this.text.slice(start, this.index),
          identifier: true
        });
      },
      readString: function(quote) {
        var start = this.index;
        this.index++;
        var string = "";
        var rawString = quote;
        var escape = false;
        while (this.index < this.text.length) {
          var ch = this.text.charAt(this.index);
          rawString += ch;
          if (escape) {
            if (ch === "u") {
              var hex = this.text.substring(this.index + 1, this.index + 5);
              if (!hex.match(/[\da-f]{4}/i)) {
                this.throwError("Invalid unicode escape [\\u" + hex + "]");
              }
              this.index += 4;
              string += String.fromCharCode(parseInt(hex, 16));
            } else {
              var rep = ESCAPE[ch];
              string = string + (rep || ch);
            }
            escape = false;
          } else if (ch === "\\") {
            escape = true;
          } else if (ch === quote) {
            this.index++;
            this.tokens.push({
              index: start,
              text: rawString,
              constant: true,
              value: string
            });
            return;
          } else {
            string += ch;
          }
          this.index++;
        }
        this.throwError("Unterminated quote", start);
      }
    };
    var AST = function AST2(lexer, options) {
      this.lexer = lexer;
      this.options = options;
    };
    AST.Program = "Program";
    AST.ExpressionStatement = "ExpressionStatement";
    AST.AssignmentExpression = "AssignmentExpression";
    AST.ConditionalExpression = "ConditionalExpression";
    AST.LogicalExpression = "LogicalExpression";
    AST.BinaryExpression = "BinaryExpression";
    AST.UnaryExpression = "UnaryExpression";
    AST.CallExpression = "CallExpression";
    AST.MemberExpression = "MemberExpression";
    AST.Identifier = "Identifier";
    AST.Literal = "Literal";
    AST.ArrayExpression = "ArrayExpression";
    AST.Property = "Property";
    AST.ObjectExpression = "ObjectExpression";
    AST.ThisExpression = "ThisExpression";
    AST.LocalsExpression = "LocalsExpression";
    AST.NGValueParameter = "NGValueParameter";
    AST.prototype = {
      ast: function(text) {
        this.text = text;
        this.tokens = this.lexer.lex(text);
        var value = this.program();
        if (this.tokens.length !== 0) {
          this.throwError("is an unexpected token", this.tokens[0]);
        }
        return value;
      },
      program: function() {
        var body = [];
        while (true) {
          if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]"))
            body.push(this.expressionStatement());
          if (!this.expect(";")) {
            return { type: AST.Program, body };
          }
        }
      },
      expressionStatement: function() {
        return { type: AST.ExpressionStatement, expression: this.filterChain() };
      },
      filterChain: function() {
        var left = this.expression();
        while (this.expect("|")) {
          left = this.filter(left);
        }
        return left;
      },
      expression: function() {
        return this.assignment();
      },
      assignment: function() {
        var result = this.ternary();
        if (this.expect("=")) {
          if (!isAssignable(result)) {
            throw $parseMinErr("lval", "Trying to assign a value to a non l-value");
          }
          result = {
            type: AST.AssignmentExpression,
            left: result,
            right: this.assignment(),
            operator: "="
          };
        }
        return result;
      },
      ternary: function() {
        var test = this.logicalOR();
        var alternate;
        var consequent;
        if (this.expect("?")) {
          alternate = this.expression();
          if (this.consume(":")) {
            consequent = this.expression();
            return {
              type: AST.ConditionalExpression,
              test,
              alternate,
              consequent
            };
          }
        }
        return test;
      },
      logicalOR: function() {
        var left = this.logicalAND();
        while (this.expect("||")) {
          left = {
            type: AST.LogicalExpression,
            operator: "||",
            left,
            right: this.logicalAND()
          };
        }
        return left;
      },
      logicalAND: function() {
        var left = this.equality();
        while (this.expect("&&")) {
          left = {
            type: AST.LogicalExpression,
            operator: "&&",
            left,
            right: this.equality()
          };
        }
        return left;
      },
      equality: function() {
        var left = this.relational();
        var token;
        while (token = this.expect("==", "!=", "===", "!==")) {
          left = {
            type: AST.BinaryExpression,
            operator: token.text,
            left,
            right: this.relational()
          };
        }
        return left;
      },
      relational: function() {
        var left = this.additive();
        var token;
        while (token = this.expect("<", ">", "<=", ">=")) {
          left = {
            type: AST.BinaryExpression,
            operator: token.text,
            left,
            right: this.additive()
          };
        }
        return left;
      },
      additive: function() {
        var left = this.multiplicative();
        var token;
        while (token = this.expect("+", "-")) {
          left = {
            type: AST.BinaryExpression,
            operator: token.text,
            left,
            right: this.multiplicative()
          };
        }
        return left;
      },
      multiplicative: function() {
        var left = this.unary();
        var token;
        while (token = this.expect("*", "/", "%")) {
          left = {
            type: AST.BinaryExpression,
            operator: token.text,
            left,
            right: this.unary()
          };
        }
        return left;
      },
      unary: function() {
        var token;
        if (token = this.expect("+", "-", "!")) {
          return {
            type: AST.UnaryExpression,
            operator: token.text,
            prefix: true,
            argument: this.unary()
          };
        } else {
          return this.primary();
        }
      },
      primary: function() {
        var primary;
        if (this.expect("(")) {
          primary = this.filterChain();
          this.consume(")");
        } else if (this.expect("[")) {
          primary = this.arrayDeclaration();
        } else if (this.expect("{")) {
          primary = this.object();
        } else if (this.selfReferential.hasOwnProperty(this.peek().text)) {
          primary = copy(this.selfReferential[this.consume().text]);
        } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
          primary = {
            type: AST.Literal,
            value: this.options.literals[this.consume().text]
          };
        } else if (this.peek().identifier) {
          primary = this.identifier();
        } else if (this.peek().constant) {
          primary = this.constant();
        } else {
          this.throwError("not a primary expression", this.peek());
        }
        var next;
        while (next = this.expect("(", "[", ".")) {
          if (next.text === "(") {
            primary = {
              type: AST.CallExpression,
              callee: primary,
              arguments: this.parseArguments()
            };
            this.consume(")");
          } else if (next.text === "[") {
            primary = {
              type: AST.MemberExpression,
              object: primary,
              property: this.expression(),
              computed: true
            };
            this.consume("]");
          } else if (next.text === ".") {
            primary = {
              type: AST.MemberExpression,
              object: primary,
              property: this.identifier(),
              computed: false
            };
          } else {
            this.throwError("IMPOSSIBLE");
          }
        }
        return primary;
      },
      filter: function(baseExpression) {
        var args = [baseExpression];
        var result = {
          type: AST.CallExpression,
          callee: this.identifier(),
          arguments: args,
          filter: true
        };
        while (this.expect(":")) {
          args.push(this.expression());
        }
        return result;
      },
      parseArguments: function() {
        var args = [];
        if (this.peekToken().text !== ")") {
          do {
            args.push(this.filterChain());
          } while (this.expect(","));
        }
        return args;
      },
      identifier: function() {
        var token = this.consume();
        if (!token.identifier) {
          this.throwError("is not a valid identifier", token);
        }
        return { type: AST.Identifier, name: token.text };
      },
      constant: function() {
        return { type: AST.Literal, value: this.consume().value };
      },
      arrayDeclaration: function() {
        var elements = [];
        if (this.peekToken().text !== "]") {
          do {
            if (this.peek("]")) {
              break;
            }
            elements.push(this.expression());
          } while (this.expect(","));
        }
        this.consume("]");
        return { type: AST.ArrayExpression, elements };
      },
      object: function() {
        var properties = [], property;
        if (this.peekToken().text !== "}") {
          do {
            if (this.peek("}")) {
              break;
            }
            property = { type: AST.Property, kind: "init" };
            if (this.peek().constant) {
              property.key = this.constant();
              property.computed = false;
              this.consume(":");
              property.value = this.expression();
            } else if (this.peek().identifier) {
              property.key = this.identifier();
              property.computed = false;
              if (this.peek(":")) {
                this.consume(":");
                property.value = this.expression();
              } else {
                property.value = property.key;
              }
            } else if (this.peek("[")) {
              this.consume("[");
              property.key = this.expression();
              this.consume("]");
              property.computed = true;
              this.consume(":");
              property.value = this.expression();
            } else {
              this.throwError("invalid key", this.peek());
            }
            properties.push(property);
          } while (this.expect(","));
        }
        this.consume("}");
        return { type: AST.ObjectExpression, properties };
      },
      throwError: function(msg, token) {
        throw $parseMinErr(
          "syntax",
          "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
          token.text,
          msg,
          token.index + 1,
          this.text,
          this.text.substring(token.index)
        );
      },
      consume: function(e1) {
        if (this.tokens.length === 0) {
          throw $parseMinErr(
            "ueoe",
            "Unexpected end of expression: {0}",
            this.text
          );
        }
        var token = this.expect(e1);
        if (!token) {
          this.throwError("is unexpected, expecting [" + e1 + "]", this.peek());
        }
        return token;
      },
      peekToken: function() {
        if (this.tokens.length === 0) {
          throw $parseMinErr(
            "ueoe",
            "Unexpected end of expression: {0}",
            this.text
          );
        }
        return this.tokens[0];
      },
      peek: function(e1, e2, e3, e4) {
        return this.peekAhead(0, e1, e2, e3, e4);
      },
      peekAhead: function(i, e1, e2, e3, e4) {
        if (this.tokens.length > i) {
          var token = this.tokens[i];
          var t = token.text;
          if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
            return token;
          }
        }
        return false;
      },
      expect: function(e1, e2, e3, e4) {
        var token = this.peek(e1, e2, e3, e4);
        if (token) {
          this.tokens.shift();
          return token;
        }
        return false;
      },
      selfReferential: {
        this: { type: AST.ThisExpression },
        $locals: { type: AST.LocalsExpression }
      }
    };
    function ifDefined(v, d) {
      return typeof v !== "undefined" ? v : d;
    }
    function plusFn(l, r) {
      if (typeof l === "undefined")
        return r;
      if (typeof r === "undefined")
        return l;
      return l + r;
    }
    function isStateless($filter, filterName) {
      var fn = $filter(filterName);
      if (!fn) {
        throw new Error("Filter '" + filterName + "' is not defined");
      }
      return !fn.$stateful;
    }
    function findConstantAndWatchExpressions(ast, $filter) {
      var allConstants;
      var argsToWatch;
      var isStatelessFilter;
      switch (ast.type) {
        case AST.Program:
          allConstants = true;
          forEach(ast.body, function(expr) {
            findConstantAndWatchExpressions(expr.expression, $filter);
            allConstants = allConstants && expr.expression.constant;
          });
          ast.constant = allConstants;
          break;
        case AST.Literal:
          ast.constant = true;
          ast.toWatch = [];
          break;
        case AST.UnaryExpression:
          findConstantAndWatchExpressions(ast.argument, $filter);
          ast.constant = ast.argument.constant;
          ast.toWatch = ast.argument.toWatch;
          break;
        case AST.BinaryExpression:
          findConstantAndWatchExpressions(ast.left, $filter);
          findConstantAndWatchExpressions(ast.right, $filter);
          ast.constant = ast.left.constant && ast.right.constant;
          ast.toWatch = ast.left.toWatch.concat(ast.right.toWatch);
          break;
        case AST.LogicalExpression:
          findConstantAndWatchExpressions(ast.left, $filter);
          findConstantAndWatchExpressions(ast.right, $filter);
          ast.constant = ast.left.constant && ast.right.constant;
          ast.toWatch = ast.constant ? [] : [ast];
          break;
        case AST.ConditionalExpression:
          findConstantAndWatchExpressions(ast.test, $filter);
          findConstantAndWatchExpressions(ast.alternate, $filter);
          findConstantAndWatchExpressions(ast.consequent, $filter);
          ast.constant = ast.test.constant && ast.alternate.constant && ast.consequent.constant;
          ast.toWatch = ast.constant ? [] : [ast];
          break;
        case AST.Identifier:
          ast.constant = false;
          ast.toWatch = [ast];
          break;
        case AST.MemberExpression:
          findConstantAndWatchExpressions(ast.object, $filter);
          if (ast.computed) {
            findConstantAndWatchExpressions(ast.property, $filter);
          }
          ast.constant = ast.object.constant && (!ast.computed || ast.property.constant);
          ast.toWatch = [ast];
          break;
        case AST.CallExpression:
          isStatelessFilter = ast.filter ? isStateless($filter, ast.callee.name) : false;
          allConstants = isStatelessFilter;
          argsToWatch = [];
          forEach(ast.arguments, function(expr) {
            findConstantAndWatchExpressions(expr, $filter);
            allConstants = allConstants && expr.constant;
            if (!expr.constant) {
              argsToWatch.push.apply(argsToWatch, expr.toWatch);
            }
          });
          ast.constant = allConstants;
          ast.toWatch = isStatelessFilter ? argsToWatch : [ast];
          break;
        case AST.AssignmentExpression:
          findConstantAndWatchExpressions(ast.left, $filter);
          findConstantAndWatchExpressions(ast.right, $filter);
          ast.constant = ast.left.constant && ast.right.constant;
          ast.toWatch = [ast];
          break;
        case AST.ArrayExpression:
          allConstants = true;
          argsToWatch = [];
          forEach(ast.elements, function(expr) {
            findConstantAndWatchExpressions(expr, $filter);
            allConstants = allConstants && expr.constant;
            if (!expr.constant) {
              argsToWatch.push.apply(argsToWatch, expr.toWatch);
            }
          });
          ast.constant = allConstants;
          ast.toWatch = argsToWatch;
          break;
        case AST.ObjectExpression:
          allConstants = true;
          argsToWatch = [];
          forEach(ast.properties, function(property) {
            findConstantAndWatchExpressions(property.value, $filter);
            allConstants = allConstants && property.value.constant && !property.computed;
            if (!property.value.constant) {
              argsToWatch.push.apply(argsToWatch, property.value.toWatch);
            }
          });
          ast.constant = allConstants;
          ast.toWatch = argsToWatch;
          break;
        case AST.ThisExpression:
          ast.constant = false;
          ast.toWatch = [];
          break;
        case AST.LocalsExpression:
          ast.constant = false;
          ast.toWatch = [];
          break;
      }
    }
    function getInputs(body) {
      if (body.length !== 1)
        return;
      var lastExpression = body[0].expression;
      var candidate = lastExpression.toWatch;
      if (candidate.length !== 1)
        return candidate;
      return candidate[0] !== lastExpression ? candidate : void 0;
    }
    function isAssignable(ast) {
      return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
    }
    function assignableAST(ast) {
      if (ast.body.length === 1 && isAssignable(ast.body[0].expression)) {
        return {
          type: AST.AssignmentExpression,
          left: ast.body[0].expression,
          right: { type: AST.NGValueParameter },
          operator: "="
        };
      }
    }
    function isLiteral(ast) {
      return ast.body.length === 0 || ast.body.length === 1 && (ast.body[0].expression.type === AST.Literal || ast.body[0].expression.type === AST.ArrayExpression || ast.body[0].expression.type === AST.ObjectExpression);
    }
    function isConstant(ast) {
      return ast.constant;
    }
    function ASTCompiler(astBuilder, $filter) {
      this.astBuilder = astBuilder;
      this.$filter = $filter;
    }
    ASTCompiler.prototype = {
      compile: function(expression) {
        var self = this;
        var ast = this.astBuilder.ast(expression);
        this.state = {
          nextId: 0,
          filters: {},
          fn: { vars: [], body: [], own: {} },
          assign: { vars: [], body: [], own: {} },
          inputs: []
        };
        findConstantAndWatchExpressions(ast, self.$filter);
        var extra = "";
        var assignable;
        this.stage = "assign";
        if (assignable = assignableAST(ast)) {
          this.state.computing = "assign";
          var result = this.nextId();
          this.recurse(assignable, result);
          this.return_(result);
          extra = "fn.assign=" + this.generateFunction("assign", "s,v,l");
        }
        var toWatch = getInputs(ast.body);
        self.stage = "inputs";
        forEach(toWatch, function(watch, key) {
          var fnKey = "fn" + key;
          self.state[fnKey] = { vars: [], body: [], own: {} };
          self.state.computing = fnKey;
          var intoId = self.nextId();
          self.recurse(watch, intoId);
          self.return_(intoId);
          self.state.inputs.push(fnKey);
          watch.watchId = key;
        });
        this.state.computing = "fn";
        this.stage = "main";
        this.recurse(ast);
        var fnString = (
          // The build and minification steps remove the string "use strict" from the code, but this is done using a regex.
          // This is a workaround for this until we do a better job at only removing the prefix only when we should.
          '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + extra + this.watchFns() + "return fn;"
        );
        var fn = new Function(
          "$filter",
          "getStringValue",
          "ifDefined",
          "plus",
          fnString
        )(this.$filter, getStringValue, ifDefined, plusFn);
        this.state = this.stage = void 0;
        fn.ast = ast;
        fn.literal = isLiteral(ast);
        fn.constant = isConstant(ast);
        return fn;
      },
      USE: "use",
      STRICT: "strict",
      watchFns: function() {
        var result = [];
        var fns = this.state.inputs;
        var self = this;
        forEach(fns, function(name) {
          result.push("var " + name + "=" + self.generateFunction(name, "s"));
        });
        if (fns.length) {
          result.push("fn.inputs=[" + fns.join(",") + "];");
        }
        return result.join("");
      },
      generateFunction: function(name, params) {
        return "function(" + params + "){" + this.varsPrefix(name) + this.body(name) + "};";
      },
      filterPrefix: function() {
        var parts = [];
        var self = this;
        forEach(this.state.filters, function(id, filter) {
          parts.push(id + "=$filter(" + self.escape(filter) + ")");
        });
        if (parts.length)
          return "var " + parts.join(",") + ";";
        return "";
      },
      varsPrefix: function(section) {
        return this.state[section].vars.length ? "var " + this.state[section].vars.join(",") + ";" : "";
      },
      body: function(section) {
        return this.state[section].body.join("");
      },
      recurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
        var left, right, self = this, args, expression, computed;
        recursionFn = recursionFn || noop;
        if (!skipWatchIdCheck && isDefined(ast.watchId)) {
          intoId = intoId || this.nextId();
          this.if_(
            "i",
            this.lazyAssign(intoId, this.unsafeComputedMember("i", ast.watchId)),
            this.lazyRecurse(ast, intoId, nameId, recursionFn, create, true)
          );
          return;
        }
        switch (ast.type) {
          case AST.Program:
            forEach(ast.body, function(expression2, pos) {
              self.recurse(
                expression2.expression,
                void 0,
                void 0,
                function(expr) {
                  right = expr;
                }
              );
              if (pos !== ast.body.length - 1) {
                self.current().body.push(right, ";");
              } else {
                self.return_(right);
              }
            });
            break;
          case AST.Literal:
            expression = this.escape(ast.value);
            this.assign(intoId, expression);
            recursionFn(intoId || expression);
            break;
          case AST.UnaryExpression:
            this.recurse(ast.argument, void 0, void 0, function(expr) {
              right = expr;
            });
            expression = ast.operator + "(" + this.ifDefined(right, 0) + ")";
            this.assign(intoId, expression);
            recursionFn(expression);
            break;
          case AST.BinaryExpression:
            this.recurse(ast.left, void 0, void 0, function(expr) {
              left = expr;
            });
            this.recurse(ast.right, void 0, void 0, function(expr) {
              right = expr;
            });
            if (ast.operator === "+") {
              expression = this.plus(left, right);
            } else if (ast.operator === "-") {
              expression = this.ifDefined(left, 0) + ast.operator + this.ifDefined(right, 0);
            } else {
              expression = "(" + left + ")" + ast.operator + "(" + right + ")";
            }
            this.assign(intoId, expression);
            recursionFn(expression);
            break;
          case AST.LogicalExpression:
            intoId = intoId || this.nextId();
            self.recurse(ast.left, intoId);
            self.if_(
              ast.operator === "&&" ? intoId : self.not(intoId),
              self.lazyRecurse(ast.right, intoId)
            );
            recursionFn(intoId);
            break;
          case AST.ConditionalExpression:
            intoId = intoId || this.nextId();
            self.recurse(ast.test, intoId);
            self.if_(
              intoId,
              self.lazyRecurse(ast.alternate, intoId),
              self.lazyRecurse(ast.consequent, intoId)
            );
            recursionFn(intoId);
            break;
          case AST.Identifier:
            intoId = intoId || this.nextId();
            var inAssignment = self.current().inAssignment;
            if (nameId) {
              if (inAssignment) {
                nameId.context = this.assign(this.nextId(), "s");
              } else {
                nameId.context = self.stage === "inputs" ? "s" : this.assign(
                  this.nextId(),
                  this.getHasOwnProperty("l", ast.name) + "?l:s"
                );
              }
              nameId.computed = false;
              nameId.name = ast.name;
            }
            self.if_(
              self.stage === "inputs" || self.not(self.getHasOwnProperty("l", ast.name)),
              function() {
                self.if_(
                  self.stage === "inputs" || self.and_(
                    "s",
                    self.or_(
                      self.isNull(self.nonComputedMember("s", ast.name)),
                      self.hasOwnProperty_("s", ast.name)
                    )
                  ),
                  function() {
                    if (create && create !== 1) {
                      self.if_(
                        self.isNull(self.nonComputedMember("s", ast.name)),
                        self.lazyAssign(self.nonComputedMember("s", ast.name), "{}")
                      );
                    }
                    self.assign(intoId, self.nonComputedMember("s", ast.name));
                  }
                );
              },
              intoId && self.lazyAssign(intoId, self.nonComputedMember("l", ast.name))
            );
            recursionFn(intoId);
            break;
          case AST.MemberExpression:
            left = nameId && (nameId.context = this.nextId()) || this.nextId();
            intoId = intoId || this.nextId();
            self.recurse(
              ast.object,
              left,
              void 0,
              function() {
                var member = null;
                var inAssignment2 = self.current().inAssignment;
                if (ast.computed) {
                  right = self.nextId();
                  if (inAssignment2 || self.state.computing === "assign") {
                    member = self.unsafeComputedMember(left, right);
                  } else {
                    member = self.computedMember(left, right);
                  }
                } else {
                  if (inAssignment2 || self.state.computing === "assign") {
                    member = self.unsafeNonComputedMember(left, ast.property.name);
                  } else {
                    member = self.nonComputedMember(left, ast.property.name);
                  }
                  right = ast.property.name;
                }
                if (ast.computed) {
                  if (ast.property.type === AST.Literal) {
                    self.recurse(ast.property, right);
                  }
                }
                self.if_(
                  self.and_(
                    self.notNull(left),
                    self.or_(
                      self.isNull(member),
                      self.hasOwnProperty_(left, right, ast.computed)
                    )
                  ),
                  function() {
                    if (ast.computed) {
                      if (ast.property.type !== AST.Literal) {
                        self.recurse(ast.property, right);
                      }
                      if (create && create !== 1) {
                        self.if_(self.not(member), self.lazyAssign(member, "{}"));
                      }
                      self.assign(intoId, member);
                      if (nameId) {
                        nameId.computed = true;
                        nameId.name = right;
                      }
                    } else {
                      if (create && create !== 1) {
                        self.if_(
                          self.isNull(member),
                          self.lazyAssign(member, "{}")
                        );
                      }
                      self.assign(intoId, member);
                      if (nameId) {
                        nameId.computed = false;
                        nameId.name = ast.property.name;
                      }
                    }
                  },
                  function() {
                    self.assign(intoId, "undefined");
                  }
                );
                recursionFn(intoId);
              },
              !!create
            );
            break;
          case AST.CallExpression:
            intoId = intoId || this.nextId();
            if (ast.filter) {
              right = self.filter(ast.callee.name);
              args = [];
              forEach(ast.arguments, function(expr) {
                var argument = self.nextId();
                self.recurse(expr, argument);
                args.push(argument);
              });
              expression = right + ".call(" + right + "," + args.join(",") + ")";
              self.assign(intoId, expression);
              recursionFn(intoId);
            } else {
              right = self.nextId();
              left = {};
              args = [];
              self.recurse(ast.callee, right, left, function() {
                self.if_(
                  self.notNull(right),
                  function() {
                    forEach(ast.arguments, function(expr) {
                      self.recurse(
                        expr,
                        ast.constant ? void 0 : self.nextId(),
                        void 0,
                        function(argument) {
                          args.push(argument);
                        }
                      );
                    });
                    if (left.name) {
                      var x = self.member(left.context, left.name, left.computed);
                      expression = "(" + x + " === null ? null : " + self.unsafeMember(left.context, left.name, left.computed) + ".call(" + [left.context].concat(args).join(",") + "))";
                    } else {
                      expression = right + "(" + args.join(",") + ")";
                    }
                    self.assign(intoId, expression);
                  },
                  function() {
                    self.assign(intoId, "undefined");
                  }
                );
                recursionFn(intoId);
              });
            }
            break;
          case AST.AssignmentExpression:
            right = this.nextId();
            left = {};
            self.current().inAssignment = true;
            this.recurse(
              ast.left,
              void 0,
              left,
              function() {
                self.if_(
                  self.and_(
                    self.notNull(left.context),
                    self.or_(
                      self.hasOwnProperty_(left.context, left.name),
                      self.isNull(
                        self.member(left.context, left.name, left.computed)
                      )
                    )
                  ),
                  function() {
                    self.recurse(ast.right, right);
                    expression = self.member(left.context, left.name, left.computed) + ast.operator + right;
                    self.assign(intoId, expression);
                    recursionFn(intoId || expression);
                  }
                );
                self.current().inAssignment = false;
                self.recurse(ast.right, right);
                self.current().inAssignment = true;
              },
              1
            );
            self.current().inAssignment = false;
            break;
          case AST.ArrayExpression:
            args = [];
            forEach(ast.elements, function(expr) {
              self.recurse(
                expr,
                ast.constant ? void 0 : self.nextId(),
                void 0,
                function(argument) {
                  args.push(argument);
                }
              );
            });
            expression = "[" + args.join(",") + "]";
            this.assign(intoId, expression);
            recursionFn(intoId || expression);
            break;
          case AST.ObjectExpression:
            args = [];
            computed = false;
            forEach(ast.properties, function(property) {
              if (property.computed) {
                computed = true;
              }
            });
            if (computed) {
              intoId = intoId || this.nextId();
              this.assign(intoId, "{}");
              forEach(ast.properties, function(property) {
                if (property.computed) {
                  left = self.nextId();
                  self.recurse(property.key, left);
                } else {
                  left = property.key.type === AST.Identifier ? property.key.name : "" + property.key.value;
                }
                right = self.nextId();
                self.recurse(property.value, right);
                self.assign(
                  self.unsafeMember(intoId, left, property.computed),
                  right
                );
              });
            } else {
              forEach(ast.properties, function(property) {
                self.recurse(
                  property.value,
                  ast.constant ? void 0 : self.nextId(),
                  void 0,
                  function(expr) {
                    args.push(
                      self.escape(
                        property.key.type === AST.Identifier ? property.key.name : "" + property.key.value
                      ) + ":" + expr
                    );
                  }
                );
              });
              expression = "{" + args.join(",") + "}";
              this.assign(intoId, expression);
            }
            recursionFn(intoId || expression);
            break;
          case AST.ThisExpression:
            this.assign(intoId, "s");
            recursionFn(intoId || "s");
            break;
          case AST.LocalsExpression:
            this.assign(intoId, "l");
            recursionFn(intoId || "l");
            break;
          case AST.NGValueParameter:
            this.assign(intoId, "v");
            recursionFn(intoId || "v");
            break;
        }
      },
      getHasOwnProperty: function(element, property) {
        var key = element + "." + property;
        var own = this.current().own;
        if (!own.hasOwnProperty(key)) {
          own[key] = this.nextId(
            false,
            element + "&&(" + this.escape(property) + " in " + element + ")"
          );
        }
        return own[key];
      },
      assign: function(id, value) {
        if (!id)
          return;
        this.current().body.push(id, "=", value, ";");
        return id;
      },
      filter: function(filterName) {
        if (!this.state.filters.hasOwnProperty(filterName)) {
          this.state.filters[filterName] = this.nextId(true);
        }
        return this.state.filters[filterName];
      },
      ifDefined: function(id, defaultValue) {
        return "ifDefined(" + id + "," + this.escape(defaultValue) + ")";
      },
      plus: function(left, right) {
        return "plus(" + left + "," + right + ")";
      },
      return_: function(id) {
        this.current().body.push("return ", id, ";");
      },
      if_: function(test, alternate, consequent) {
        if (test === true) {
          alternate();
        } else {
          var body = this.current().body;
          body.push("if(", test, "){");
          alternate();
          body.push("}");
          if (consequent) {
            body.push("else{");
            consequent();
            body.push("}");
          }
        }
      },
      or_: function(expr1, expr2) {
        return "(" + expr1 + ") || (" + expr2 + ")";
      },
      hasOwnProperty_: function(obj, prop, computed) {
        if (computed) {
          return "(Object.prototype.hasOwnProperty.call(" + obj + "," + prop + "))";
        } else {
          return "(Object.prototype.hasOwnProperty.call(" + obj + ",'" + prop + "'))";
        }
      },
      and_: function(expr1, expr2) {
        return "(" + expr1 + ") && (" + expr2 + ")";
      },
      not: function(expression) {
        return "!(" + expression + ")";
      },
      isNull: function(expression) {
        return expression + "==null";
      },
      notNull: function(expression) {
        return expression + "!=null";
      },
      nonComputedMember: function(left, right) {
        var SAFE_IDENTIFIER = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;
        var UNSAFE_CHARACTERS = /[^$_a-zA-Z0-9]/g;
        var expr = "";
        if (SAFE_IDENTIFIER.test(right)) {
          expr = left + "." + right;
        } else {
          right = right.replace(UNSAFE_CHARACTERS, this.stringEscapeFn);
          expr = left + '["' + right + '"]';
        }
        return expr;
      },
      unsafeComputedMember: function(left, right) {
        return left + "[" + right + "]";
      },
      unsafeNonComputedMember: function(left, right) {
        return this.nonComputedMember(left, right);
      },
      computedMember: function(left, right) {
        if (this.state.computing === "assign") {
          return this.unsafeComputedMember(left, right);
        }
        return "(" + left + ".hasOwnProperty(" + right + ") ? " + left + "[" + right + "] : null)";
      },
      unsafeMember: function(left, right, computed) {
        if (computed)
          return this.unsafeComputedMember(left, right);
        return this.unsafeNonComputedMember(left, right);
      },
      member: function(left, right, computed) {
        if (computed)
          return this.computedMember(left, right);
        return this.nonComputedMember(left, right);
      },
      getStringValue: function(item) {
        this.assign(item, "getStringValue(" + item + ")");
      },
      lazyRecurse: function(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck) {
        var self = this;
        return function() {
          self.recurse(ast, intoId, nameId, recursionFn, create, skipWatchIdCheck);
        };
      },
      lazyAssign: function(id, value) {
        var self = this;
        return function() {
          self.assign(id, value);
        };
      },
      stringEscapeRegex: /[^ a-zA-Z0-9]/g,
      stringEscapeFn: function(c) {
        return "\\u" + ("0000" + c.charCodeAt(0).toString(16)).slice(-4);
      },
      escape: function(value) {
        if (isString(value))
          return "'" + value.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
        if (isNumber(value))
          return value.toString();
        if (value === true)
          return "true";
        if (value === false)
          return "false";
        if (value === null)
          return "null";
        if (typeof value === "undefined")
          return "undefined";
        throw $parseMinErr("esc", "IMPOSSIBLE");
      },
      nextId: function(skip, init) {
        var id = "v" + this.state.nextId++;
        if (!skip) {
          this.current().vars.push(id + (init ? "=" + init : ""));
        }
        return id;
      },
      current: function() {
        return this.state[this.state.computing];
      }
    };
    function ASTInterpreter(astBuilder, $filter) {
      this.astBuilder = astBuilder;
      this.$filter = $filter;
    }
    ASTInterpreter.prototype = {
      compile: function(expression) {
        var self = this;
        var ast = this.astBuilder.ast(expression);
        findConstantAndWatchExpressions(ast, self.$filter);
        var assignable;
        var assign;
        if (assignable = assignableAST(ast)) {
          assign = this.recurse(assignable);
        }
        var toWatch = getInputs(ast.body);
        var inputs;
        if (toWatch) {
          inputs = [];
          forEach(toWatch, function(watch, key) {
            var input = self.recurse(watch);
            watch.input = input;
            inputs.push(input);
            watch.watchId = key;
          });
        }
        var expressions = [];
        forEach(ast.body, function(expression2) {
          expressions.push(self.recurse(expression2.expression));
        });
        var fn = ast.body.length === 0 ? noop : ast.body.length === 1 ? expressions[0] : function(scope, locals) {
          var lastValue;
          forEach(expressions, function(exp) {
            lastValue = exp(scope, locals);
          });
          return lastValue;
        };
        if (assign) {
          fn.assign = function(scope, value, locals) {
            return assign(scope, locals, value);
          };
        }
        if (inputs) {
          fn.inputs = inputs;
        }
        fn.ast = ast;
        fn.literal = isLiteral(ast);
        fn.constant = isConstant(ast);
        return fn;
      },
      recurse: function(ast, context, create) {
        var left, right, self = this, args;
        if (ast.input) {
          return this.inputs(ast.input, ast.watchId);
        }
        switch (ast.type) {
          case AST.Literal:
            return this.value(ast.value, context);
          case AST.UnaryExpression:
            right = this.recurse(ast.argument);
            return this["unary" + ast.operator](right, context);
          case AST.BinaryExpression:
            left = this.recurse(ast.left);
            right = this.recurse(ast.right);
            return this["binary" + ast.operator](left, right, context);
          case AST.LogicalExpression:
            left = this.recurse(ast.left);
            right = this.recurse(ast.right);
            return this["binary" + ast.operator](left, right, context);
          case AST.ConditionalExpression:
            return this["ternary?:"](
              this.recurse(ast.test),
              this.recurse(ast.alternate),
              this.recurse(ast.consequent),
              context
            );
          case AST.Identifier:
            return self.identifier(ast.name, context, create);
          case AST.MemberExpression:
            left = this.recurse(ast.object, false, !!create);
            if (!ast.computed) {
              right = ast.property.name;
            }
            if (ast.computed)
              right = this.recurse(ast.property);
            return ast.computed ? this.computedMember(left, right, context, create) : this.nonComputedMember(left, right, context, create);
          case AST.CallExpression:
            args = [];
            forEach(ast.arguments, function(expr) {
              args.push(self.recurse(expr));
            });
            if (ast.filter)
              right = this.$filter(ast.callee.name);
            if (!ast.filter)
              right = this.recurse(ast.callee, true);
            return ast.filter ? function(scope, locals, assign, inputs) {
              var values = [];
              for (var i = 0; i < args.length; ++i) {
                values.push(args[i](scope, locals, assign, inputs));
              }
              var value = right.apply(void 0, values, inputs);
              return context ? { context: void 0, name: void 0, value } : value;
            } : function(scope, locals, assign, inputs) {
              var rhs = right(scope, locals, assign, inputs);
              var value;
              if (rhs.value != null) {
                var values = [];
                for (var i = 0; i < args.length; ++i) {
                  values.push(args[i](scope, locals, assign, inputs));
                }
                value = rhs.value.apply(rhs.context, values);
              }
              return context ? { value } : value;
            };
          case AST.AssignmentExpression:
            left = this.recurse(ast.left, true, 1);
            right = this.recurse(ast.right);
            return function(scope, locals, assign, inputs) {
              var lhs = left(scope, false, assign, inputs);
              var rhs = right(scope, locals, assign, inputs);
              lhs.context[lhs.name] = rhs;
              return context ? { value: rhs } : rhs;
            };
          case AST.ArrayExpression:
            args = [];
            forEach(ast.elements, function(expr) {
              args.push(self.recurse(expr));
            });
            return function(scope, locals, assign, inputs) {
              var value = [];
              for (var i = 0; i < args.length; ++i) {
                value.push(args[i](scope, locals, assign, inputs));
              }
              return context ? { value } : value;
            };
          case AST.ObjectExpression:
            args = [];
            forEach(ast.properties, function(property) {
              if (property.computed) {
                args.push({
                  key: self.recurse(property.key),
                  computed: true,
                  value: self.recurse(property.value)
                });
              } else {
                args.push({
                  key: property.key.type === AST.Identifier ? property.key.name : "" + property.key.value,
                  computed: false,
                  value: self.recurse(property.value)
                });
              }
            });
            return function(scope, locals, assign, inputs) {
              var value = {};
              for (var i = 0; i < args.length; ++i) {
                if (args[i].computed) {
                  value[args[i].key(scope, locals, assign, inputs)] = args[i].value(
                    scope,
                    locals,
                    assign,
                    inputs
                  );
                } else {
                  value[args[i].key] = args[i].value(scope, locals, assign, inputs);
                }
              }
              return context ? { value } : value;
            };
          case AST.ThisExpression:
            return function(scope) {
              return context ? { value: scope } : scope;
            };
          case AST.LocalsExpression:
            return function(scope, locals) {
              return context ? { value: locals } : locals;
            };
          case AST.NGValueParameter:
            return function(scope, locals, assign) {
              return context ? { value: assign } : assign;
            };
        }
      },
      "unary+": function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = argument(scope, locals, assign, inputs);
          if (isDefined(arg)) {
            arg = +arg;
          } else {
            arg = 0;
          }
          return context ? { value: arg } : arg;
        };
      },
      "unary-": function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = argument(scope, locals, assign, inputs);
          if (isDefined(arg)) {
            arg = -arg;
          } else {
            arg = -0;
          }
          return context ? { value: arg } : arg;
        };
      },
      "unary!": function(argument, context) {
        return function(scope, locals, assign, inputs) {
          var arg = !argument(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary+": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs = right(scope, locals, assign, inputs);
          var arg = plusFn(lhs, rhs);
          return context ? { value: arg } : arg;
        };
      },
      "binary-": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs = right(scope, locals, assign, inputs);
          var arg = (isDefined(lhs) ? lhs : 0) - (isDefined(rhs) ? rhs : 0);
          return context ? { value: arg } : arg;
        };
      },
      "binary*": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) * right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary/": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) / right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary%": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) % right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary===": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) === right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary!==": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) !== right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary==": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) == right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary!=": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) != right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary<": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) < right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary>": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) > right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary<=": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) <= right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary>=": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) >= right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary&&": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) && right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "binary||": function(left, right, context) {
        return function(scope, locals, assign, inputs) {
          var arg = left(scope, locals, assign, inputs) || right(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      "ternary?:": function(test, alternate, consequent, context) {
        return function(scope, locals, assign, inputs) {
          var arg = test(scope, locals, assign, inputs) ? alternate(scope, locals, assign, inputs) : consequent(scope, locals, assign, inputs);
          return context ? { value: arg } : arg;
        };
      },
      value: function(value, context) {
        return function() {
          return context ? { context: void 0, name: void 0, value } : value;
        };
      },
      identifier: function(name, context, create) {
        return function(scope, locals, assign, inputs) {
          var base = locals && name in locals ? locals : scope;
          if (create && create !== 1 && base && base[name] == null) {
            base[name] = {};
          }
          var value = base ? base[name] : void 0;
          if (context) {
            return { context: base, name, value };
          } else {
            return value;
          }
        };
      },
      computedMember: function(left, right, context, create) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          var rhs;
          var value;
          if (lhs != null) {
            rhs = right(scope, locals, assign, inputs);
            rhs = getStringValue(rhs);
            if (create && create !== 1) {
              if (lhs && !lhs[rhs]) {
                lhs[rhs] = {};
              }
            }
            if (Object.prototype.hasOwnProperty.call(lhs, rhs)) {
              value = lhs[rhs];
            }
          }
          if (context) {
            return { context: lhs, name: rhs, value };
          } else {
            return value;
          }
        };
      },
      nonComputedMember: function(left, right, context, create) {
        return function(scope, locals, assign, inputs) {
          var lhs = left(scope, locals, assign, inputs);
          if (create && create !== 1) {
            if (lhs && lhs[right] == null) {
              lhs[right] = {};
            }
          }
          var value = void 0;
          if (lhs != null && Object.prototype.hasOwnProperty.call(lhs, right)) {
            value = lhs[right];
          }
          if (context) {
            return { context: lhs, name: right, value };
          } else {
            return value;
          }
        };
      },
      inputs: function(input, watchId) {
        return function(scope, value, locals, inputs) {
          if (inputs)
            return inputs[watchId];
          return input(scope, value, locals);
        };
      }
    };
    var Parser = function Parser2(lexer, $filter, options) {
      this.lexer = lexer;
      this.$filter = $filter;
      this.options = options;
      this.ast = new AST(lexer, options);
      this.astCompiler = options.csp ? new ASTInterpreter(this.ast, $filter) : new ASTCompiler(this.ast, $filter);
    };
    Parser.prototype = {
      constructor: Parser,
      parse: function(text) {
        return this.astCompiler.compile(text);
      }
    };
    exports.Lexer = Lexer;
    exports.Parser = Parser;
  }
});

// node_modules/angular-expressions/lib/main.js
var require_main = __commonJS({
  "node_modules/angular-expressions/lib/main.js"(exports) {
    "use strict";
    var parse = require_parse();
    var filters = {};
    var Lexer = parse.Lexer;
    var Parser = parse.Parser;
    function compile(src, lexerOptions) {
      lexerOptions = lexerOptions || {};
      var cached;
      if (typeof src !== "string") {
        throw new TypeError(
          "src must be a string, instead saw '" + typeof src + "'"
        );
      }
      var parserOptions = {
        csp: false,
        // noUnsafeEval,
        literals: {
          // defined at: function $ParseProvider() {
          true: true,
          false: false,
          null: null,
          /*eslint no-undefined: 0*/
          undefined: void 0
          /* eslint: no-undefined: 1  */
        }
      };
      var lexer = new Lexer(lexerOptions);
      var parser = new Parser(
        lexer,
        function getFilter(name) {
          return filters[name];
        },
        parserOptions
      );
      if (!compile.cache) {
        return parser.parse(src);
      }
      cached = compile.cache[src];
      if (!cached) {
        cached = compile.cache[src] = parser.parse(src);
      }
      return cached;
    }
    compile.cache = /* @__PURE__ */ Object.create(null);
    exports.Lexer = Lexer;
    exports.Parser = Parser;
    exports.compile = compile;
    exports.filters = filters;
  }
});

// node_modules/docxtemplater/expressions.js
var require_expressions = __commonJS({
  "node_modules/docxtemplater/expressions.js"(exports, module) {
    var expressions = require_main();
    var dotRegex = /([\]\[\s+()*|:\/-]+|^)\.([\]\[\s+()*|:\/-]+|$)/g;
    var startRegex = /[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/;
    var middleRegex = /[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]/;
    function validStartChars(ch) {
      return startRegex.test(ch);
    }
    function validContinuationChars(ch) {
      return middleRegex.test(ch);
    }
    function getIndex(scope, context) {
      let index = null;
      for (let i = context.scopePathItem.length - 1; i >= 0; i--) {
        if (index == null && context.scopeTypes[i] === "array") {
          index = context.scopePathItem[i];
        }
      }
      return index;
    }
    function uniq(arr) {
      const hash = {}, result = [];
      for (let i = 0, l = arr.length; i < l; ++i) {
        if (!hash[arr[i]]) {
          hash[arr[i]] = true;
          result.push(arr[i]);
        }
      }
      return result;
    }
    function getIdentifiers(x) {
      if (x.expression) {
        return getIdentifiers(x.expression);
      }
      if (x.body) {
        return x.body.reduce((result, y) => result.concat(getIdentifiers(y)), []);
      }
      if (x.type === "CallExpression") {
        if (x.arguments) {
          return x.arguments.reduce(
            (result, y) => result.concat(getIdentifiers(y)),
            []
          );
        }
      }
      if (x.ast) {
        return getIdentifiers(x.ast);
      }
      if (x.left) {
        return getIdentifiers(x.left).concat(getIdentifiers(x.right));
      }
      if (x.type === "Identifier") {
        return [x.name];
      }
      if (x.type === "MemberExpression") {
        return getIdentifiers(x.object);
      }
      return [];
    }
    function angularParser(tag) {
      tag = tag.replace(/[’‘]/g, "'").replace(/[“”]/g, '"');
      while (dotRegex.test(tag)) {
        tag = tag.replace(dotRegex, "$1this$2");
      }
      const expr = expressions.compile(tag, {
        isIdentifierStart: validStartChars,
        isIdentifierContinue: validContinuationChars
      });
      const isAngularAssignment = expr.ast.body[0] && expr.ast.body[0].expression.type === "AssignmentExpression";
      return {
        getIdentifiers() {
          return uniq(getIdentifiers(expr));
        },
        get(scope, context) {
          const scopeList = context.scopeList;
          if (tag.trim() === "this") {
            return scope;
          }
          const px = new Proxy(
            {},
            {
              get(target, name) {
                if (name === "$index") {
                  return getIndex(scope, context);
                }
                if (scope == null) {
                  return;
                }
                if (scope[name] != null) {
                  const property = scope[name];
                  return typeof property === "function" ? property.bind(scope) : property;
                }
                for (let i = scopeList.length - 1; i >= 0; i--) {
                  const s = scopeList[i];
                  if (s[name] != null) {
                    const property = s[name];
                    return typeof property === "function" ? property.bind(s) : property;
                  }
                }
                return null;
              },
              has(target, name) {
                if (name === "$index") {
                  return true;
                }
                if (scope == null) {
                  return false;
                }
                if (scope[name] != null) {
                  return true;
                }
                for (let i = scopeList.length - 1; i >= 0; i--) {
                  const s = scopeList[i];
                  if (s[name] != null) {
                    return true;
                  }
                }
                return false;
              },
              set(target, name, value) {
                if (typeof scope === "object" && scope) {
                  scope[name] = value;
                  return true;
                }
                for (let i = scopeList.length - 1; i >= 0; i--) {
                  const s = scopeList[i];
                  if (typeof s === "object" && s) {
                    s[name] = value;
                    return true;
                  }
                }
                return true;
              },
              getOwnPropertyDescriptor(target, name) {
                if (scope.hasOwnProperty(name)) {
                  return {
                    writable: true,
                    enumerable: true,
                    configurable: true,
                    value: scope[name]
                  };
                }
              }
            }
          );
          const result = expr(px, px);
          if (isAngularAssignment) {
            return "";
          }
          return result;
        }
      };
    }
    angularParser.filters = expressions.filters;
    module.exports = angularParser;
  }
});
export default require_expressions();
//# sourceMappingURL=docxtemplater_expressions__js.js.map
