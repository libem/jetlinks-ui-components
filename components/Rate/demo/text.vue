<docs>
---
order: 2
title: 文案展现
---

## zh-CN

给评分组件加上文案展示。

</docs>
<template>
  <span>
    <j-rate v-model:value="value" :tooltips="desc" />
    <span class="ant-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(3);
    const desc = ref<string[]>(['terrible', 'bad', 'normal', 'good', 'wonderful']);
    return {
      value,
      desc,
    };
  },
});
</script>
