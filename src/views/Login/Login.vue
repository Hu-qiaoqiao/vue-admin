<template>
  <div class="container">
    <div class = "loginFrame">
      <el-form ref = "AccountForm" class = "demo-ruleForm login-container">
        <div class = "tabsUser">
          <span>ADMIN</span>
        </div>
        <div class = "formGroup">
          <el-form-item  label = "账号" prop = "user" >
            <el-input type = "text"  auto-complete = "off" placeholder = "请输入您的账号" class = "form-control" ></el-input></el-form-item>
          <el-form-item label = "密码" prop = "password" class = "form-inline">
            <el-input type = "password" auto-complete = "off" placeholder = "请输入密码" class = "form-control" ></el-input></el-form-item>
        </div>
        <div class = "remFor">
          <el-checkbox v-model = "checked" checked class = "remember">记住密码</el-checkbox>
          <a href ="#" class = "forget">忘记密码？</a>
        </div>
        <div class = "formButton">
          <el-form-item style = "width:100%;">
            <el-button type = "primary" style = "width:100%;" @click="goto">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      display: 'block',
      logining: false,
      loginForm: {
        account: '',
        password: ''
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    goto () {
      this.$router.replace('/msite')
    }
  }
}
</script>

<style scoped>
  .hidden{
    display: none;
  }
  .container{
    width: 100%;
    height: 100%;
    background-image: url(./images/login_bg1.jpg);
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  label{
    width:70px;
    text-align:left;
  }

  .form-control{
    width:270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
  }
  .remember{
    width:250px;
    text-align:left;
  }
  .forget{
    width:500px;
    text-align:right;
    font-size:14px;
    font-family:PingFang SC;
  }
  .remFor{
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .tabsUser{
    display: block;
    margin-left: 0px;
    margin-right:0px;
    text-align:center;
    font-size:25px;
    margin-bottom: 10px;
    color: #606266;
  }
</style>
