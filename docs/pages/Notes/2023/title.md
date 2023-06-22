## 算法题

> 我印象里的第一道面试题 让我手写的题目

```html
//实现 在AABBCCCDDDDDDD 记录每个字母出现的次数？
const words = 'AABBBCCCDDDEEEAQQ____'
        const getNumberLetter = (words) => {
            return words.split('').reduce((a, b) => {
                if (a.hasOwnProperty(b)) {
                    return { [b]: a[b]++, ...a }
                } else {
                    return { [b]: 1, ...a }
                }
            }, {})
        }
```

