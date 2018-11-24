<template>
  <div class="btn_container" :style="{marginLeft: cgWidth}">
    <el-row>
      <el-col class="first_bg my_swiper" :span="10">
        <p>Swiper轮播</p>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for="(item,index) in imgs" :key="index" class="swiper-slide"><img class="img" :src="item.src" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </el-col>
      <el-col class="first_bg" :span="13">
        <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="first_bg" :span="6">
        <p>任务</p>
        <div style="height: 300px;">
          <el-steps direction="vertical" :active="3">
            <el-step title="页面布局规划" description="已完成"></el-step>
            <el-step title="框架及开发工具选定" description="已完成"></el-step>
            <el-step title="完成后台页面" description="已完成"></el-step>
            <el-step title="利用vueX管理数据" description="未完成"></el-step>
          </el-steps>
        </div>
      </el-col>
      <el-col class="first_bg" :span="7">
        <div class="first_bg">
          <p>消息栏</p>
          <div>
            <ul>
              <li class="message" v-for="(message,index) in messages" :key="index">
                <i class="Chat_Heads" :style="{backgroundImage: 'url(' + message.Chat_Heads + ')', backgroundSize:'contain'}"></i>
                <span class="message_name">{{message.name}}</span><br>
                <span class="message_text">{{message.text}}</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col class="first_bg" :span="9">
        <p>访问量统计</p>
        <div id="myChart_2" :style="{width: '100%', height: '400px'}"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Button',
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
        }
      ],
      messages: [
        {
          Chat_Heads: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2143940403,2597373267&fm=58',
          name: '纳兰性德',
          text: '人生若只如初见，何事秋风悲画扇。'
        },
        {
          Chat_Heads: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1171991200,229832117&fm=58&bpow=322&bpoh=454',
          name: '元稹',
          text: '曾经沧海难为水，除却巫山不是云。'
        },
        {
          Chat_Heads: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3390435948,2558761852&fm=58&bpow=400&bpoh=700',
          name: '苏轼',
          text: '但愿人长久，千里共婵娟。'
        },
        {
          Chat_Heads: 'https://file.juzimi.com/category_pictures/201403/liyujingdianyulu849.jpg',
          name: '李煜',
          text: '问君能有几多愁？恰似一江春水向东流。'
        }
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'vertical',
      followFinger: false,
      speed: 800,
      autoplay: {
        disableOnInteraction: false
      },
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination'
      },
      on: {
        init: function (swiper) {
          const slide = this.slides.eq(0)
          slide.addClass('ani-slide')
        },
        transitionStart: function () {
          for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides.eq(i)
            slide.removeClass('ani-slide')
          }
        },
        transitionEnd: function () {
          const slide = this.slides.eq(this.activeIndex)
          slide.addClass('ani-slide')
        }
      }
    })
    this.myecharts()
    this.myecharts_2()
  },
  methods: {
    myecharts () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      const xAxisData = []
      const data1 = []
      const data2 = []
      for (let i = 0; i < 100; i++) {
        xAxisData.push('类目' + i)
        data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      myChart.setOption({
        title: {
          text: '柱状图动画'
        },
        legend: {
          data: ['bar', 'bar2'],
          align: 'left'
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function (idx) {
            return idx * 10
          }
        }, {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function (idx) {
            return idx * 10 + 100
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      })
    },
    myecharts_2 () {
      const myChart2 = this.$echarts.init(document.getElementById('myChart_2'))
      myChart2.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }]
      })
    }
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .first_bg{
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 10px;
    margin: 10px 10px;
  }
  .first_bg p{
    padding-left: 20px;
    margin: 10px 0;
  }
  .swiper-wrapper{
    transition-delay:.3s;
  }
  .swiper-container {
    width: 100%;
    height: 300px;
    margin: 20px auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100%;
    width: 100%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  /*.swiper-slide:nth-child(2){*/
  /*background:#3183ff;*/
  /*color:#fff;}*/
  .swiper-slide p{
    transform:translateX(-200px);
    opacity:0;
    transition:all .4s;}
  .ani-slide p{
    transform:translateX(0);
    opacity:1;
  }
  .img{
    width: 100%;
    height: 100%;
    display: block;
  }
  .first_bg ul{
    padding: 0 20px;
  }
  .message{
    min-height: 50px;
    border-bottom: 1px solid #c6c8cb;
    position: relative;
    padding-left: 50px;
    padding-bottom: 10px;
  }
  .Chat_Heads{
    position: absolute;
    top: 10px;
    left: 0;
    display: inline-block;
    width: 40px;
    height: 40px;
  }
  .message_name{
    display: inline-block;
    margin: 10px 0;
  }
  .message_text{
    color: #9c9c9c;
    font-size: 14px;
    line-height: 16px;
  }
</style>
