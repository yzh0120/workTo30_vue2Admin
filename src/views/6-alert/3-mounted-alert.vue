<!--
 * @Author: yz
 * @Date: 2022-06-14 09:47:13
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\6-alert\3-mounted-alert.vue
 * 
-->
<template>
  <div>
    <page>
      <el-button @click="test">测试有没有自动弹窗</el-button>
      <!-- <el-button @click="add">点我</el-button> -->
      <alert :data="alertData" @event="alertEvent" ref="alert">
        <base-form :data="formAlert" ref="formAlert"></base-form>
      </alert>
    </page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formAlert: {
        span: true,
        list: [
          { title: "角色名称", field: "roleName", type: "input", span: 12 },
          { slot: "button" },
        ],
        data: {},
      },
      alertData: {
        flag: false,
        // width: "800px",
        // height: "600px",
        title: "基础弹窗",
      },
    };
  },
  mounted() {
    this.$refs.alert.$refs.modal.$el.style.display = "none";
    this.alertData.flag = true;
    this.$nextTick(() => {
      this.alertData.flag = false;
      setTimeout(() => {
        this.$refs.alert.$refs.modal.$el.style.display = "";
      }, 1000);
    });
  },
  methods: {
    test() {
      console.log(this.$refs.formAlert)
    },
    add() {
      this.alertData.flag = true;
    },
    alertEvent(e) {
      if (e.name == "confirm") {
        // let url = this.formAlert.data.id ? "update" : "save";
        // this.$api.role[url](this.formAlert.data).then((res) => {
        //   this.$message.success(res.info);
        //   this.getData();
        //   this.alertEvent({ event: "cancel" });
        // });
        this.alertEvent({ name: "cancel" });
      }
      if (e.name == "cancel") {
        // this.formAlert.data = {};
        // this.$refs.formAlert.reset();
        this._reset(this.formAlert)
        this.alertData.flag = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
