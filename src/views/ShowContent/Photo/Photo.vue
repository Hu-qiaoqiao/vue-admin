<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <ul class="clearfix">
    <li v-for="(item,index) in imgs_photo" :key='item'><img class="img" :src="item.src" alt="" :key="index"  preview="1" preview-text="描述" ></li>
  </ul>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Photo',
  computed: {
    ...mapState(['cgWidth', 'imgs_photo'])
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  li {
    float: left;
  }
  .img{
    width: 500px;
    height: 250px;
    margin: 10px 10px;
  }
</style>
