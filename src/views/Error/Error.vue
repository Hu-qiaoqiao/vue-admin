<template>
  <div class="hinge delay-1s not_find slower" :class="animated"></div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
      animated: 'animated'
    }
  },
  created () {
    setTimeout(() => {
      this.animated = ''
    }, 5500)
  }
}
</script>

<style scoped>
.not_find{
  width: 612px;
  height: 200px;
  position: absolute;
  top: 15%;
  left: 50%;
  margin-left: -306px;
  background-image: url(./images/404.png);
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;
}
</style>
