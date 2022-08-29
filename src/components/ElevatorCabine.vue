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
  width: 100%;
  height: 250px;
}
.elevatorCabine:first-of-type {
  background-color: grey;
}
</style>
