<template>
  <div>
    <button @click="isShow=!isShow">显示隐藏</button>
    <transition>
        <h2 v-show="isShow">你好</h2>
    </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }

}
</script>

<style scoped>
   h2{
      background: pink;
   }
   .v-enter-active{
    animation: anima 1s linear;
   }
   .v-leave-active{
    animation: anima 1s reverse;
   }
  @keyframes anima{
	from{
		transform: translateX(-100%);
	}
	to{
		transform: translateX(0%);
	}
  }
</style>