<template>
  <div :class="$style.app"><MainWrapper /></div>
</template>

<script>
import MainWrapper from "./components/MainWrapper.vue";
export default {
  name: "App",
  components: {
    MainWrapper,
  },
};
</script>

<style lang="scss" module>
.app {
  max-width: 1200px;
  padding-top: 50px;
  margin: 0 auto;
}
</style>
