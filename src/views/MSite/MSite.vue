<template>
  <div class="container">
    <Header/>
    <SideNav/>
    <router-view></router-view>
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
