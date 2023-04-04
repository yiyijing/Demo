<template>
  <div>
    <h1>当前求和为{{sum}}</h1>
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
  name:'count',
  data() {
    return {
      sum:0,
      n:1,
    }
  },
  methods: {
    increment(){
      this.sum+=this.n
    },
    decrement(){
      this.sum-=this.n
    },
    incrementOdd(){
      if(this.sum%2){
        this.sum+=this.n
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum+=this.n
      },500)
    }
  },

}
</script>

<style>
button{
  margin-left: 5px;
}
</style>