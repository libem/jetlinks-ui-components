<docs>
---
order: 6
title: 垂直
---

## zh-CN

垂直方向的 Slider。

</docs>

<template>
  <div style="height: 300px">
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <j-slider v-model:value="value1" vertical />
    </div>
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <j-slider v-model:value="value2" vertical range :step="10" />
    </div>
    <div style="display: inline-block; height: 300px; margin-left: 70px">
      <j-slider v-model:value="value3" vertical range :marks="marks" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, createVNode } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(30);
    const value2 = ref<[number, number]>([20, 50]);
    const value3 = ref<[number, number]>([26, 37]);
    const marks = ref<Record<number, any>>({
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: createVNode('strong', {}, '100°C'),
      },
    });

    return {
      value1,
      value2,
      value3,
      marks,
    };
  },
});
</script>
<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
</style>
