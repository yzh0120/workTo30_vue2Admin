<!--
 * @Author: yz
 * @Date: 2022-05-16 09:25:59
 * @Description: 
 * 
-->
<template>
  <page>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </page>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>


<style lang="scss" >
.el-table__header-wrapper {
  box-shadow: 0px 10px 10px red !important;
}

.el-table,
.el-table__append-wrapper {
  overflow: visible !important;
}
</style>
