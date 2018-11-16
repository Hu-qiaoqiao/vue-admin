<template>
  <div class="container">
    <Header :changeWidth="changeWidth"/>
    <SideNav :cgWidth="cgWidth" :isCollapse="isCollapse"/>
    <router-view :cgWidth="cgWidth"></router-view>
    <div class="footer_push"></div>
    <Footer/>
  </div>
</template>

<script>
import SideNav from '../../components/SideNav/SideNav'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
export default {
  name: 'MSite',
  components: {
    SideNav,
    Footer,
    Header
  },
  data () {
    return {
      cgWidth: '200px',
      isCollapse: false
    }
  },
  methods: {
    changeWidth (bool) {
      if (bool) {
        this.cgWidth = '200px'
        this.isCollapse = false
      } else {
        this.cgWidth = '100px'
        this.isCollapse = true
      }
    }
  }
}
</script>

<style scoped>
.container{
  min-height: 100%;
  position: relative;
}
.footer_push{
  padding-bottom: 60px;
}
</style>
