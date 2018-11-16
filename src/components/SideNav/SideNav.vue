<template>
    <div class="nav_container" :style="{width: cgWidth}">
      <div class="my_log"><s></s></div>
      <div>
        <el-menu background-color="#001520" text-color="#eeeeee" active-text-color="#eee"
                 default-active="1-4-1" menu-trigger="click" unique-opened class="el-menu-vertical-demo"
                 :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" @click="goto('/msite')">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-printer"></i>
              <span slot="title">UI</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="goto('/msite/button')">按钮</el-menu-item>
              <el-menu-item index="2-2" @click="goto('/msite/MessageBox')">弹出框</el-menu-item>
              <el-menu-item index="2-3" @click="goto('/msite/upload')">上传</el-menu-item>
              <el-menu-item index="2-4" @click="goto('/msite/form')">表单</el-menu-item>
              <el-menu-item index="2-5" @click="goto('/msite/transfer')">穿梭框</el-menu-item>
              <el-menu-item index="2-6" @click="goto('/msite/dialog')">对话框</el-menu-item>
              <el-menu-item index="2-7" @click="goto('/msite/elslideshow')">轮播图</el-menu-item>
              <el-menu-item index="2-8" @click="goto('/msite/collapse')">折叠框</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-loading"></i>
              <span slot="title">动画</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goto('/msite/animateone')">基础动画</el-menu-item>
              <el-menu-item index="3-2" @click="goto('/msite/animatetwo')">3D魔方</el-menu-item>
              <el-menu-item index="3-3" @click="goto('/msite/animatethree')">3D球</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-sort"></i>
              <span slot="title">轮播图</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="goto('/msite/swiper')">Swiper</el-menu-item>
              <el-menu-item index="4-2" @click="goto('/msite/slideshowone')">DIY</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-rank"></i>
              <span slot="title">地图</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1" @click="goto('/msite/bdmap')">百度地图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-picture"></i>
              <span slot="title">画廊</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1" @click="goto('/msite/photo')">Photo</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">页面</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1" @click="goto('/error')">404</el-menu-item>
              <el-menu-item index="7-2" @click="goto('/login')">登陆</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    changeWidth: Function,
    cgWidth: String,
    isCollapse: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
  .nav_container{
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #001520;
    transition: all 0.5s;
    overflow: hidden;
  }
  .my_log{
    width: 70%;
    height: 29px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    padding-top: 1px;
  }
  .my_log s {
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background: url(./images/laugh.png) no-repeat;
    -webkit-background-size: 28px 28px;
    background-size: 28px 28px;
  }
  .el-menu--collapse{
    width: 100px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu{
    border: none;
  }
  .el-menu-item{
    background-color: #000c17 !important;
    color: #fff !important;
  }
  .el-menu-item-group__title{
    display: none !important;
  }
  .is-active{
    background-color: #777 !important;
    color: #fff !important;
  }
  .el-tooltip__popper.is-dark {
    background: #000c17 !important;
    color: #fff !important;
  }
</style>
