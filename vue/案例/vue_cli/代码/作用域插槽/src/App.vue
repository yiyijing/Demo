<template>
  <div class="container">
    <categroy title="游戏">
      <template scope="sujk">
        <ul>
          <li v-for="(g, index) in sujk.game" :key="index">{{ g }}</li>
        </ul>
      </template>
    </categroy>
    <categroy title="游戏">
      <template scope="sujk">
        <ol>
          <li v-for="(g, index) in sujk.game" :key="index">{{ g }}</li>
        </ol>
      </template>
    </categroy>
    <categroy title="游戏"> </categroy>
  </div>
</template>

<script>
import categroy from "./components/categroy.vue";
export default {
  name: "App",
  components: { categroy },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>