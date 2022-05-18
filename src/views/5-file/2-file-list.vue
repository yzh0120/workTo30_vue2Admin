<!--
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\5-file\2-file-list.vue
 * 
-->
<template>
  <div>
    <file-List :fileList="fileList" :del="true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "xxx",
          taskName: "xxx",
          detail: [],
          //type:[],

          //require:

          //num:
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
