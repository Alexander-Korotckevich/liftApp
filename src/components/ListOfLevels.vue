<template>
  <ul :class="$style.listOfLevels">
    <LevelItem :number="level" v-for="(level, index) in levels" :key="index" />
  </ul>
</template>

<script>
import LevelItem from "./LevelItem.vue";
export default {
  name: "ListOfLevels",
  components: { LevelItem },
  computed: {
    levels() {
      return this.$store.state.levels;
    },
  },
};
</script>

<style lang="scss" module>
.listOfLevels {
  list-style: none;
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  margin: 0;
}
</style>
