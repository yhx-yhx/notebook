const watermark = {
};
/**
 * @description 将生成的canvas变成 图片 创建一个div repeat  id建议使用随机id 减小 用户绕过的可能性
 * @param {*} str
 * @return {*}
 */
const setWatermark = (str,  options ) => {
  let defaultOptions = { color: "rgba(200, 200, 200, 0.50)", fontSize: "20px", fontFamily: "黑体", id: "watermarker_id" }
  let  { color, fontFamily, fontSize, id } = { ...defaultOptions,...options}
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  const can = document.createElement('canvas');
  can.width = 350;
  can.height = 250;

  const cans = can.getContext('2d');
  cans.rotate(-15 * Math.PI / 150);
  cans.font = `${fontSize} ${fontFamily}`;
  cans.fillStyle = color;
  cans.textAlign = 'left';
  cans.textBaseline = 'Middle';
  cans.fillText(str, can.width / 16, can.height / 2);

  const div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '100px';
  div.style.left = '150px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = `${document.documentElement.clientWidth}px`;
  div.style.height = `${document.documentElement.clientHeight}px`;
  div.style.background = `url(${can.toDataURL('image/png')}) left top repeat`;
  document.body.appendChild(div);
  return id;
};

// 该方法只允许调用一次
let timer = null;
watermark.set = (str,options) => {
  let id = setWatermark(str,options);
  timer = setInterval(() => {
    if (document.getElementById(id) === null) {
      id = setWatermark(str,options);
    }
  }, 500);
  window.onresize = () => {
    setWatermark(str,options);
  };
};

const outWatermark = (id) => {
  if (document.getElementById(id) !== null) {
    const div = document.getElementById(id);
    div.style.display = 'none';
  }
};
watermark.out = () => {
  const str = 'watermarker_id';
  outWatermark(str);
  timer && clearInterval(timer);
};

export default watermark;
