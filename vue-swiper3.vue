//swiper3官方api https://3.swiper.com.cn/api/function/2014/1218/103.html
//在vue中使用
//install vue-awesome-swiper@2.6.7 --save
//全局注册 
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/dist/css/swiper.css'
//Vue.use(VueAwesomeSwiper, /* { default global options } */)
<template>
  <div>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      class="carousel-parent"
      @onSlideChangeEnd="SlideChangeEnd()"
    >
      <template v-for="(i,index) in riskdataList">
        <swiper-slide :key="index">
          <p class="legal-proceedings">{{i.type}}</p>
          <p class="customer-name">{{i.name}}</p>
          <p class="date">{{i.date}}</p>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 配置 */
      swiperOption: {
        notNextTick: true,
        freeMode: true,
        // slidesPerView: "auto",//轮播的视图自动为无线重复
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        autoplay: {
          delay: 0,
          waitForTransition: true //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        speed: 3000,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination"
        },
        direction: "vertical",
        height: 44,
        onSlideChangeEnd: this.SlideChangeEnd //slide滑块动画结束时回调
      }
    };
  },
  methods: {
    SlideChangeEnd(swiper) {
      console.log("当前slide索引" + "=======" + swiper.activeIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>