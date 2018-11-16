<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div id="allmap" ref="allmap"></div>
</div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'BDMap',
  props: {
    cgWidth: String
  },
  methods: {
    map () {
      var map = new BMap.Map('allmap')
      var point = new BMap.Point(104.067993, 30.679669)
      map.centerAndZoom(point, 14)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      var marker = new BMap.Marker(point)
      map.addOverlay(marker)
      map.centerAndZoom(point, 11)
    }
  },
  mounted () {
    this.map()
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  #allmap{
    height: 800px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }
</style>
