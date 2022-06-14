<template>
  <page>
    <table class="table">
      <tbody>
        <!-- <tr>
          <td rowspan="2">企业名称</td>
          <td rowspan="2"></td>
          <td>统一社会信用代码</td>
          <td></td>
          <td>统一社会信用代码</td>
          <td></td>
        </tr>
        <tr>


          <td>法人代表身份证</td>
          <td>xxx</td>
          <td>法人手机</td>
          <td></td>
        </tr> -->

        <template v-for="(item, index) in arr">
          <template v-for="(itemC, indexC) in item.arr">
            <tr>
              <td v-if="indexC == 0" :rowspan="item.arr.length">{{ item.name }}</td>
              <td>关键字{{ indexC }}</td>
              <td> </td>
            </tr>
          </template>
        </template>

      </tbody>
    </table>
  </page>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "合同一",
          arr: [{ key: "" }, { key: "" }]
        },
        {
          name: "合同二",
          arr: [{ key: "" }, { key: "" }]
        }
      ]
      // arr: [
      //   {name:"合同一"}
      // ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
