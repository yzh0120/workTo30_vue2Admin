<template>
  <page>
    <!-- 表单 -->
    <base-form :data="form">
      <template #button>
        <el-button type="primary" @click="search" native-type="submit">搜索</el-button>
      </template>
    </base-form>

    <!-- 表格 -->
    <base-table :data="table" :pager="pagerData" @event="tableEvent">
      <template #do="{ row, index }">
        <el-button type="text" @click="edit(row, index)">编辑</el-button>
        <el-button type="text" @click="del(row, index)">删除</el-button>
      </template>
    </base-table>

    <!-- 分页 -->
    <pager :data="pagerData" @pageChange="getData" @sizeChange="getData" />
  </page>
</template>

<script>
// import * as config from "@/tools/config.js"
export default {
  data() {
    let self = this;
    return {
      form: {
        list: [
          { title: "姓名", field: "__input", type: "input" },
          { slot: "button" },
        ],
        data: {},
        inline: true,
      },

      table: {
        rowKey: "id", //重点 节点的标识
        treeProps: {
          //重点    不同的props
          children: "children1",
          hasChildren: "hasChildren",
        },
        autoWidth: true,
        head: [
          {
            field: "projectNo",
            title: "项目编号",
          },
          {
            field: "userName",
            title: "用户名",
          },
          { slot: "do", title: "操作", width: 150, fixed: "right" },
        ],
        data: [],
        height: self.h,
        loading: true,
        index: true,
      },
      pagerData: {
        pageNo: 1, //第一页
        pageSize: 20, //每页显示20张
        total: 0, //总数
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    edit(row) { },
    del(row, index) { },
    search() {
      this.pagerData.pageNo = 1;
      this.getData();
    },
    getData() {
      this.$api.test
        .tablePager(Object.assign({}, this.pagerData), {
          load: { obj: this.table },
        })
        .then((res) => {
          /////////////////////////////////////
          res.data.records.forEach((item) => {
            item.id =
              new Date().getTime() +
              parseInt(Math.random() * (1000000 - 0 + 1) + 0, 10);
            item.children1 = [
              {
                id:
                  new Date().getTime() +
                  parseInt(Math.random() * (1000000 - 0 + 1) + 0, 10),
                projectNo: "2",
                userName: 2,
                hasChildren: true,
              },
            ];
          });
          /////////////////////////////////////
          this.table.data = res.data.records;
          this.pagerData.total = res.data.total;
        });
    },
    tableEvent(e) {
      if (e.name == "checkbox") {
        console.log(e.value);
      }
      if (e.name == "radio") {
        console.log(e.value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

