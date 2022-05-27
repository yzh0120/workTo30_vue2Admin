<!--
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\views\5-file\1-one-file.vue
 * 
-->
<template>
  <page>
    <file-list-show :arr="uploadObj.detail" :del="true" />
    <oneFile :uploadObj="uploadObj" :projectId="projectId"></oneFile>
  </page>
</template>

<script>
export default {

  data() {
    return {
      projectId: "23424232344645",
      uploadObj: {
        name: "xxx",
        taskName: "xxx",
        detail: [],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
