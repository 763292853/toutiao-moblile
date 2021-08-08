<template>
  <div>
    <!-- navbar -->
    <van-nav-bar class="app-nav-bar"
                 title="登录"
                 left-arrow
                 @click-left="$router.back()" />
    <!-- 登录表单 -->
    <van-form @submit="onLogin"
              :show-error-message='false'
              validate-first
              ref="loginn-form"
              :show-error='false'
              @failed="onfailed">
      <van-field v-model="user.mobile"
                 icon-prefix="toutiao"
                 left-icon="shouji"
                 name="mobile"
                 placeholder="请输入手机号"
                 :rules="formRules.mobile" />
      <van-field v-model="user.code"
                 icon-prefix="toutiao"
                 clearable

                 left-icon="yanzhengma"
                 placeholder="请输入验证码"
                 >
        <template #button>

          <van-count-down v-if="isCountDownShow"
                          :time="1000*5"
                          format=" ss s"
                          @finish="isCountDownShow=true,isSendSmsLoading=false" />
          <van-button v-else
                      size="small"
                      :loading='isSendSmsLoading'
                      round
                      @click.prevent="onSendSms">
            发送验证码
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn"
                    type="info"
                    block>登录</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import { login, sendSms } from '../../api/user'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      data: {
        type: 'new',
        page: '1'
      },
      formRules: {
        mobile: [{ required: true, pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误', trigger: 'onBlur' }, {}],
        code: [{ required: true, pattern: /^\d{6}$/, message: '验证码格式错误', trigger: 'onBlur' }, {}]
      },
      isCountDownShow: false, // 控制倒计时的显示
      isSendSmsLoading: false //
    }
  },
  methods: {
    async onLogin () {
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)
        console.log(res)
        this.$toast.success('登录成功')
        // 将后端返回的用户登录状态放到vuex容器中
        this.$store.commit('setUser', 'res.data.data')
      } catch (err) {
        console.log(err)
        this.$store.commit('setUser', 'res.data.data')
        this.$toast.fail('登录失败，手机号或者验证码错误')
      }

      // /api/v1_0/authorizations
    },
    onfailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    async onSendSms () {
      try {
        await this.$refs['loginn-form'].validate('mobile')
        const res = await sendSms(this.user.mobile)
        console.log(res)
        this.isCountDownShow = true
      } catch (err) {
        let message = ''
        // try里面任何代码的错误都会进入catch里面
        console.log(err)
        if (err && err.response && err.response.status === 429) {
          message = '发送太频繁了，请稍后重试'
        } else if (err.name === 'mobile') {
          message = err.message
        } else {
          message = '发送失败，请稍后重试'
        }
        this.$toast({
          message,
          position: 'top'
        })
      }
      this.isSendSmsLoading = false
      // /v1_0/sms/codes/:mobile
      // 检验验证码
      // 验证通过-》请求发送验证码-用户接受短信-输入验证码-请求登录
      // 请求验证码-倒计时-隐藏发送按钮-显示倒计时
      // 倒计时结束-隐藏倒计时-显示发送按钮
    }
  }

}

</script>
<style lang="less" scoped>
.login-btn-wrap {
  padding: 27px 17px;
  .login-btn {
    background-color: #6db4fb;
    border: none;
    .van-button__text {
      font-size: 30px !important;
    }
  }
}
.toutiao-shouji {
  font-size: 15px;
}
.toutiao-yanzhengma {
  font-size: 15px;
}
</style>
