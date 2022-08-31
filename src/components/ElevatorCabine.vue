<template>
  <div
    v-show="isDisplay"
    :style="{
      marginBottom: number_data + 'px',
      transitionDuration: transition_duration + 's',
    }"
    :class="$style.elevatorCabine"
  ></div>
</template>

<script>
export default {
  name: "ElevatorCabine",
  computed: {
    isDisplay() {
      return this.$store.state.displayCabine;
    },
    number_data() {
      return (this.$store.state.number - 1) * 250;
    },

    transition_duration() {
      return this.$store.state.numbersDifference;
    },
  },
};
</script>

<style lang="scss" module>
.elevatorCabine {
  width: 100%;
  height: 250px;
  background-color: grey;
  transition-property: margin-bottom;
  transition-timing-function: linear;
}
</style>
