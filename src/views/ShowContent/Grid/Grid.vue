<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">

</div>
</template>
<script>
export default {
  name: 'Grid',
  props: {
    cgWidth: String
  },
  data () {
    return {
      items: [
        'a',
        'b',
        'c',
        'd',
        'f'
      ]
    }
  }
}
</script>
<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .box{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
  }
  .a{
    background-color: pink;
  }
  .b{
    background-color: #ff212b;
  }
  .c{
    background-color: #d155ff;
  }
  .d{
    background-color: #3678ff;
  }
  .f{
    background-color: #ffe52f;
  }
</style>
