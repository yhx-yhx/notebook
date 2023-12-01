// my-component.js
import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
export default {
    setup() {
        const message = ref(0)
        function handle() {
            message.value++
        }
        return { message, handle }
    },
    template:/*html*/ `<div @click="handle">count is {{ message }}</div>`
}