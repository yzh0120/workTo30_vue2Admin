<template>
  <page>
    <!-- 表单 -->
    <!-- <base-form :data="form">
      <template #button>
        <el-button type="primary" @click="search" native-type="submit"
          >搜索</el-button
        >
        
      </template>
    </base-form> -->
    <el-button type="primary" @click="add">新增</el-button>
    <!-- 表格 -->
    <base-table :data="table" @event="tableEvent">
      <template #do="{ row, index }">
        <el-button type="text" @click="edit(row, index)">编辑</el-button>
        <el-button type="text" @click="del(row, index)">删除</el-button>
      </template>
    </base-table>

    <!-- 分页 -->
    <!-- <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" /> -->

    <!-- 弹窗 -->
    <alert :data="alertData" @event="alertEvent">
      <!-- 弹窗的表单 -->
      <base-form :data="formAlert" ref="formAlert"></base-form>
    </alert>
  </page>
</template>

<script>
// import * as config from "@/tools/config.js"
export default {
  data() {
    let self = this;
    return {
      //   form: {
      //     list: [
      //       { title: "姓名", field: "__input", type: "input" },
      //       { slot: "button" },
      //     ],
      //     data: {},
      //     inline: true,
      //   },

      table: {
        autoWidth: true,
        head: [
          {
            title: "角色名称",
            field: "roleName",
          },
          {
            field: "userName",
            title: "用户名",
          },
          { slot: "do", title: "操作", width: 150, fixed: "right" },
        ],
        data: [],
        height: self.h,
        loading: false,
        index: true,
      },
      //   pagerData: {
      //     pageNo: 1, //第一页
      //     pageSize: 20, //每页显示20张
      //     total: 0, //总数
      //   },
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
    // this.getData();
  },
  methods: {
    edit(row, index) {
      this.formAlert.data = row;
      this.formAlert.data.index = index;
      this.add();
    },
    del(index) {
      this.table.data.splice(index, 1);
    },
    // edit(row) {},
    // del(row, index) {},
    // search() {
    //   this.pagerData.pageNo = 1;
    // //   this.getData();
    // },

    tableEvent(e) {
      if (e.name == "checkbox") {
        console.log(e.value);
      }
      if (e.name == "radio") {
        console.log(e.value);
      }
    },
    add() {
      this.alertData.flag = true;
    },
    alertEvent(e) {
      if (e.name == "confirm") {
        if (this.$refs.formAlert.check()) {
          console.log(this.$fn.type(this.formAlert.data.index), "this.formAlert.data")
          if (this.$fn.type(this.formAlert.data.index) == "und") {//如果index不存在,说明还是新数据
            this.formAlert.data.index = this.table.data.length;
            this.table.data.push(this.$fn.deepClone(this.formAlert.data));
          } else {//旧数据
            // console.log(this.table.data, this.formAlert.data)
            this.table.data[this.formAlert.data.index] =
              this.$fn.deepClone(this.formAlert.data);
          }

          this.alertEvent({ name: "cancel" });
        } else {
        }
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

