<template>
  <div :class="$style.elevatorCabine"></div>
</template>

<script>
export default {
  name: "ElevatorCabine",
};
</script>

<style lang="scss" module>
.elevatorCabine {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background-color: grey;
}
</style>
