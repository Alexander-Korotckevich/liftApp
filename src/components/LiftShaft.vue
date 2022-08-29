<template>
  <div :class="$style.liftShaft">
    <ElevatorCabine />
  </div>
</template>

<script>
import ElevatorCabine from "./ElevatorCabine.vue";
export default {
  name: "ListShaft",
  components: { ElevatorCabine },
};
</script>

<style lang="scss" module>
.liftShaft {
  position: absolute;
  left: 0;
  top: 0;
  width: 240px;
  height: 100%;
  border-left: 3px solid #333;
  border-right: 3px solid #333;
}
</style>
