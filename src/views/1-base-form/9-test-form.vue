<template>
  <page>
    <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-button type="primary" size="default" @click="change">显示隐藏</el-button>

      </template>
    </base-form>
  </page>
</template>

<script>
export default {
  watch: {
    "form.data": {
      handler() {
        if (this.form.data._select === "1") {
          this._setList(this.form, "_date", { show: true })
        } else {
          this._setList(this.form, "_date", { show: false })
          this.form.data._date = null
        }
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    let self = this;
    return {
      form: {
        span: true,
        list: [
          { type: "select", field: "_select", title: "选择", opt: [{ value: "1", text: "显示" }, { value: "0", text: "不显示" }] },
          { type: "date", field: "_date", title: "年月日选择器", show: false },


          { slot: "mySlot", field: "xxx", title: "自定义插槽" },
        ],
        data: {},
        // titleWidth: "160px",
      },
    };
  },
  mounted() {
    let arr = [
      {
        id1: "a",
        label1: "a",
        subOptions: [
          {
            id1: "aa",
            label1: "aa",
          },
          {
            id1: "ab",
            label1: "ab",
          },
        ],
      },
      {
        id1: "b",
        label1: "b",
      },
      {
        id1: "c",
        label1: "c",
      },
    ];
    this._set(this.form, "__treeselect", { opt: arr });

    this._set(this.form, "__treeselectCreate", { opt: arr });
  },
  methods: {
    change() {

    },
    //下拉框的本地过滤函数  有一点问题  目前建议用 select_remote 代替
    select_filterFn(query, row) {
      console.log(query, row, "query");
      let arr = [
        { text: "选项一", value: 1 },
        { text: "选项二", value: 2 },
      ];
      this._set(this.form, "_select_filterFn", { opt: arr });
    },
    //下拉框的远程过滤函数
    select_remote(query) {
      console.log(query, "query");
      let arr = [
        { text: query + "选项一", value: 1 },
        { text: query + "选项二", value: 2 },
      ];
      this._set(this.form, "_select_remote", { opt: arr });
    },
    //auto的自动补全
    auto_filter(queryStr, cd) {
      //自动补全
      let res = [
        {
          value1: "三全鲜食（北新泾店）",
          address: "长宁区新渔路144号",
        },
        {
          value1: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
      ];
      cd(res);
    },
    formEvent(e) {
      console.log(e, "表单事件");
      if (e.item.field == "_input_btn") {
        if ((e.name = "btn")) {
          console.log(this.form.data);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
