<template>
  <Curve
    :points="points"
    :size="{ width: 500, height: 500 }"
    stroke="white"
    :grid="{ x: 10, y: 10 }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { easeInOutBack as easeFnc } from '@animotion/easing';

import Curve from './components/CurveView.vue';

export default defineComponent({
  name: 'App',
  components: {
    Curve,
  },
  setup() {
    const points: { x: number; y: number }[] = [];
    const nbPoints = 100;
    // const curve = bezier(0.78, 0.45, 0.11, 1.61);
    const curve = easeFnc();
    for (let i = 0; i <= nbPoints; i += 1) {
      const x = i / nbPoints;
      points.push({x, y: curve(x) });
    }
    return {
      points,
    }
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
