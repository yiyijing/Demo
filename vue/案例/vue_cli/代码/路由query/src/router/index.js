// 改文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import Abount from '../pages/Abount'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: Abount,
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            path: 'detail',
                            component: Detail
                        },]
                },
                
            ],
        },

    ]
    ,
})