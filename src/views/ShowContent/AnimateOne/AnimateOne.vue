<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="animate_btn">
    <p style="display: inline-block">点击激活/取消全部动画</p>
    <el-switch v-model="value" active-color="#000c17" inactive-color="#777"></el-switch>
  </div>
  <div class="animate_box clearfix">
    <div class="animate_item infinite" @mouseenter="AddClass(true,index)" @mouseleave="AddClass(false,index)"
         :class="[animatename.name,animatename.animated,Allanimated]" v-for="(animatename,index) in animatenames" :key="index" >
      <p>{{animatename.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AnimateOne',
  props: {
    cgWidth: String
  },
  data () {
    return {
      value: false,
      Allanimated: '',
      animatenames: [
        {name: 'bounce', animated: ''},
        {name: 'flash', animated: ''},
        {name: 'pulse', animated: ''},
        {name: 'rubberBand', animated: ''},
        {name: 'shake', animated: ''},
        {name: 'headShake', animated: ''},
        {name: 'swing', animated: ''},
        {name: 'tada', animated: ''},
        {name: 'wobble', animated: ''},
        {name: 'jello', animated: ''},
        {name: 'flash', animated: ''},
        {name: 'bounceIn', animated: ''},
        {name: 'bounceInDown', animated: ''},
        {name: 'bounceInLeft', animated: ''},
        {name: 'bounceInRight', animated: ''},
        {name: 'bounceInUp', animated: ''},
        {name: 'bounceOut', animated: ''},
        {name: 'bounceOutDown', animated: ''},
        {name: 'bounceOutLeft', animated: ''},
        {name: 'bounceOutRight', animated: ''},
        {name: 'bounceOutUp', animated: ''},
        {name: 'fadeIn', animated: ''},
        {name: 'fadeInDown', animated: ''},
        {name: 'fadeInDownBig', animated: ''},
        {name: 'fadeInLeft', animated: ''},
        {name: 'fadeInLeftBig', animated: ''},
        {name: 'fadeInRight', animated: ''},
        {name: 'fadeInRightBig', animated: ''},
        {name: 'fadeInUp', animated: ''},
        {name: 'fadeInUpBig', animated: ''},
        {name: 'fadeOut', animated: ''},
        {name: 'fadeOutDown', animated: ''},
        {name: 'fadeOutDownBig', animated: ''},
        {name: 'fadeOutLeft', animated: ''},
        {name: 'fadeOutLeftBig', animated: ''},
        {name: 'fadeOutRight', animated: ''},
        {name: 'fadeOutRightBig', animated: ''},
        {name: 'fadeOutUp', animated: ''},
        {name: 'fadeOutUpBig', animated: ''},
        {name: 'flipInX', animated: ''},
        {name: 'flipInY', animated: ''},
        {name: 'flipOutX', animated: ''},
        {name: 'flipOutY', animated: ''},
        {name: 'lightSpeedIn', animated: ''},
        {name: 'lightSpeedOut', animated: ''},
        {name: 'rotateIn', animated: ''},
        {name: 'rotateInDownLeft', animated: ''},
        {name: 'rotateInDownRight', animated: ''},
        {name: 'rotateInUpLeft', animated: ''},
        {name: 'rotateInUpRight', animated: ''},
        {name: 'rotateOut', animated: ''},
        {name: 'rotateOutDownLeft', animated: ''},
        {name: 'rotateOutDownRight', animated: ''},
        {name: 'hinge', animated: ''},
        {name: 'jackInTheBox', animated: ''},
        {name: 'rollIn', animated: ''},
        {name: 'rollOut', animated: ''},
        {name: 'zoomIn', animated: ''},
        {name: 'zoomInDown', animated: ''},
        {name: 'zoomInLeft', animated: ''},
        {name: 'zoomInRight', animated: ''},
        {name: 'zoomInUp', animated: ''},
        {name: 'zoomOut', animated: ''},
        {name: 'zoomOutDown', animated: ''},
        {name: 'zoomOutLeft', animated: ''},
        {name: 'zoomOutRight', animated: ''},
        {name: 'zoomOutUp', animated: ''},
        {name: 'slideInDown', animated: ''},
        {name: 'slideInLeft', animated: ''},
        {name: 'slideInRight', animated: ''},
        {name: 'slideInUp', animated: ''},
        {name: 'slideOutDown', animated: ''},
        {name: 'slideOutLeft', animated: ''},
        {name: 'slideOutRight', animated: ''},
        {name: 'slideOutUp', animated: ''},
        {name: 'heartBeat', animated: ''}
      ]
    }
  },
  methods: {
    AddClass (bool, index) {
      if (bool === true) {
        this.animatenames[index].animated = 'animated'
      } else {
        this.animatenames[index].animated = ''
      }
    }
  },
  watch: {
    value: function (bool) {
      if (bool === true) {
        this.Allanimated = 'animated'
      } else {
        this.Allanimated = ''
      }
    }
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .animate_btn{
    width: 500px;
    height: 30px;
    padding-left: 20px;
    padding-top: 20px;
  }
  .animate_btn p{
    font-size: 14px;
  }
  .animate_box{
    width: 100%;
    height: 100%;
  }
  .animate_item{
    width: 20%;
    height: 100px;
    background-color: #fff;
    border: 1px solid #cacaca;
    border-radius: 5px;
    margin: 10px 2%;
    float: left;
  }
  .animate_item p {
    text-align: center;
    line-height: 100px;
  }
  .clearfix:after{
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
