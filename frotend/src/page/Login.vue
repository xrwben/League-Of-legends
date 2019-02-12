<template>
	<div id="Login">
    <div class="login_wrapper">
      <div class="login_title">
        <h2>登录</h2>
      </div>
      <div class="login_input">
				<el-input type="text" spellcheck="false" v-model.trim="login.account" @keydown.enter="submitForm" autofocus placeholder="请输入用户名">
					<i slot="prefix" class="el-input__icon iconfont icon-denglu-copy"></i>
				</el-input>
				<el-input type="password" v-model.trim="login.password" @keydown.enter="submitForm" placeholder="请输入密码">
					<i slot="prefix" class="el-input__icon iconfont icon-dengluyemianmima"></i>
				</el-input>
				<el-button type="primary" size="medium" :loading="true">登录</el-button>
        <p><a href="javascript:void(0)" @click="$router.push('/register')">注册&gt;&gt;</a></p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
    data () {
      return {
        login: {
          account: '',
          password: ''
        },
        loginTxt: '登录',
        showLoading: false
      }
    },
    methods: {
      submitForm () {
        if (!this.login.account) {
          this.$message.warning('账号不能为空！')
        } else if (!this.login.password) {
          this.$message.warning('密码不能为空！')
        } else {
          this.loginTxt = '登录中'
          this.axios({
            method: 'POST',
            url: '/keygood/web/companyuser/login',
            data: this.toFormData({
              account: this.login.account.trim(),
              password: this.login.password.trim()
            })
          }).then((result) => {
            if (result.data.code === 0) {
              // 把数据保存在本地
              sessionStorage.setItem('token', result.data.token)
              sessionStorage.setItem('company', JSON.stringify(result.data.company))
              sessionStorage.setItem('companyUser', JSON.stringify(result.data.companyUser))
              sessionStorage.setItem('historyOrder', JSON.stringify(result.data.historyOrder))
              sessionStorage.setItem('thisOrder', JSON.stringify(result.data.thisOrder))
              // 登录跳转
              if (result.data.companyUser.logonMode === 1) {
                this.$router.push('/stock')
              } else {
                if (result.data.companyUser.role) {
                  if (result.data.companyUser.role.charAt(0) === '1') {
                    this.$router.push('/stock')
                  } else if (result.data.companyUser.role.charAt(0) === '2') {
                    this.$router.push('/companymanagement')
                  } else {
                    this.$router.push('/my')
                  }
                } else {
                  this.$router.push('/my')
                }
              }
            }
          }).catch(() => {
            this.loginTxt = '登录'
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	#Login {
		width: 100%;
		height: 100%;
		// background: url('../asserts/login-bg.jpg') no-repeat center;
		// background-size: 100% 100%;
		display: flex;
		align-items: center;
  	justify-content: center;
		& > .login_wrapper {
			width: 400px;
			height: 280px;
			border: 1px solid rgba(255, 255, 255, .2);
			border-radius: 5px;
			background: rgba(0, 0, 0, .2);
			.login_title {
				height: 45px;
				background:rgba(98,174,255,1);
				border-radius: 4px 4px 0px 0px;
				h2 {
					line-height: 45px;
					text-align: center;
					font-size: 22px;
					color: #fff;
					font-weight: normal;
					letter-spacing: 10px;
				}
			}
			.login_input {
				margin-top: 20px;
				// border: 1px solid red;
				padding: 10px 35px;
				text-align: center;
				.el-input {
					margin-top: 10px;
          /deep/.el-input__prefix {
            left: 10px;
          }
				}
				button {
					width: 100%;
					margin-top: 20px;
				}
        p {
          text-align: right;
          padding: 5px;
          & > a {
            font-size: 12px;
            color: #fff;
          }
        }
			}
		}
	}
</style>