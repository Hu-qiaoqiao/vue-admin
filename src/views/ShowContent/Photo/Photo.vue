<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <ul class="clearfix">
    <li v-for="(item,index) in imgs" :key='item'><img class="img" :src="item.src" alt="" :key="index"  preview="1" preview-text="描述" ></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Photo',
  props: {
    cgWidth: String
  },
  data () {
    return {
      imgs: [
        {
          src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1599805543,1571293957&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=479269240,1349141881&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2513677915,2336331501&fm=15&gp=0.jpg'
        },
        {
          src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2716919074,3970065003&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1555459296,1312580910&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2620860030,2092443729&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=965887695,2749319726&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1034514813,1204674922&fm=26&gp=0.jpg'
        },
        {
          src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4266064861,3665458357&fm=26&gp=0.jpg'
        }
      ]
    }
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
