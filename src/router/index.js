import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../views/MSite/MSite'
import Login from '../views/Login/Login'
import Error from '../views/Error/Error'
import MessageBox from '../views/ShowContent/MessageBox/MessageBox'
import Upload from '../views/ShowContent/Upload/Upload'
import Form from '../views/ShowContent/Form/Form'
import Transfer from '../views/ShowContent/Transfer/Transfer'
import Dialog from '../views/ShowContent/Dialog/Dialog'
import Collapse from '../views/ShowContent/Collapse/Collapse'
import ElSlideshow from '../views/ShowContent/ElSlideshow/ElSlideshow'
import Button from '../views/ShowContent/Button/Button'
import Photo from '../views/ShowContent/Photo/Photo'
import First from '../views/ShowContent/First/First'
import AnimateOne from '../views/ShowContent/AnimateOne/AnimateOne'
import AnimateTwo from '../views/ShowContent/AnimateTwo/AnimateTwo'
import AnimateThree from '../views/ShowContent/AnimateThree/AnimateThree'
import SlideShowOne from '../views/ShowContent/SlideShowOne/SlideShowOne'
import Grid from '../views/ShowContent/Grid/Grid'
import BDMap from '../views/ShowContent/BDMap/BDMap'
import Swiper from '../views/ShowContent/Swiper/Swiper'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      children: [
        {
          path: '/msite/button',
          component: Button
        },
        {
          path: '/msite/animateone',
          component: AnimateOne
        },
        {
          path: '/msite/animatetwo',
          component: AnimateTwo
        },
        {
          path: '/msite/animatethree',
          component: AnimateThree
        },
        {
          path: '/msite/slideshowone',
          component: SlideShowOne
        },
        {
          path: '/msite/swiper',
          component: Swiper
        },
        {
          path: '/msite/grid',
          component: Grid
        },
        {
          path: '/msite/bdmap',
          component: BDMap
        },
        {
          path: '/msite/messagebox',
          component: MessageBox
        },
        {
          path: '/msite/photo',
          component: Photo
        },
        {
          path: '/msite/First',
          component: First
        },
        {
          path: '/msite/upload',
          component: Upload
        },
        {
          path: '/msite/transfer',
          component: Transfer
        },
        {
          path: '/msite/form',
          component: Form
        },
        {
          path: '/msite/dialog',
          component: Dialog
        },
        {
          path: '/msite/collapse',
          component: Collapse
        },
        {
          path: '/msite/elslideshow',
          component: ElSlideshow
        },
        {
          path: '/',
          redirect: '/msite/First'
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/error',
      component: Error
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
