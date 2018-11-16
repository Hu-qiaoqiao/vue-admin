<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="swiper-container" id="swiper-container1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=513577268,2885670906&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542108778040&di=fae5db5f9746c34ef536115c67aebe11&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172320_VznU4.thumb.700_0.jpeg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924310079,1881827856&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1012416780,2759550084&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=252225728,4146914754&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3380944396,718088768&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1223663299,3852939174&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979830563,2208153213&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=52340458,2800004841&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=120002632,307088470&fm=26&gp=0.jpg)"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
  <div class="swiper-container" id="swiper-container2">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=513577268,2885670906&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542108778040&di=fae5db5f9746c34ef536115c67aebe11&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172320_VznU4.thumb.700_0.jpeg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924310079,1881827856&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1012416780,2759550084&fm=26&gp=0.jpg)"></div>
      <div class="swiper-slide" style="background-image:url(https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=120002632,307088470&fm=26&gp=0.jpg)"></div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Button',
  props: {
    cgWidth: String
  },
  mounted () {
    new Swiper('#swiper-container1', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '#swiper-pagination1'
      }
    })
    new Swiper('#swiper-container2', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: '#swiper-pagination2'
      }
    })
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
    position: relative;
  }
  #swiper-container1 {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  #swiper-container1 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;

  }
  #swiper-container2{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 600px;
    margin-left: -150px;
    margin-top: -150px;
  }
  #swiper-container2 .swiper-slide {
    background-position: center;
    background-size: cover;
  }

</style>
