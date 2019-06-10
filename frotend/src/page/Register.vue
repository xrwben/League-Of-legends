<template>
	<div id="Register">
    <div class="register_wrapper">
      <div class="register_title">
        <h2>注册</h2>
      </div>
      <div class="register_input">
				<el-input type="text" spellcheck="false" v-model.trim="login.account" @keydown.enter="registerAccount" autofocus placeholder="请输入用户名">
					<i slot="prefix" class="el-input__icon iconfont icon-denglu-copy"></i>
				</el-input>
				<el-input type="password" v-model.trim="login.password" @keydown.enter="registerAccount" placeholder="请输入密码">
					<i slot="prefix" class="el-input__icon iconfont icon-dengluyemianmima"></i>
				</el-input>
				<el-input type="password" v-model.trim="login.conformpassword" @keydown.enter="registerAccount" placeholder="请确认密码">
					<i slot="prefix" class="el-input__icon iconfont icon-dengluyemianmima"></i>
				</el-input>
				<el-button type="primary" size="medium" @click="registerAccount">注册</el-button>
        <p><a href="javascript:void(0)" @click="$router.push('/login')">登录 &gt;&gt;</a></p>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Register",
    data () {
      return {
        login: {
          account: "",
          password: "",
          conformpassword: ""
        }
      }
		},
		created () {
			console.log(this.api);
		},
    methods: {
      registerAccount () {
        if (!this.login.account) {
          this.$message.warning('账号不能为空！')
        } else if (!this.login.password) {
          this.$message.warning('密码不能为空！')
        } else if (this.login.password !== this.login.conformpassword) {
          this.$message.warning('两次输入密码不一致！');
        } else {
					this.api.user.register(
						this.login.account,
						this.login.password
					).then(res => {
						console.log(res);
						if (res.data.error.level === 0) {
							this.$message.success('注册成功！');
							this.$router.go(-1);
						} else {
							this.$message.error(res.data.error.msg);
						}
					}).catch(err => {
						console.log(err);
					});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
	#Register {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
  	justify-content: center;
		& > .register_wrapper {
			width: 400px;
			height: 320px;
			border: 1px solid rgba(255, 255, 255, .2);
			border-radius: 5px;
			background: rgba(0, 0, 0, .2);
			.register_title {
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
			.register_input {
				margin-top: 20px;
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