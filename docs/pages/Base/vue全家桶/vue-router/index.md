# VueRouter



## router-link

```
<router-link to="/">go<router-link>
//相当于a标签
//to :prams 指定链接，
```



## router-view

将标签放在 任何你想要呈现布局的位置上



## 路由的实例创建

```
const routes=[{path:'/',component:import(()=>"@/view/home"},{path:'/login',component:import(()=>"@/viewlogin"}
]
const router=vueRouter.createRouter({
//路由的格式，采用hash方式；
history:VueRouter.createWebHashHistory(),
routes,   //路由规则
})
//创建并挂载到实例
const app =Vuew.createApp({});
//注册组件 在全局使用
app.use(router);
//完成页面的挂载
app.mount('#app');
```

## 动态路由的匹配

### **des**

由于用户ID 不同，显示页面存在差异，根据id字段来渲染页面；

```
const routes=[{path:'/user/:id',component:()=>import ("@/view/user"))}]
//：后面的参数，可以通过this.$route.parms 暴露出来
```



## 嵌套路由

**ps**:子路由前不加   /

```
/user/router/profile                     /user/router/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

```
const routes=[{path:'user/router',name:'profile',component:Profile,children:[{path:'profile',component:UserProfile},{path:'posts',component:UserPosts}]}]
```

## 编程式导航

在Vue实例中，可以通过$router访问路由的实例，

### 导航到新的页面：

```
$router.push('/user/posts');
  //相当于<router-link :to="...">导航到</router-link>
```

```
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })
//或 
router.push('/user/${username}')

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

### 替换当前位置

```
router.replace(...)
//或者
router.push({path:'/home',replace:true})
```

**ps**:不会添加history的记录；

### 历史跳转

```
router.go(1)  //router.forward()相同
router.go(-1)  //router.back() 相同
router.go(3)//前进三条数据
```

## 命名路由

```
router.push({name:'user',params:{username:'yhx'}})
```

