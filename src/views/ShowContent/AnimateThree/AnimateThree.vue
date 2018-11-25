<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="box">
    <div class="box1">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
    <s></s>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'AnimateThree',
  computed: {
    ...mapState(['cgWidth'])
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .box {
    width: 1000px;
    height: 500px;
    margin: 300px auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-16deg) rotateY(20deg);
    text-align: center;
    animation: gun 16s linear infinite;
  }
  .box1{
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;

  }
  .box2{
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
    transform-style: preserve-3d;
    transform:rotateX(90deg);
  }
  .box i {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: rgba(15,15,15,0.3);
  }
  i:nth-child(1){
    transform: rotateY(36deg) ;
  }
  i:nth-child(2){
    transform: rotateY(72deg) ;
  }
  i:nth-child(3){
    transform: rotateY(108deg);
  }
  i:nth-child(4){
    transform: rotateY(144deg) ;
  }
  i:nth-child(5){
    transform: rotateY(180deg) ;
  }
  s{
    position: absolute;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
  }
  s:nth-child(2){
    left: 22px;
    top: -32px;
    width: 450px;
    height: 450px;
    transform:rotateX(90deg)  translateZ(40px);
  }
  s:nth-child(3){
    left: 60px;
    top: -20px;
    width: 380px;
    height: 380px;
    transform: rotateX(90deg) translateZ(80px);
  }
  s:nth-child(4){
    left:100px;
    top: 21px;
    width: 300px;
    height: 300px;
    transform:rotateX(90deg)  translateZ(120px);
  }
  s:nth-child(5){
    left:0px;
    top: 100px;
    width: 500px;
    height: 500px;
    transform:rotateX(90deg)  translateZ(120px);
  }
  s:nth-child(6){
    left: 11px;
    top: 116px;
    width: 480px;
    height: 480px;
    transform:rotateX(90deg)  translateZ(40px);
  }
  s:nth-child(7){
    left: 50px;
    top: 277px;
    width: 400px;
    height: 400px;
    transform: rotateX(90deg) translateZ(80px);
  }
  s:nth-child(8){
    left:100px;
    top: 416px;
    width: 300px;
    height: 300px;
    transform:rotateX(90deg)  translateZ(120px);
  }
  s:nth-child(9){
    left:160px;
    top: 47px;
    width: 180px;
    height: 180px;
    transform:rotateX(90deg)  translateZ(120px);
  }
  s:nth-child(10){
    left:160px;
    top: 513px;
    width: 180px;
    height: 180px;
    transform:rotateX(90deg)  translateZ(120px);
  }
  @keyframes gun {
    0%{
      transform: rotateX(0) rotateY(0);
    }
    100%{
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
</style>
