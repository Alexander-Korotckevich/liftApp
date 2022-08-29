<template>
  <div :class="$style.liftShaft">
    <TransitionGroup name="list">
      <ElevatorCabine v-for="(floor, index) in levels" :key="index" />
    </TransitionGroup>
  </div>
</template>

<script>
import ElevatorCabine from "./ElevatorCabine.vue";
export default {
  name: "ListShaft",
  components: { ElevatorCabine },
  computed: {
    levels() {
      return this.$store.state.levelsForCabine;
    },
  },
};
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

<style lang="scss" module>
.liftShaft {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 240px;
  height: 100%;
  border-left: 3px solid #333;
  border-right: 3px solid #333;
}
</style>
