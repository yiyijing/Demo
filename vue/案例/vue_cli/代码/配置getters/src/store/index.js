// 该文件用于创建最为核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)
// 准备actions---用于响应组件中的动作
const actions={
    jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	jiaWait(context,value){
		console.log('actions中的jiaWait被调用了')
		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	}
}
// 准备mutations---用于操作数据库
const mutations={
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    },
    
}
// 准备state---用于存储数据
const state={
    sum:0
}
// getters---用于对数据源里面的数据进行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}
// 创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})