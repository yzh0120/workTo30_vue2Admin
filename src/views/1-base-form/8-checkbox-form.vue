<template>
  <page>
    <el-button type="primary" @click="go">主要按钮</el-button>
    <base-form :data="form" ref="form" @event="formEvent">
      <template #mySlot>
        <el-input placeholder="请输入内容" v-model="form.data.xxx">
          <template slot="prepend">Http://</template>
        </el-input>
      </template>
    </base-form>
  </page>
</template>

<script>
export default {
  data() {
    let self = this;
    return {
      form: {
        span: true,
        list: [

          ////////////////////////////////////////////////////////////////////////
          {
            type: "input",
            field: "_input",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$check.demo },
            ],
          },
          {
            type: "input",
            field: "_input2",
            title: "普通输入框",
            span: 12,
            rules: [
              { required: true, message: "请输入" },
              { validator: self.$check.demo },
            ],
          },

          ////////////////////////////////////////////////////////////////////////
          {
            type: "checkbox",
            field: "_checkbox",
            // title: "多选框",
            span: 24,
            labelWidth: "0px",
            opt: [
              { text1: "显示隐藏", value1: 1 },
              // { text1: "多选二", value1: 2 },
            ],
            text: "text1",
            value: "value1",
          },
          {
            type: "input",
            field: "_input3",
            title: "普通输入框",
            span: 12,

            rules: [
              { required: true, message: "请输入" },
              { validator: self.$check.demo },
            ],
          },
          {
            type: "input",
            field: "_input4",
            title: "普通输入框",
            span: 12,

            rules: [
              { required: true, message: "请输入" },
              { validator: self.$check.demo },
            ],
          },
          ////////////////////////////////////////////////////////////////////////

        ],
        data: {},
        // titleWidth: "160px",
      },
    };
  },
  watch: {
    // "form.data": {
    //   handler() { 

    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  mounted() {

  },
  methods: {

    formEvent(e) {
      // console.log(e, "表单事件");
      if (e.item.field == "_checkbox") {
        if ((e.name == "checkbox")) {
          this._setList(this.form, ["_input4", "_input3"], { show: e.value[0] ? true : false })
          this._setData(this.form, ["_input4", "_input3"], null)
          // this._setList(this.form, "_input3", { show: e.value[0] ? true : false })
        }
      }

    },
    go() {
      this.$refs.form.check();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
