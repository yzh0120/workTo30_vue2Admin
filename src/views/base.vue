<template>
  <page>
    123

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
};
</script>

<style lang="scss" scoped>
</style>
