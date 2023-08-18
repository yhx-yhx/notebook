## pinia
### [pinia 文档](https://pinia.vuejs.org/zh/introduction.html)

## 本地化存储
- install
    ```javascript
    # npm
    npm install pinia-plugin-persist

    # yarn
    yarn add pinia-plugin-persist

    # pnpm
    pnpm add pinia-plugin-persist
    ```

- usage
   ```javascript
    import { createPinia } from 'pinia'
    import piniaPersist from 'pinia-plugin-persist'
    
    const pinia = createPinia()
    pinia.use(piniaPersist)
   ```
    - 基本用法
    ```javascript
        import { defineStore } from "pinia"

        export const useStore = defineStore("YourStore", () => {
            const foo = ref("foo")
            const bar = ref("bar")
            return { foo, bar }
        }, {
            enabled: true
        })
        //enable 开启后 默认会对整个 store的state 内容惊醒sessionStorage 存储  
    ```
    - 进阶用法
    ```javascript
        import { defineStore } from "pinia"

        import Cookies from 'js-cookie'

        const cookiesStorage = {
          setItem (key, state) {
            return Cookies.set('accessToken', state.accessToken, { expires: 3 })
          },
          getItem (key) {
            return JSON.stringify({
              accessToken: Cookies.getJSON('accessToken'),
            })
          },
        }

        export const useStore = defineStore("YourStore", () => {
           const foo = ref("foo")
           const bar = ref("bar")
           return { foo, bar }
        , {
           enabled: true,
           strategies: [{
               // 自定义存储的 key，默认是 store.$id
               key: "custom storageKey",
               // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
               // storage: localStorage,
               storage: cookiesStorage,//自定义存储对象也可以
               // state 中的字段名，按组打包储存
               paths: ["foo", "bar"]
           }]
        )
    ```
