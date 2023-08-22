## [axios文档](https://www.axios-http.cn/docs/intro)
> 也可以直接将 baseURL 进行封装 可以在 配置里面 传入 baseURl 直接可以将 出初始值 仅在本次进行覆盖；

<br/>

## axios 封装

| params  | type   |
| ------- | ------ |
| baseURL | String |
| url     | String |
| method  | String |

``` javascript

import axios from "axios";
// options
// { baseURl:''}
export const http = (options) => {
    return new Promise((resolve, reject) => {
        const { baseURL } = options;
        const request = axios.create({
            baseURL: baseURL ? baseURL : '/svc',
        });
        request.baseURL = baseURL
        // withCredentials 表示跨域请求时是否 需要凭证 默认是 false
        // request.defaults.withCredentials = true
        request.interceptors.request.use(
            (config) => {
                // const authStore = useAuthStore()

                // const token = authStore.userInfo.pin

                // if (token) {

                //     config.headers.Authorization = "Bearer " + token;

                // }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // 添加响应拦截器
        request.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error && error.response) {
                    switch (error.response.status) {
                        case 401: {
                            // 没权限 要做的事

                        }
                        case 500: {
                            // 后台问题 提示信息
                        }
                    }
                }
                return Promise.reject(error);
            }
        );
        request(options).then(res => {
            resolve(res);
        }).catch(error => {
            reject(error)
        })
    })
}


```

