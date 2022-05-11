<template>
  <div
    :style="{
      width: $store.state.setup.window_innerWidth + `px`,
      height: $store.state.setup.window_innerHeight + `px`,
    }"
    class="login-container"
    v-loading="loading"
    element-loading-text="登录中"
  >
    <div class="login">
      <div class="left">
        <!-- <div class="leftbox"> -->
        <!-- <img :src="require(`../assets/login1.png`)" alt="" width="204px" style="margin-top:108px"> -->
        <div class="leftfont">
          招采项目全生命周期 一站式金融解决方案
        </div>
        <!-- </div> -->
      </div>

      <div class="right">
        <el-card shadow="always" :body-style="{ padding: '20px' }" style="height:100%">
          <div class="title"> 手机号登录</div>
          <el-form ref="form" :model="form"  class="login-form" autocomplete="off"
            size="large" @submit.native.prevent>


            <el-form-item prop="phoneNumber">
              <el-input ref="phoneNumber" v-model.trim="form.phoneNumber" placeholder="请输入经办人手机号码"
                class="phoneNumber">
              </el-input>
            </el-form-item>

            <el-form-item prop="msgCode">
              <el-input v-model.trim="form.msgCode" placeholder="请输入验证码" class="msgCode">
                <template slot="append">
                  <el-button type="primary" :disabled="btndisabled" @click.prevent="sendCode">{{ codeText }}</el-button>
                </template>
              </el-input>
            </el-form-item>

            <el-form-item prop="msgCode" style="position: relative;">
               <el-button style="position: absolute; right: 12px;top:7px;z-index: 999;background-color: #DCDFE6;border: 0px;color:#000000 ;opacity: 50%;" type="primary" :disabled="btndisabled" @click.prevent.stop="sendCode" size="mini" >{{ codeText }}</el-button>
              <el-input v-model.trim="form.msgCode" placeholder="请输入验证码" class="msgCode">
              </el-input>
            </el-form-item>
            
            <el-button native-type="submit" :loading="loading" type="primary" class="loginbtn" size="large" @click.native.prevent="doLogin">登 录</el-button>
            <el-checkbox v-model="hasRead" class="mb20">
              浏览并同意
              <span style="color: #409eff;" @click.stop="service">《服务协议》</span>
            </el-checkbox>
          </el-form>
        </el-card>
      </div>

    </div>
  </div>
</template>
<script>
import * as Cookie from "@/tools/cookjs.js";
import keepAlive from "@/native/Mixins/keepAlive.js";
export default {
  mixins: [keepAlive],
  data() {
    return {
      xyurl: "/de", //如果没有ip默认就是自己的ip  例如 : "/用户服务协议.pdf",
      hasRead: "false",//已读
      form: {//表单
        username: "",
        password: "",
        code: "",
      },
      loading: false,



      codeText: "获取验证码",
      btndisabled: false,
      timer: null,


    };
  },
  computed: {
    pageStack: {
      get() {
        return this.$store.state.permission.pageStack;
      },
      set(val) {
        this.$store.commit("permission/set_pageStack", val);
      },
    },
  },
  mounted() {

  },
  methods: {
    //服务协议
    service(){},
    // 点击按钮发送验证码
    sendCode() {
      // this.$refs["loginForm"].validateField(["phoneNumber"], (valid) => {
      //   if (valid) {
      //     this.$message.warning("请先填写手机号码");
      //     return false;
      //   } else {
      //     this.getCode();
      //     var count = 60;
      //     this.btndisabled = true;
      //     this.codeText = `${count}s后重新获取`;
      //     this.timer = setInterval(() => {
      //       count--;
      //       this.codeText = `${count}s后重新获取`;
      //       if (count <= 0) {
      //         clearInterval(this.timer);
      //         this.btndisabled = false;
      //         this.codeText = `获取验证码`;
      //       }
      //     }, 1000);
      //   }
      // });
    },
    // 获取验证码
    getCode() {
      // userApi
      //   .sign({
      //     phoneNumber: this.loginForm.phoneNumber,
      //   })
      //   .then((res) => {
      //     if (res.msgCode == this.httpOk) {
      //       this.$message.success(
      //         `验证码已经发送到${this.loginForm.phoneNumber}，请注意查收`
      //       );
      //     } else {
      //       this.$message.error(res.message);
      //     }
      //   });
    },
    //登录
    doLogin() {
      let data = Object.assign({  }, this.form);
      this.$api.user.login(data, { headers: true }).then(
        (resp) => {
          this.loading = false;
          let res = resp.data;

          Cookie.set(
            "token",
            "Bearer " + res.data.token,
            res.data.expireDateTimeSpan
          ); //登录成功 存token
          this.$router.push({
            path: "/base",
          });
        },
        (err) => {
          this.getCaptcha();
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
$light_gray: #ccc;

.login-container {
  width: 100%;
  height: 100%;
  background: url("https://s4.ax1x.com/2022/02/08/H1mQXt.md.png") no-repeat;
  background-size: 100% 100%;
}

.image {
  position: absolute;
  top: 50px;
  left: 100px;
}

.login {
  width: 1050px;
  height: 510px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;

  .left {
    height: 100%;
    width: 204px;

    .leftfont {
      margin-top: 90px;
      font-size: 22px;
    }

    // }
  }

  .right {
    height: 100%;
    width: 450px;

    .title {
      margin-top: 63px;
      font-size: 26px;
      font-weight: bold;
      color: black;
      margin-bottom: 72px;
    }
  }
}

.title {
  font-size: 26px;
  color: $light_gray;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.register {
  color: #409eff;
  cursor: pointer;
  text-align: right;
}

::v-deep {
  .el-input.el-input--large input {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
    padding-left: 45px;
  }

  .el-input-group__append {
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;
    background-color: transparent ;
  }


  .phoneNumber {
    .el-input__inner {
      /*no-repeat:图片不重复；10px：控制图片左边距 center：图片上下居中*/
      background: url(../../assets/imgs/phone.png) no-repeat 10px center;
    }
  }

  .msgCode {
    .el-input__inner {
      /*no-repeat:图片不重复；10px：控制图片左边距 center：图片上下居中*/
      background: url(../../assets/imgs/password.png) no-repeat 10px center;
    }
  }

  .loginbtn {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 15px;
    background-color: #F6384C;
    border: #F6384C;
  }
}
</style>

<!-- <style scoped lang="scss">
.login {
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    backdrop-filter: blur(10px);
  }
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url("../../assets/imgs/bg-login.png") no-repeat;
  background: url("https://s4.ax1x.com/2022/02/08/H1mQXt.md.png") no-repeat;
  background-size: 100% 100%;
  // background-position: center;

  .card {
    position: relative;
    z-index: 3;
    width: 400px;
    .register {
      margin-top: 10px;
      color: #409eff;
      cursor: pointer;
      text-align: right;
      font-size: 14px;
    }
  }
}

.flex {
  display: flex;
  img {
    margin-left: 20px;
    flex-basis: 120px;
    width: 120px;
    height: 32px;
  }
}
</style> -->
