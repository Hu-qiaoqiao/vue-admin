<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="box">
    <div class="up"></div>
    <div class="down"></div>
    <div class="left"></div>
    <div class="right"></div>
    <div class="near"></div>
    <div class="far"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AnimateTwo',
  props: {
    cgWidth: String
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .box {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    margin: 200px auto;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(30deg);
    animation: gyrate 8s linear infinite ;
  }

  .up {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(192, 29, 225, 0.3);
    transform: rotateX(90deg) translateZ(150px) translateY(150px);
  }

  .down {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(237, 49, 56, 0.3);
    transform: rotateX(90deg) translateZ(-150px) translateY(150px);
  }

  .left {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(23, 203, 72,0.3);
    transform: rotateY(90deg) translateZ(-150px) translateX(-150px);
  }

  .right {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(226, 175, 227, 0.3);
    transform: rotateY(90deg) translateZ(150px) translateX(-150px);
  }

  .near {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(255, 234, 56, 0.3);
    transform: translateZ(300px);
  }

  .far {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(24, 255, 245, 0.3);
  }
  @keyframes gyrate {
    0%{
      transform:rotateX(0deg)  rotateY(0deg) ;
    }
    25%{
      transform:rotateX(90deg) rotateY(90deg);
    }
    50%{
      transform:rotateX(180deg) rotateY(180deg);
    }
    75%{
      transform:rotateX(270deg) rotateY(270deg);
    }
    100%{
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
</style>
