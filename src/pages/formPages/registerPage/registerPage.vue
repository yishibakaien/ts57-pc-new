<template>
<div class="register-page">
  <v-header>
    <div class="fl reg-title">
      <p>欢迎注册</p>
      <router-link to="homePage">返回首页</router-link>
    </div>
    <div class="fr reg-path">
      <span>已有账号？</span>
      <router-link to="loginPage" class="login">请登录</router-link>
    </div>
  </v-header>
  <div class="register-box">
    <div class="register-container">
      <div class="choose-type list">
        <span class="left">选择身份：</span>
        <div class="right">
          <div class="type-item" ref="factory" @click="chooseFactory">
            <h2 class="name">蕾丝厂商</h2>
            <span class="desc">我是蕾丝生产企业</span>
          </div>
          <div class="type-item" ref="stalls" @click="chooseStalls">
            <h2 class="name">档口贸易商</h2>
            <span class="desc">从事蕾丝贸易活动</span>
          </div>
        </div>
      </div>

      <div class="tel list">
        <span class="left">手机号：</span>
        <div class="right">
          <div class="tip" v-if="tip.userMobileTip">{{tip.userMobileTip}}</div>
          <input @blur="blurUserMobile" v-model="registerData.userMobile" :class="{warn: tip.userMobileTip}" class="input" type="tel" maxlength="11" placeholder="请输入注册手机号">
        </div>
      </div>

      <div class="tel list">
        <span class="left">密码：</span>
        <div class="right">
          <div class="tip" v-if="tip.userPWDTip">{{tip.userPWDTip}}</div>
          <input @blur="blurUserPWD" v-model="registerData.userPWD" :class="{warn: tip.userPWDTip}" class="input" type="password" maxlength="16" placeholder="请输入密码">
        </div>
      </div>

      <div class="tel list">
        <span class="left">确认密码：</span>
        <div class="right">
          <div class="tip" v-if="tip.confirmPWDTip">{{tip.confirmPWDTip}}</div>
          <input @blur="blurConfirmPWD" v-model="confirmPWD" :class="{warn: tip.confirmPWDTip}" class="input" type="password" maxlength="16" placeholder="请再次输入密码">
        </div>
      </div>

      <div class="tel list">
        <span class="left">姓名：</span>
        <div class="right">
          <div class="tip" v-if="tip.userNameTip">{{tip.userNameTip}}</div>
          <input @blur="blurUserName" v-model="registerData.userName" :class="{warn: tip.userNameTip}" class="input" type="text" maxlength="8" placeholder="请输入你的名字">
        </div>
      </div>

      <div class="tel list">
        <span class="left">公司：</span>
        <div class="right">
          <div class="tip" v-if="tip.companyNameTip">{{tip.companyNameTip}}</div>
          <input @blur="blurCompanyName" v-model="registerData.companyName" :class="{warn: tip.companyNameTip}" class="input" type="text" placeholder="请输入你的公司名称">
        </div>
      </div>

      <div class="tel list">
        <span class="left">公司主营：</span>
        <div class="right">
          <div class="tip" v-if="tip.companyMainTip">{{tip.companyMainTip}}</div>
          <input v-model="registerData.companyBusiness" :class="{warn: tip.companyMainTip}" class="input" type="text" :maxlength="50" placeholder="请输入你的公司主营业务">
        </div>
      </div>

      <div class="code list">
        <span class="left">验证码：</span>
        <div class="right">
          <div class="tip" v-if="tip.smsCodeTip">{{tip.smsCodeTip}}</div>
          <input @blur="blurSmsCode" v-model="registerData.smsCode" :class="{warn: tip.smsCodeTip}" class="input" type="tel" maxlength="4" placeholder="请输入短信验证码">
          <button @click="getSMSCode" ref="getCodeBtn" :disabled="getSMSCodeParams.disabled" class="SMSCode button button-blue" title="点击获取短信验证码">{{codeBtnText}}</button>
        </div>
      </div>

      <div class="btn-wrapper">
        <ts-button size="large" type="primary" class="register-submit button" @click="register" :disabled="!isAgree">
          注&nbsp;册
        </ts-button>
      </div>

      <div class="agreenment-wrapper">
        <ts-checkbox type="origin" v-model="isAgree">点击注册即代表同意</ts-checkbox>
        <span class="agreenment" @click="handleGotoAgreement">《坐视布管用户协议》</span>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import {
  header
} from '@/components';
import {
  testMobile,
  testPWD,
  testName,
  testCompanyName,
  testSMSCode
} from '@/common/js/regExp';
import {
  getRegSMSCode,
  reg,
  login,
  checkPhone
} from '@/common/api/api';
import Toast from '@/components/common/toast/toast';
export default {
  data() {
    return {
      registerData: {
        userType: '',
        userMobile: '',
        userPWD: '',
        userName: '',
        companyName: '',
        companyBusiness: '',
        smsCode: ''
      },
      isAgree: true,
      confirmPWD: '',
      isRegisted: true,
      samePWD: true,
      tip: {
        userMobileTip: '',
        userPWDTip: '',
        confirmPWDTip: '',
        userNameTip: '',
        companyNameTip: '',
        smsCodeTip: ''
      },
      getSMSCodeParams: {
        getCode: '获取验证码',
        seconds: 60,
        wait: '秒后获取',
        disabled: false
      }
    };
  },
  components: {
    'vHeader': header
  },
  computed: {
    codeBtnText() {
      if (this.getSMSCodeParams.disabled === false) {
        return this.getSMSCodeParams.getCode;
      } else {
        return this.getSMSCodeParams.seconds + this.getSMSCodeParams.wait;
      }
    }
  },
  methods: {
    handleGotoAgreement() {
      this.goto(`/clause`);
    },
    chooseFactory() {
      this.$refs.factory.className += ' active';
      this.$refs.stalls.className = 'type-item';
      this.registerData.userType = 1;
    },
    chooseStalls() {
      this.$refs.factory.className = 'type-item';
      this.$refs.stalls.className += ' active';
      this.registerData.userType = 2;
    },
    blurUserMobile() {
      if (!testMobile(this.registerData.userMobile)) {
        this.tip.userMobileTip = '请输入正确的手机号码';
        return;
      } else {
        this.tip.userMobileTip = '';
      }
      checkPhone({
        mobile: this.registerData.userMobile
      }).then(res => {
        if (res.data.code !== 0) {
          //        console.log('检查手机号码失败', res);
        } else {
          if (res.data.data === true) {
            this.tip.userMobileTip = '此手机号码已被注册';
          } else {
            this.isRegisted = false;
          }
        }
      }).catch(res => {
        console.log('检查手机号码请求失败', res);
      });
    },
    blurUserPWD() {
      if (!testPWD(this.registerData.userPWD)) {
        this.tip.userPWDTip = '密码长度为6-16位';
      } else {
        this.tip.userPWDTip = '';
      }
    },
    blurConfirmPWD() {
      if (!testPWD(this.confirmPWD)) {
        this.tip.confirmPWDTip = '两次密码输入不一致';
      }
      if (this.confirmPWD !== this.registerData.userPWD) {
        this.tip.confirmPWDTip = '两次密码输入不一致';
      } else {
        this.tip.confirmPWDTip = '';
        this.samePWD = false;
      }
    },
    blurUserName() {
      if (!testName(this.registerData.userName)) {
        this.tip.userNameTip = '姓名长度为2-8位汉字';
      } else {
        this.tip.userNameTip = '';
      }
    },
    blurCompanyName() {
      if (!testCompanyName(this.registerData.companyName)) {
        this.tip.companyNameTip = '公司名称长度为4-16位';
      } else {
        this.tip.companyNameTip = '';
      }
    },
    blurSmsCode() {
      if (!testSMSCode(this.registerData.smsCode)) {
        this.tip.smsCodeTip = '请输入4位短信验证码';
      } else {
        this.tip.smsCodeTip = '';
      }
    },
    getSMSCode() {
      if (!testMobile(this.registerData.userMobile)) {
        this.tip.userMobileTip = '请输入正确的手机号码';
        return;
      } else {
        this.tip.userMobileTip = '';
      }
      let data = {
        mobile: this.registerData.userMobile
      };
      getRegSMSCode(data)
        .then(res => {
          if (res.data.code !== 0) {
            // 手机号码已注册的情况
            if (res.data.code === 1004019) {
              this.tip.userMobileTip = res.data.message;
            }
          } else {
            this.getSMSCodeParams.disabled = true;
            let timer = setInterval(() => {
              if (this.getSMSCodeParams.seconds < 1) {
                this.getSMSCodeParams.seconds = 60;
                this.getSMSCodeParams.disabled = false;
                clearInterval(timer);
              }
              this.getSMSCodeParams.seconds -= 1;
            }, 1000);
          }
        })
        .catch(res => {
          console.error('获取短信请求错误', res);
        });
    },
    // 提交注册
    register() {
      // let _this = this;
//    let data = this.registerData;
//    for (let key in data) {
//      if (!data.hasOwnProperty(key)) {
//        continue;
//      }
//      // 点击注册时表单漏填的情况
//      if (!data[key]) {
//        switch (key) {
//          case 'userType':
//            Toast({
//              type: 'error',
//              message: '请至少选择一个注册身份'
//            });
//            return;
//          case 'userPWD':
//            Toast({
//              type: 'error',
//              message: '请输入正确的密码'
//            });
//            return;
//          case 'userName':
//            Toast({
//              type: 'error',
//              message: '请输入您的姓名'
//            });
//            return;
//          case 'companyName':
//            Toast({
//              type: 'error',
//              message: '请输入公司名称'
//            });
//            return;
//          case 'companyBusiness':
//            Toast({
//              type: 'error',
//              message: '请输入公司主营业务'
//            });
//            return;
//          case 'smsCode':
//            Toast({
//              type: 'error',
//              message: '请输入短信验证码'
//            });
//            return;
//          default:
//            Toast({
//              type: 'error',
//              message: '请填写正确的注册信息11'
//            });
//            return;
//        }
//      }
//    }
      let _data = this.registerData;
      let checkPassword = _data.userPWD === this.confirmPWD;
      if (!(testMobile(_data.userMobile) && testPWD(_data.userPWD) && testName(_data.userName) && testCompanyName(_data.companyName) && testSMSCode(_data.smsCode) && checkPassword && !this.isRegisted && !this.samePWD)) {
        Toast({
          type: 'error',
          message: '请填写正确的注册信息'
        });
        return;
      }
      this.registerData.userPWD = this.Encrypt(this.registerData.userPWD);
      reg(this.registerData)
        .then(res => {
          if (res.data.code !== 0) {
            this.registerData.userPWD = this.confirmPWD = '';
            Toast({
              type: 'error',
              message: res.data.message
            });
          } else {
            Toast({
              type: 'success',
              message: '注册成功'
            });
            // 注册成功之后=>自动登陆
            login({
              userMobile: this.registerData.userMobile,
              userPWD: this.registerData.userPWD
            }).then(res => {
              if (!res.data.code) {
                this.$store.commit('GET_USERINFO', res.data.data);
                localStorage['user-account'] = JSON.stringify({
                  userMobile: this.registerData.userMobile
                });
                this.$store.commit('LOGIN', res.headers['x-token']);
                this.$store.dispatch('getDicTree');
                this.$router.push(`/homePage`);
              }
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-submit.button {
    height: 45px;
    font-size: 16px;
    letter-spacing: 4px;
}
.reg-title {
    margin-left: -110px;
    padding-left: 30px;
    border-left: 1px solid #ccc;
    p {
        color: #333;
        font-size: 20px;
        line-height: 30px;
    }
    a {
        font-size: 16px;
        color: #4c93fd;
        line-height: 24px;
    }
}
.reg-path {
    a {
        position: relative;
        top: 10px;
        font-size: 20px;
        color: #4c93fd;
    }
    span {
        position: relative;
        top: 10px;
        font-size: 20px;
        color: #999;
    }
}
</style>
<style lang="stylus" scoped>
  .input
    display inline-block
    position relative
    height 34px
    line-height 34px
    padding-left 16px
    width 326px
    font-size 14px
    border-radius 3px
    border 1px solid rgba(7, 17, 27, 0.2)
    &::-webkit-input-placeholder
      font-size 16px
    &.warn
      border 1px solid rgba(245, 53, 3, 0.6)
      box-shadow 0 0 5px rgba(245, 53, 3, 0.3)
  .register-page
    .register-box
      width 100%
      height 732px
      background url(../../../../static/images/beijing.jpg)
      position relative
      .register-container
        position absolute
        padding 20px 48px 32px 42px
        top 30px
        left 50%
        transform translate(-50%, 0)
        background #fff
        .header
          height 40px
          border-bottom 1px solid #d8d8d8
          .title
            display inline-block
            height 24px
            line-height 24px
            font-size 22px
          .right
            float right
            height 16px
            line-height 16px
            margin-top 6px
            font-size 14px
            .text
              color #999
            .link
              color #4c93fd
        .list
          margin 18px 0
          .left
            display inline-block
            vertical-align top
            width 80px
            height 40px
            line-height 40px
            font-size 16px
            color #333
            text-align right
          .right
            display inline-block
            position relative
            vertical-align top
            .tip
              position absolute
              z-index 1
              top -16px
              font-size 14px
              color #f53535
          &.choose-type
            margin 30px 0
            .left
              line-height 80px
            .right
              .type-item
                display inline-block
                height 64px
                width 160px
                text-align center
                border-radius 3px
                border 1px solid #d8d8d8
                cursor pointer
                &.active
                  border 1px solid #4c93fd
                  color #4c93fd
                  .name
                    color #4c93fd
                  .desc
                    color #4c93fd
                &:last-child
                  margin-left 16px
                .name
                  height 33px
                  line-height 33px
                  margin-top 5px
                  font-size 22px
                  color #333
                .desc
                  display inline-block
                  height 20px
                  line-height 20px
                  font-size 14px
                  color #999
          &.code
            position relative
            .SMSCode
              position absolute
              width 142px
              height 34px
              line-height 34px
              right 0
              top 1px
              text-align center
              cursor pointer
              color #fff
        .btn-wrapper
          margin-top 32px
          height 48px
          text-align center
          .button
            width 346px
            float right
        .agreenment-wrapper
          text-align right
          font-size 14px
          height 40px
          line-height 40px
          .text
            color #999
          .agreenment
            color #4c93fd
            cursor pointer
</style>
