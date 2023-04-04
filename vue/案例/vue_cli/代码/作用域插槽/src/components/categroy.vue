<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- <slot>center</slot> -->
    <!-- <slot name="footer">footer</slot> -->
    <slot :game="games">我是默认的插槽</slot>
    <!-- <ul>
      <li v-for="(g, index) in games" :key="index">{{ g }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "categroy",
  props: ["title"],
  data() {
    return {
     
      games: ["王者荣耀", "英雄联盟", "超级玛丽"],
   
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  background: orange;
}
.category {
  height: 300px;
  width: 200px;
  background: skyblue;
}
img {
  width: 100%;
}
</style>