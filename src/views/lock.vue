<template>
  <div class="page-lock">
    <div class="page-logo">
      <a class="brand" href="/">
        <img :src="bigLogo" alt="logo" /> </a>
    </div>
    <div class="page-body">
      <img class="page-lock-img" src="http://zdyonline.com/vue-metronic/img/layouts/layout/avatar3_small.jpg" alt="">
      <div class="page-lock-info">
        <h1>{{activeUser.name}}</h1>
        <span class="email"> {{activeUser.email}} </span>
        <span class="locked"> 已锁定 </span>
        <alert v-model="alertShow" state="danger" :content="alertMessage"></alert>
        <textbox type="password" placeholder="请输入密码" icon="lock" v-model="password">
          <btn size="icon-only" color="green" @click="relogin" slot="after">
            <i class="m-icon-swapright m-icon-white"></i>
          </btn>
        </textbox>
        <div class="relogin">
          <router-link to="/login">
            不是{{activeUser.name}}吗？
          </router-link>
        </div>
      </div>
    </div>
    <div class="page-footer-custom"> 2014 &copy; Metronic. Admin Dashboard Template. </div>
  </div>
</template>
<script>
  import router from '../router'

  export default{
    data () {
      return {
        bigLogo: require('../../static/img/pages/logo-big.png'),
        password: '',
        alertShow: false,
        alertMessage: '请输入任意字符到密码.',
        activeUser: {
          name: '小张',
          email: 'virus_zhh@126.com'
        }
      }
    },
    methods: {
      relogin () {
        if (this.password === '') {
          this.alertShow = true
        } else {
          router.push('/main')
        }
      }
    }
  }
</script>
<style>
  body {
    background-color: #364150;
  }
  .page-lock {
    top: 50%;
    left: 50%;
    position: absolute;
    margin-top: -140px;
    margin-left: -260px; }

  .page-lock .page-logo {
    margin-bottom: 15px; }

  .page-lock .page-body {
    width: 510px;
    padding: 15px;;
    background-color: #fff;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px; }

  .page-lock .page-body:after,
  .page-lock .page-body:before {
    display: table;
    content: "";
    line-height: 0; }

  .page-lock .page-body:after {
    clear: both; }

  .page-lock .page-footer-custom {
    margin-top: 10px;
    text-align: left !important;
    font-size: 12px;
    color: #eaeaea; }

  .page-lock img.page-lock-img {
    float: left;
    width: 200px;
    height: auto; }

  .page-lock .page-lock-info {
    padding-left: 10px;
    padding-top: 5px;
    float: right;
    width: 280px; }

  .page-lock .page-lock-info h1 {
    margin-top: -5px;
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 5px; }

  .page-lock .page-lock-info .email {
    display: block;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px; }

  .page-lock .page-lock-info .locked {
    color: #333;
    display: block;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px;
    font-style: normal; }

  .page-lock .relogin {
    margin-top: 10px; }

  /*Responsive*/
  @media (max-width: 768px) {
    .page-lock {
      top: 0px;
      width: 280px;
      margin-top: 20px;
      margin-left: -140px; }
    .page-lock .page-body {
      padding: 20px 10px;
      text-align: center;
      width: 280px; }
    .page-lock img.page-lock-img {
      float: none !important;
      display: block;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 15px; }
    .page-lock .page-lock-info {
      float: none !important;
      width: 260px;
      margin: 0 auto; }
    .page-lock .page-lock-info input {
      width: 200px !important; } }
</style>
