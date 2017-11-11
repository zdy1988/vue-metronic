<template>
  <div class="login">
    <!-- BEGIN LOGIN -->
    <animated-fade-in>
      <div class="content" v-if="contentShow">
        <!-- BEGIN LOGIN FORM -->
        <formbox-group klass="login-form" v-show="activeForm === 'login'">
          <h4 class="form-title">登录到账户</h4>
          <alert v-model="alertShow" state="danger" :content="alertMessage"></alert>
          <formbox>
            <textbox placeholder="用户名" icon="user" v-model="username" @keyup.enter="login"></textbox>
          </formbox>
          <formbox>
            <textbox type="password" placeholder="密码" icon="lock" v-model="password" @keyup.enter="login"></textbox>
          </formbox>
          <div class="form-actions">
            <checkbox outline klass="rememberme">记住我</checkbox>
            <btn color="green" klass="pull-right" @click="login">登录</btn>
          </div>
          <div class="login-options">
            <h4>其他登录方式</h4>
            <ul class="social-icons">
              <li>
                <a class="facebook" data-original-title="facebook" href="javascript:;"> </a>
              </li>
              <li>
                <a class="twitter" data-original-title="Twitter" href="javascript:;"> </a>
              </li>
              <li>
                <a class="googleplus" data-original-title="Goole Plus" href="javascript:;"> </a>
              </li>
              <li>
                <a class="linkedin" data-original-title="Linkedin" href="javascript:;"> </a>
              </li>
            </ul>
          </div>
          <div class="forget-password">
            <h4>忘记密码？</h4>
            <p> 不要担心, 点击
              <a href="javascript:;" @click="activeForm = 'forget'"> 这里 </a> 重置您的密码. </p>
          </div>
          <div class="create-account">
            <p> 还没有帐号吗？&nbsp;
              <a href="javascript:;" @click="activeForm = 'register'"> 创建帐号 </a>
            </p>
          </div>
        </formbox-group>
        <!-- END LOGIN FORM -->
        <!-- BEGIN FORGOT PASSWORD FORM -->
        <formbox-group klass="forget-form" v-show="activeForm === 'forget'">
          <h4>忘记密码？</h4>
          <p> 输入您的电子邮件地址重新设置您的密码. </p>
          <formbox>
            <textbox icon="envelope" placeholder="邮箱地址"></textbox>
          </formbox>
          <div class="form-actions">
            <btn color="grey-salsa" outline @click="activeForm = 'login'">返回</btn>
            <btn color="green" klass="pull-right">提交</btn>
          </div>
        </formbox-group>
        <!-- END FORGOT PASSWORD FORM -->
        <!-- BEGIN REGISTRATION FORM -->
        <formbox-group klass="register-form" v-show="activeForm === 'register'">
          <h4>创建帐号</h4>
          <p> 输入您的个人信息: </p>
          <formbox>
            <textbox placeholder="姓名" icon="font"></textbox>
          </formbox>
          <formbox>
            <textbox placeholder="邮箱地址" icon="envelope"></textbox>
          </formbox>
          <formbox>
            <textbox placeholder="家庭住址" icon="check"></textbox>
          </formbox>
          <formbox>
            <div class="input-icon left">
              <i class="fa fa-fw fa-flag"></i>
              <multiselect v-model="country" placeholder="选择国家" track-by="name" label="name" :options="countries" :show-labels="false">
                <template slot="option" scope="props">
                  <img class="option__image" :src="handleCountryFlag(props.option.value)" :alt="props.option.value">
                  <span>{{ props.option.name }}</span>
                </template>
              </multiselect>
            </div>
          </formbox>
          <p> 输入您的帐号信息: </p>
          <formbox>
            <textbox placeholder="帐号" icon="user"></textbox>
          </formbox>
          <formbox>
            <textbox placeholder="密码" icon="lock"></textbox>
          </formbox>
          <formbox>
            <textbox placeholder="再次输入密码" icon="check"></textbox>
          </formbox>
          <formbox>
            <checkbox outline>
              我同意
              <a href="javascript:;">服务条款 </a> 和
              <a href="javascript:;">隐私政策</a>
            </checkbox>
          </formbox>
          <div class="form-actions">
            <btn color="grey-salsa" outline @click="activeForm = 'login'">返回</btn>
            <btn color="green" klass="pull-right">提交</btn>
          </div>
        </formbox-group>
        <!-- END REGISTRATION FORM -->
      </div>
    </animated-fade-in>
    <!-- END LOGIN -->
    <canvas id="background"></canvas>
  </div>
</template>
<script>
  import router from '../router'
  import {Stage} from '@/untils'

  export default{
    data () {
      return {
        contentShow: false,
        activeForm: 'login',
        alertShow: false,
        alertMessage: '',
        username: 'xiaozhang',
        password: '123456',
        countries: [
          {value: 'AF', name: 'Afghanistan'},
          {value: 'AL', name: 'Albania'},
          {value: 'DZ', name: 'Algeria'},
          {value: 'AS', name: 'American Samoa'},
          {value: 'AD', name: 'Andorra'},
          {value: 'AO', name: 'Angola'},
          {value: 'AI', name: 'Anguilla'},
          {value: 'AR', name: 'Argentina'},
          {value: 'AM', name: 'Armenia'},
          {value: 'AW', name: 'Aruba'},
          {value: 'AU', name: 'Australia'},
          {value: 'AT', name: 'Austria'},
          {value: 'AZ', name: 'Azerbaijan'},
          {value: 'BS', name: 'Bahamas'},
          {value: 'BH', name: 'Bahrain'},
          {value: 'BD', name: 'Bangladesh'},
          {value: 'BB', name: 'Barbados'},
          {value: 'BY', name: 'Belarus'},
          {value: 'BE', name: 'Belgium'},
          {value: 'BZ', name: 'Belize'},
          {value: 'BJ', name: 'Benin'},
          {value: 'BM', name: 'Bermuda'},
          {value: 'BT', name: 'Bhutan'},
          {value: 'BO', name: 'Bolivia'},
          {value: 'BA', name: 'Bosnia and Herzegowina'},
          {value: 'BW', name: 'Botswana'},
          {value: 'BV', name: 'Bouvet Island'},
          {value: 'BR', name: 'Brazil'},
          {value: 'IO', name: 'British Indian Ocean Territory'},
          {value: 'BN', name: 'Brunei Darussalam'},
          {value: 'BG', name: 'Bulgaria'},
          {value: 'BF', name: 'Burkina Faso'},
          {value: 'BI', name: 'Burundi'},
          {value: 'KH', name: 'Cambodia'},
          {value: 'CM', name: 'Cameroon'},
          {value: 'CA', name: 'Canada'},
          {value: 'CV', name: 'Cape Verde'},
          {value: 'KY', name: 'Cayman Islands'},
          {value: 'CF', name: 'Central African Republic'},
          {value: 'TD', name: 'Chad'},
          {value: 'CL', name: 'Chile'},
          {value: 'CN', name: 'China'},
          {value: 'CX', name: 'Christmas Island'},
          {value: 'CC', name: 'Cocos (Keeling) Islands'},
          {value: 'CO', name: 'Colombia'},
          {value: 'KM', name: 'Comoros'},
          {value: 'CG', name: 'Congo'},
          {value: 'CD', name: 'Congo, the Democratic Republic of the'},
          {value: 'CK', name: 'Cook Islands'},
          {value: 'CR', name: 'Costa Rica'},
          {value: 'CI', name: 'Cote d Ivoire'},
          {value: 'HR', name: 'Croatia (Hrvatska)'},
          {value: 'CU', name: 'Cuba'},
          {value: 'CY', name: 'Cyprus'},
          {value: 'CZ', name: 'Czech Republic'},
          {value: 'DK', name: 'Denmark'},
          {value: 'DJ', name: 'Djibouti'},
          {value: 'DM', name: 'Dominica'},
          {value: 'DO', name: 'Dominican Republic'},
          {value: 'EC', name: 'Ecuador'},
          {value: 'EG', name: 'Egypt'},
          {value: 'SV', name: 'El Salvador'},
          {value: 'GQ', name: 'Equatorial Guinea'},
          {value: 'ER', name: 'Eritrea'},
          {value: 'EE', name: 'Estonia'},
          {value: 'ET', name: 'Ethiopia'},
          {value: 'FK', name: 'Falkland Islands (Malvinas)'},
          {value: 'FO', name: 'Faroe Islands'},
          {value: 'FJ', name: 'Fiji'},
          {value: 'FI', name: 'Finland'},
          {value: 'FR', name: 'France'},
          {value: 'GF', name: 'French Guiana'},
          {value: 'PF', name: 'French Polynesia'},
          {value: 'TF', name: 'French Southern Territories'},
          {value: 'GA', name: 'Gabon'},
          {value: 'GM', name: 'Gambia'},
          {value: 'GE', name: 'Georgia'},
          {value: 'DE', name: 'Germany'},
          {value: 'GH', name: 'Ghana'},
          {value: 'GI', name: 'Gibraltar'},
          {value: 'GR', name: 'Greece'},
          {value: 'GL', name: 'Greenland'},
          {value: 'GD', name: 'Grenada'},
          {value: 'GP', name: 'Guadeloupe'},
          {value: 'GU', name: 'Guam'},
          {value: 'GT', name: 'Guatemala'},
          {value: 'GN', name: 'Guinea'},
          {value: 'GW', name: 'Guinea-Bissau'},
          {value: 'GY', name: 'Guyana'},
          {value: 'HT', name: 'Haiti'},
          {value: 'HM', name: 'Heard and Mc Donald Islands'},
          {value: 'VA', name: 'Holy See (Vatican City State)'},
          {value: 'HN', name: 'Honduras'},
          {value: 'HK', name: 'Hong Kong'},
          {value: 'HU', name: 'Hungary'},
          {value: 'IS', name: 'Iceland'},
          {value: 'IN', name: 'India'},
          {value: 'ID', name: 'Indonesia'},
          {value: 'IR', name: 'Iran (Islamic Republic of)'},
          {value: 'IQ', name: 'Iraq'},
          {value: 'IE', name: 'Ireland'},
          {value: 'IL', name: 'Israel'},
          {value: 'IT', name: 'Italy'},
          {value: 'JM', name: 'Jamaica'},
          {value: 'JP', name: 'Japan'},
          {value: 'JO', name: 'Jordan'},
          {value: 'KZ', name: 'Kazakhstan'},
          {value: 'KE', name: 'Kenya'},
          {value: 'KI', name: 'Kiribati'},
          {value: 'KP', name: 'Korea, Democratic People \'s Republic of'},
          {value: 'KR', name: 'Korea, Republic of'},
          {value: 'KW', name: 'Kuwait'},
          {value: 'KG', name: 'Kyrgyzstan'},
          {value: 'LA', name: 'Lao People\'s Democratic Republic'},
          {value: 'LV', name: 'Latvia'},
          {value: 'LB', name: 'Lebanon'},
          {value: 'LS', name: 'Lesotho'},
          {value: 'LR', name: 'Liberia'},
          {value: 'LY', name: 'Libyan Arab Jamahiriya'},
          {value: 'LI', name: 'Liechtenstein'},
          {value: 'LT', name: 'Lithuania'},
          {value: 'LU', name: 'Luxembourg'},
          {value: 'MO', name: 'Macau'},
          {value: 'MK', name: 'Macedonia, The Former Yugoslav Republic of'},
          {value: 'MG', name: 'Madagascar'},
          {value: 'MW', name: 'Malawi'},
          {value: 'MY', name: 'Malaysia'},
          {value: 'MV', name: 'Maldives'},
          {value: 'ML', name: 'Mali'},
          {value: 'MT', name: 'Malta'},
          {value: 'MH', name: 'Marshall Islands'},
          {value: 'MQ', name: 'Martinique'},
          {value: 'MR', name: 'Mauritania'},
          {value: 'MU', name: 'Mauritius'},
          {value: 'YT', name: 'Mayotte'},
          {value: 'MX', name: 'Mexico'},
          {value: 'FM', name: 'Micronesia, Federated States of'},
          {value: 'MD', name: 'Moldova, Republic of'},
          {value: 'MC', name: 'Monaco'},
          {value: 'MN', name: 'Mongolia'},
          {value: 'MS', name: 'Montserrat'},
          {value: 'MA', name: 'Morocco'},
          {value: 'MZ', name: 'Mozambique'},
          {value: 'MM', name: 'Myanmar'},
          {value: 'NA', name: 'Namibia'},
          {value: 'NR', name: 'Nauru'},
          {value: 'NP', name: 'Nepal'},
          {value: 'NL', name: 'Netherlands'},
          {value: 'AN', name: 'Netherlands Antilles'},
          {value: 'NC', name: 'New Caledonia'},
          {value: 'NZ', name: 'New Zealand'},
          {value: 'NI', name: 'Nicaragua'},
          {value: 'NE', name: 'Niger'},
          {value: 'NG', name: 'Nigeria'},
          {value: 'NU', name: 'Niue'},
          {value: 'NF', name: 'Norfolk Island'},
          {value: 'MP', name: 'Northern Mariana Islands'},
          {value: 'NO', name: 'Norway'},
          {value: 'OM', name: 'Oman'},
          {value: 'PK', name: 'Pakistan'},
          {value: 'PW', name: 'Palau'},
          {value: 'PA', name: 'Panama'},
          {value: 'PG', name: 'Papua New Guinea'},
          {value: 'PY', name: 'Paraguay'},
          {value: 'PE', name: 'Peru'},
          {value: 'PH', name: 'Philippines'},
          {value: 'PN', name: 'Pitcairn'},
          {value: 'PL', name: 'Poland'},
          {value: 'PT', name: 'Portugal'},
          {value: 'PR', name: 'Puerto Rico'},
          {value: 'QA', name: 'Qatar'},
          {value: 'RE', name: 'Reunion'},
          {value: 'RO', name: 'Romania'},
          {value: 'RU', name: 'Russian Federation'},
          {value: 'RW', name: 'Rwanda'},
          {value: 'KN', name: 'Saint Kitts and Nevis'},
          {value: 'LC', name: 'Saint LUCIA'},
          {value: 'VC', name: 'Saint Vincent and the Grenadines'},
          {value: 'WS', name: 'Samoa'},
          {value: 'SM', name: 'San Marino'},
          {value: 'ST', name: 'Sao Tome and Principe'},
          {value: 'SA', name: 'Saudi Arabia'},
          {value: 'SN', name: 'Senegal'},
          {value: 'SC', name: 'Seychelles'},
          {value: 'SL', name: 'Sierra Leone'},
          {value: 'SG', name: 'Singapore'},
          {value: 'SK', name: 'Slovakia (Slovak Republic)'},
          {value: 'SI', name: 'Slovenia'},
          {value: 'SB', name: 'Solomon Islands'},
          {value: 'SO', name: 'Somalia'},
          {value: 'ZA', name: 'South Africa'},
          {value: 'GS', name: 'South Georgia and the South Sandwich Islands'},
          {value: 'ES', name: 'Spain'},
          {value: 'LK', name: 'Sri Lanka'},
          {value: 'SH', name: 'St. Helena'},
          {value: 'PM', name: 'St. Pierre and Miquelon'},
          {value: 'SD', name: 'Sudan'},
          {value: 'SR', name: 'Suri,name'},
          {value: 'SJ', name: 'Svalbard and Jan Mayen Islands'},
          {value: 'SZ', name: 'Swaziland'},
          {value: 'SE', name: 'Sweden'},
          {value: 'CH', name: 'Switzerland'},
          {value: 'SY', name: 'Syrian Arab Republic'},
          {value: 'TW', name: 'Taiwan, Province of China'},
          {value: 'TJ', name: 'Tajikistan'},
          {value: 'TZ', name: 'Tanzania, United Republic of'},
          {value: 'TH', name: 'Thailand'},
          {value: 'TG', name: 'Togo'},
          {value: 'TK', name: 'Tokelau'},
          {value: 'TO', name: 'Tonga'},
          {value: 'TT', name: 'Trinidad and Tobago'},
          {value: 'TN', name: 'Tunisia'},
          {value: 'TR', name: 'Turkey'},
          {value: 'TM', name: 'Turkmenistan'},
          {value: 'TC', name: 'Turks and Caicos Islands'},
          {value: 'TV', name: 'Tuvalu'},
          {value: 'UG', name: 'Uganda'},
          {value: 'UA', name: 'Ukraine'},
          {value: 'AE', name: 'United Arab Emirates'},
          {value: 'GB', name: 'United Kingdom'},
          {value: 'US', name: 'United States'},
          {value: 'UM', name: 'United States Minor Outlying Islands'},
          {value: 'UY', name: 'Uruguay'},
          {value: 'UZ', name: 'Uzbekistan'},
          {value: 'VU', name: 'Vanuatu'},
          {value: 'VE', name: 'Venezuela'},
          {value: 'VN', name: 'Viet Nam'},
          {value: 'VG', name: 'Virgin Islands (British)'},
          {value: 'VI', name: 'Virgin Islands (U.S.)'},
          {value: 'WF', name: 'Wallis and Futuna Islands'},
          {value: 'EH', name: 'Western Sahara'},
          {value: 'YE', name: 'Yemen'},
          {value: 'ZM', name: 'Zambia'},
          {value: 'ZW', name: 'Zimbabwe'}
        ],
        country: null
      }
    },
    methods: {
      login () {
        var self = this
        const username = this.username.trim()
        const password = this.password.trim()
        if (username === '' && password === '') {
          self.alertMessage = '请输入用户名和密码'
          this.alertShow = true
        } else {
          this.$store.dispatch('permission/login', {
            username,
            password
          }).done(function (rst) {
            router.push('/main')
          }).fail(function (rst) {
            self.alertMessage = rst.message
            self.alertShow = true
          })
        }
      },
      handleCountryFlag (value) {
        return require('../../static/img/global/flags/' + value.toLowerCase() + '.png')
      },
      handleBackground () {
        var canvas = document.getElementById('background')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        var stage = new Stage(canvas, state => {
          if (state === 'second') {
            this.contentShow = true
          } else {
            this.contentShow = false
          }
        })
        stage.init()
        stage.loop()
      }
    },
    mounted () {
      this.handleBackground()
    }
  }
</script>
<style lang='sass'>
  @import "../assets/sass/style"
</style>
<style scoped>
  #background{
    position: absolute;
    top:0px;
    left: 0px;
    z-index: -1;
    background-color: #364150;
  }

  .login {
    background-color: transparent !important; }

  .login .logo {
    margin: 60px auto 20px auto;
    padding: 15px;
    text-align: center; }

  .login .content {
    background-color: #fff;
    width: 360px;
    margin: 0 auto;
    margin-top: 160px;
    margin-bottom: 0px;
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 15px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px; }

  .login .content h3 {
    color: #000; }

  .login .content h4 {
    color: #555; }

  .login .content p {
    color: #222; }

  .login .content .login-form,
  .login .content .forget-form {
    padding: 0px;
    margin: 0px; }

  .login .content .login-form .form-body,
  .login .content .forget-form .form-body,
  .login .content .register-form .form-body{
    padding: 0px !important; }

  .login .content .input-icon {
    border-left: 2px solid #44B6AE !important; }

  .login .content .input-icon {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px; }
  .login .content .input-icon .form-control {
    border-left: 0; }

  .login .content .form-title {
    font-weight: 300;
    margin-bottom: 25px; }

  .login .content .form-actions {
    background-color: #fff;
    clear: both;
    border: 0px;
    border-bottom: 1px solid #eee;
    padding: 0px 30px 25px 30px;
    margin-left: -30px;
    margin-right: -30px; }

  .login .content .forget-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 20px; }

  .login .content .register-form .form-actions {
    border: 0;
    margin-bottom: 0;
    padding-bottom: 0px; }

  .login .content .form-actions .rememberme {
    margin-top: 8px;
    display: inline-block; }

  .login .content .form-actions .btn {
    margin-top: 1px; }

  .login .content .forget-password {
    margin-top: 25px; }

  .login .content .create-account {
    border-top: 1px dotted #eee;
    padding-top: 10px;
    margin-top: 15px; }

  .login .content .create-account a {
    display: inline-block;
    margin-top: 5px; }

  /* multiselect */
  .login .content .multiselect__content-wrapper{
    z-index: 5;
  }

  .login .content .multiselect__input,
  .login .content .multiselect__single {
    padding: 1px 0 0 24px;
  }

  .login .content .multiselect__option .option__image{
    float: left;
    padding-top: 2px;
    padding-right: 8px;
  }

  /* footer copyright */
  .login .copyright {
    text-align: center;
    margin: 0 auto;
    padding: 10px;
    color: #999;
    font-size: 13px; }

  @media (max-width: 480px) {
    /***
    Login page
    ***/
    .login .logo {
      margin-top: 10px;
    }

    .login .content {
      width: 280px;
    }

    .login .content h3 {
      font-size: 22px;
    }

    .login .checkbox {
      font-size: 13px;
    }
  }
</style>
