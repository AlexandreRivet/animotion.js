<template>
  <svg :width="size.width" :height="size.height + padding * 2 * step.y" class="dark">
    <rect class="background" x="0" y="0" :width="size.width" :height="size.height + padding * 2 * step.y" />
    <g class="grid">
      <line
        v-for="n in grid.x"
        :x1="(n * step.x)"
        y1="0"
        :x2="(n * step.x)"
        :y2="size.height + padding * 2 * step.y"
        :key="n"
        stroke-width="1"
      />
      <line
        v-for="n in (grid.y + padding * 2)"
        x1="0"
        :y1="(n * step.y)"
        :x2="size.width"
        :y2="(n * step.y)"
        :key="n"
        stroke-width="1"
      />
    </g>
    <g class="basics">
      <line
        x1="0"
        :y1="padding * step.y"
        :x2="size.width"
        :y2="padding * step.y"
        stroke-width="1"
      />
      <line
        x1="0"
        :y1="size.height + padding * step.y"
        :x2="size.width"
        :y2="size.height + padding * step.y"
        stroke-width="1"
      />
    </g>
    <line
      class="linear"
      x1="0"
      :y1="size.height + padding * step.y"
      :x2="size.width"
      :y2="padding * step.y"
      stroke-width="1"
    />
    <path
      class="curve"
      :d="path"
      stroke-width="2"
      fill="none"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CurveView',
  props: {
    points: {
      type: Array as PropType<Array<{x: number; y: number; }>>,
      required: true,
    },
    size: {
      type: Object as PropType<{ width: number; height: number; }>,
      required: true,
    },
    grid: {
      type: Object as PropType<{ x: number; y: number; }>,
      required: true,
    },
    padding: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const step = computed(() => ({
      x: props.size.width / props.grid.x,
      y: props.size.height / props.grid.y,
    }));

    const path = computed(() => (
      props.points
        .map((point, index) => (
          `${index === 0 ? 'M' : 'L'}${point.x * props.size.width} ${props.size.height - point.y * props.size.height + props.padding * step.value.y}`
        ))
        .join(' ')
    ));

    console.log(step);

    return {
      path,
      step,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dark {
  .background {
    fill: #2c3e50;
  }

  .grid {
    stroke: #34495e;
  }
}

.background {
  fill: #ecf0f1,
}

.grid {
  stroke: #bdc3c7;
}

.basics,
.curve {
  stroke: #95a5a6;
}

.linear {
  stroke: black;
}
</style>
