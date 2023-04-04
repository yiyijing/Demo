<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot name="center">center</slot>
    <slot name="footer">footer</slot>
    
    
  </div>
</template>

<script>
export default {
    name:'categroy', 
    props:['title']

}
</script>

<style>
   h3{
    text-align: center;
    background: orange;

   }
   .category{
    height: 300px;
    width: 200px;
    background: skyblue;
   }
   img{
    width: 100%;
   }
</style>