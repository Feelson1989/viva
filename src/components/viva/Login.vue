<template>
<div class="login-wrap">
    <div class="login-logo">
      <img src="../../assets/wx-logo-login@2x.png" alt="logo" class="img1">

    </div>
    <div class="login-box">
        <div class="login-title">
            <ul>
                <li><a class="active">登录</a></li>   
            </ul>
        </div>
        <div class="form-commit">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <hr class="hr">
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <p class="forget-pass"><a href="/weixin/passport/ForgotPassword">忘记密码？</a></p>
            <div class="com-btn">
                <button class="login" type="submit">确认登录</button>
                <a href="/weixin/passport/LoginToThird" class="wx-login">微信登录</a>
            </div>

        </div>
      
    </div>
</div>
</template>

<script>


 import { Field } from 'mint-ui';

 import 'mint-ui/lib/style.css'

 export default {

 components: {
  'field': Field,
 },

 data () {

  return {}

 }

 }

</script>

<style scoped>

 .login-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/wx-bg-login-1.jpg") no-repeat top;
  background-size: cover;
}
.login-logo {
  width: 202px;
  height: 18px;
  margin: 58px auto 24px;
}
.login-box {
  width: 250px;
  min-height: 100px;
  margin: 0 auto;
  padding: 22px 16px 45px;
  background: rgba(31,31,36,.8);
  box-shadow: 4px 8px 24px 0 rgba(0, 0, 0, 0.114);
  border-radius: 5px;
}
.login-title {
  overflow: hidden;
  width: 100%;
}
.login-title ul {
  overflow: hidden;
  width: 117px;
  margin: 0 auto 28px;
  padding: 0;
}
.login-title ul li{
  float: left;
  width: 50px;
  padding-bottom: 10px;
  text-align: center;
  list-style: none;
  font-size: 18px;
  color: #6c6c6c;
}
.login-title ul li a {
  display: block;
  width: 50px;
  padding-bottom: 10px;
  text-align: center;
  list-style: none;
  font-size: 18px;
  text-decoration: none;
  color: #6c6c6c;

}
.login-title ul li:first-child {
  margin-right: 17px;
}
.login-title ul li a.active {
  color: #fff;
  border-bottom: 2px solid #25b5ff;
}
.form-commit {
  width: 100%;
  margin-bottom: 21px;
}


.form-commit .login-number {
  width: 80%;
  padding-left: 5%;
  padding-right: 15%;
  background: #fff url("../../assets/wx-close@2x.png") no-repeat 96%;
  background-size: 20px 17px;
}


.forget-pass {
  margin: 15px;
  padding: 0;
  width: 100%;
  height: 17px;
  text-align: center;
}
.forget-pass a {
  color: #fff;
  font-size: 10px;
  text-decoration: none;
  vertical-align: top;
  cursor: pointer;
}
.login-box .com-btn {
  width: 100%;
  padding-top: 30px;
  overflow: hidden;
}
.login-box .com-btn .login {
  float: left;
  width: 100px;
  background: #1a73d4;
  font-size: 12px;
  color: #fff;
}
.login-box .com-btn .wx-login {
  float: right;
  width: 100px;
  background: #1ad018;
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
.login-box .com-btn .register {
  width: 100%;
  height: 32px;
  line-height: 32px;
  font-family: "Microsoft Yahei";
  font-size: 12px;
  border: 0;
  border-radius: 5px;
  background: #1a73d7;
  color: #fff;
}
.hr{
  margin: 0%;
  padding: 0%
}
.img1{
  width: 202px;
  height: 20px;
}
mt-field{
  border-radius: 5px;
}


</style>