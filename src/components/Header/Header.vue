<template>
<div class="header_container">
  <s class="header_main bg2" :style="{marginLeft: margin}" @click="cg"></s>
  <div class="user_meassage">
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">通知</el-button>
    </el-badge>
    <el-dropdown class="user">
      <el-button id="el_button" type="primary"></el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>你好_访客</el-dropdown-item>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>系统设置</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
   </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    changeWidth: Function
  },
  data () {
    return {
      margin: '220px',
      flag: true
    }
  },
  methods: {
    cg () {
      const headermain = document.querySelector('.header_main')
      if (this.falg) {
        this.margin = '220px'
        this.changeWidth(true)
        headermain.classList.remove('bg1')
        headermain.classList.add('bg2')
        this.falg = false
      } else {
        this.margin = '120px'
        this.changeWidth(false)
        headermain.classList.remove('bg2')
        headermain.classList.add('bg1')
        this.falg = true
      }
    }
  }
}
</script>

<style scoped>
  .user{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  #el_button{
    padding: 25px 25px;
    border-radius: 50%;
    margin-top: 10px;
    border: none;
    background-image: url(./images/user.jpg);
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .user_meassage{
    float: right;
    margin-right: 100px;
  }
  .item {
    margin-top: 25px;
    margin-right: 60px;
    float: left;
  }
  .header_container{
    width: auto;
    height: 70px;
    background-image: linear-gradient(to right, #000c17 0%, #000c17 30%, #646464 100%);
  }
  .header_main{
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-top: 20px;
    transition: all 0.5s;
  }
  .bg1{
    background: url(./images/caidan.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  .bg2{
    background: url(./images/caidan2.png) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
</style>
