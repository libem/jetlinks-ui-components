<docs>
---
order: 3
title: 高级用法
---

## zh-CN

穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。

</docs>

<template>
  <j-transfer
    v-model:target-keys="targetKeys"
    :data-source="mockData"
    show-search
    :list-style="{
      width: '250px',
      height: '300px',
    }"
    :operations="['to right', 'to left']"
    :render="item => `${item.title}-${item.description}`"
    @change="handleChange"
  >
    <template #footer="{ direction }">
      <j-button
        v-if="direction === 'left'"
        size="small"
        style="float: left; margin: 5px"
        @click="getMock"
      >
        left reload
      </j-button>
      <j-button
        v-else-if="direction === 'right'"
        size="small"
        style="float: right; margin: 5px"
        @click="getMock"
      >
        right reload
      </j-button>
    </template>
    <template #notFoundContent>
      <span>没数据</span>
    </template>
  </j-transfer>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
interface MockData {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}
export default defineComponent({
  setup() {
    const mockData = ref<MockData[]>([]);

    const targetKeys = ref<string[]>([]);
    onMounted(() => {
      getMock();
    });
    const getMock = () => {
      const keys = [];
      const mData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          keys.push(data.key);
        }
        mData.push(data);
      }
      mockData.value = mData;
      targetKeys.value = keys;
    };
    const handleChange = (keys: string[], direction: string, moveKeys: string[]) => {
      console.log(keys, direction, moveKeys);
    };
    return {
      mockData,
      targetKeys,
      handleChange,
      getMock,
    };
  },
});
</script>
