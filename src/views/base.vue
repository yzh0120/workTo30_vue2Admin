<template>
  <page show>
    123

    {{ dataItem }}
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