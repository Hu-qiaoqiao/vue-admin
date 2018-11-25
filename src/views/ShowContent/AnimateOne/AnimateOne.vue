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
import {mapState} from 'vuex'
export default {
  name: 'AnimateOne',
  computed: {
    ...mapState(['animatenames', 'cgWidth'])
  },
  data () {
    return {
      value: false,
      Allanimated: ''
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
