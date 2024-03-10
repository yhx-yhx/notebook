import { ref } from 'vue'
export function useCopyToClipboard() {
    const isDone = ref(false)
    function copyToClipboard(text) {
        if (typeof navigator.clipboard.writeText === 'function') {
            navigator.clipboard.writeText(text).then(() => { isDone.value = true }, (error) => { isDone.value = false })
        } else if (typeof document.execCommand === 'function') {
            var textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            // 废弃标准 不推荐使用
            isDone.value = document.execCommand('copy'); // 返回值 一个 Boolean ，如果是 false 则表示操作不被支持或未被启用。
            document.body.removeChild(textArea);
        } else {
            alert('此浏览器不支持复制到剪贴板的功能');
        }
    }
    return { isDone, copyToClipboard }
}