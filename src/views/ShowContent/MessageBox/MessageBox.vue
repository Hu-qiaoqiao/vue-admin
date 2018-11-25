<template>
<div class="btn_container" :style="{marginLeft: cgWidth}">
  <div class="dailog">
    <p>3秒消失的提示框</p><br>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
  <div class="dailog">
    <p>操作反馈</p><br>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open5">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>
  </div>
  <div class="dailog">
    <p>有关闭按钮的操作反馈</p><br>
    <el-button :plain="true" @click="open9">消息</el-button>
    <el-button :plain="true" @click="open6">成功</el-button>
    <el-button :plain="true" @click="open7">警告</el-button>
    <el-button :plain="true" @click="open8">错误</el-button>
  </div>
  <div class="dailog">
    <p>文字水平居中</p><br>
    <el-button :plain="true" @click="openCenter">文字居中</el-button>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'MessageBox',
  computed: {
    ...mapState(['cgWidth'])
  },
  methods: {
    open () {
      this.$message('这是一条消息提示,3秒消失')
    },
    open5 () {
      this.$message('这是一条消息提示')
    },
    open2 () {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3 () {
      this.$message({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open4 () {
      this.$message.error('错了哦，这是一条错误消息')
    },
    openVn () {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, '3秒消失')
        ])
      })
    },
    open9 () {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      })
    },
    open6 () {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open7 () {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open8 () {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      })
    },
    openCenter () {
      this.$message({
        message: '居中的文字',
        center: true
      })
    }
  }
}
</script>

<style scoped>
  .btn_container{
    transition: all 0.5s;
  }
  .dailog {
    margin: 20px 20px;
  }
  .dailog p {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #adadad;
    margin-bottom: 10px;
    border-radius: 5px;
  }
</style>
