<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="box ">
     <ul class="clearfix">
      <li><img src="./images/01.jpg" height="170" width="490"/></li>
      <li><img src="./images/02.jpg" height="170" width="490"/></li>
      <li><img src="./images/03.jpg" height="170" width="490"/></li>
      <li><img src="./images/04.jpg" height="170" width="490"/></li>
      <li><img src="./images/05.jpg" height="170" width="490"/></li>
      <li><img src="./images/01.jpg" height="170" width="490"/></li>
      <li><img src="./images/02.jpg" height="170" width="490"/></li>
      <li><img src="./images/03.jpg" height="170" width="490"/></li>
      <li><img src="./images/04.jpg" height="170" width="490"/></li>
      <li><img src="./images/05.jpg" height="170" width="490"/></li>
    </ul>
  </div>
  <div style="text-align: center;font-size: 24px">
    <p>纯css</p>
  </div>
  <div class="box2 clearfix" id="box">
    <div id="but">
      <s>＜</s><s>＞</s>
    </div>
    <ul class="clearfix">
      <li><img src="./images/01.jpg" height="170" width="490"/></li>
      <li><img src="./images/02.jpg" height="170" width="490"/></li>
      <li><img src="./images/03.jpg" height="170" width="490"/></li>
      <li><img src="./images/04.jpg" height="170" width="490"/></li>
      <li><img src="./images/05.jpg" height="170" width="490"/></li>
      <li><img src="./images/01.jpg" height="170" width="490"/></li>
    </ul>
    <ol class="clearfix">
      <li class="now">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ol>
  </div>
  <div style="text-align: center;font-size: 24px">
    <p>纯原生js</p>
  </div>
</div>
</template>

<script>
import '../../../../static/js/index'
export default {
  name: 'slideshowone',
  props: {
    cgWidth: String
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .box{
    width: 490px;
    height: 170px;
    border: 1px solid #000;
    margin: 50px auto;
    overflow: hidden;
    position: relative;
  }
  .description{
    position: absolute;
    left: 245px;
    bottom: -20px;
  }
  .box ul{
    list-style: none;
    width:4900px;
    height: 170px;
    animation: gun 15s linear infinite;
  }
  .box ul:hover{
    animation-play-state: paused;
  }
  .box li {
    float: left;
  }
  @keyframes gun {
    0%{
      transform: translateX(0px);
    }
    100%{
      transform: translateX(-2450px);
    }
  }
  .box2{
    width: 490px;
    height: 170px;
    margin: 50px auto;
    border: 1px solid #000;
    position: relative;
    overflow: hidden;
  }
  .box2 div{
    width: 490px;
    position: absolute;
    top: 50%;
    margin-top: -30px;
  }
  .box2 div s{
    display: block;
    width: 30px;
    height: 60px;
    font:400 30px/60px Consolas;
    color: rgba(6, 6, 6,0.4);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    background-color: rgba(255,255,255,0.3);

  }
  .box2 div s:nth-child(1){
    float: left;
    border-radius: 0 15px 15px 0;
  }
  .box2 div s:nth-child(2){
    float: right;
    border-radius:15px 0 0 15px;
  }
  .box2 ul {
    width: 3000px;
    height: 170px;
    position: absolute;
  }
  li {
    float: left;
    list-style: none;
  }
  .box2 ol {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -57.5px;
  }
  .box2 ol li{
    margin-left: 8px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    line-height: 15px;
    cursor: pointer;
  }
  .now{
    background-color: #12fcff !important;
  }
  .clearfix::before,
  .clearfix::after {
    display: block;
    overflow: hidden;
    clear: both;
    content: "";
    line-height: 0;
    visibility: hidden;
  }
</style>
