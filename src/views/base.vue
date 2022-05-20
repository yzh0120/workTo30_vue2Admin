<!--
 * @Author: yz
 * @Date: 2022-05-10 09:40:48
 * @Description: ,
 * @FilePath: \workTo30_vue2Admin\src\views\base.vue
 * 
-->
<template>
  <page>


    {{ dataItem.demo }}
  </page>
</template>

<script>
export default {
  computed: {
    dataItem() {
      return this.$store.getters.dataItem;
    },
  },
  mounted() {
    console.log(this.$fn.uuid(), "this. $fn.uuid()")
  },
};
</script>

<style lang="scss" scoped>
</style>
