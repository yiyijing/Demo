<template>
  <div class="container">
    <categroy title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="#">更多美食</a>
    </categroy>
    <categroy title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">单击游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </categroy>
    <categroy title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"  slot="center"
      ></video>
      <div class="foot" slot="footer">
        <a href="#">经典</a>
        <a href="#">热门</a>
        <a href="#">推荐</a>
      </div>
    </categroy>
  </div>
</template>

<script>
import categroy from "./components/categroy.vue";
export default {
  name: "App",
  components: { categroy },
  data() {
    return {
      foods: ["火锅", "烧烤", "汉堡", "炸鸡"],
      games: ["王者荣耀", "英雄联盟", "超级玛丽"],
      films: ["《中国》", "《阿甘正传》", "《教父》"],
    };
  },
};
</script>

<style>
.container .foot{
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
</style>