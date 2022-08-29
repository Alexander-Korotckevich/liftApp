<template>
  <div :class="$style.mainWrapper">
    <ListOfLevels />
    <LiftShaft />
  </div>
</template>

<script>
import ListOfLevels from "./ListOfLevels.vue";
import LiftShaft from "./LiftShaft.vue";
export default {
  name: "MainWrapper",
  components: { ListOfLevels, LiftShaft },
};
</script>

<style lang="scss" module>
.mainWrapper {
  position: relative;
  width: 100%;
}
</style>
