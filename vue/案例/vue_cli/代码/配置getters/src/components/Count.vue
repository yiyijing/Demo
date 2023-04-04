<template>
  <div>
    <h1>当前求和为{{$store.state.sum}}</h1>
    <h3>当前求和放大10倍为：{{$store.getters.bigSum}}</h3>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前奇数再加1</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name:'Count',
  data() {
    return {
      n:1,
    }
  },
  methods: {
    increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			console.log('Count',this)
		},

}
</script>

<style>
button{
  margin-left: 5px;
}
</style>