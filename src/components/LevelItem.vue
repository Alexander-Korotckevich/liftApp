<template>
  <li :class="$style.levelItem">
    <h2 :class="$style.number">{{ number }}</h2>
    <button @click="moveCabine(number)" :class="$style.btn">
      <span :class="$style.btnIcon"></span>
    </button>
  </li>
</template>

<script>
export default {
  name: "LevelItem",
  props: ["number"],
  computed: {
    difference() {
      return this.$store.state.numbersDifference;
    },
  },
  methods: {
    moveCabine(el) {
      this.$store.dispatch("changeNumber", el);
      if (this.difference) {
        setTimeout(() => {
          let tickId = setInterval(() => {
            this.$store.dispatch("displayCabine");
          }, 300);
          setTimeout(() => {
            clearInterval(tickId);
          }, 3000);
        }, this.difference * 1000);
        console.trace();
      }
    },
  },
};
</script>

<style lang="scss" module>
.levelItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  padding-left: 250px;
  border: 1px solid rgb(51, 51, 51, 0.5);
}

.number {
  font-size: 40px;
  color: #333;
  margin-bottom: 5px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
}

.btnIcon {
  background-color: #333;
  width: 25px;
  height: 25px;
  border-radius: 100px;
}
</style>
