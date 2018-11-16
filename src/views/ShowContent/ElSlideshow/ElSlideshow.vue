<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <el-row>
    <el-col class="slide_box" :span="11">
      <p>基础用法</p>
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col class="slide_box" :span="11">
      <p>基础用法</p>
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="slide_box" :span="11">
      <p>指示器</p><br>
      <span>可以将指示器的显示位置设置在容器外部</span>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col class="slide_box" :span="11">
      <p>切换箭头</p><br>
      <span>可以设置切换箭头的显示时机</span>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
  <el-row>
    <el-col class="slide_box" :span="20">
      <p>卡片化</p><br>
      <span>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</span>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'ElSlideshow',
  props: {
    cgWidth: String
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .el-row{
    margin: 0 !important;
  }
  .slide_box{
    margin: 20px 20px;
    border: 1px solid #949494;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: #e4e4e4;
  }
  .slide_box p,
  .slide_box span
  {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #adadad;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
