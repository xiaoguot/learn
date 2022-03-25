<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <div>
      <home-swiper :banners="banners"></home-swiper>
      <feature-view :features="recommends"></feature-view>
      <recommend-view></recommend-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from './childComps/FeatureView';
import {getHomeMultidata} from '@/network/home'


export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    //1,请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>