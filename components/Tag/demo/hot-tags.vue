<docs>
---
order: 5
title:
  zh-CN: 热门标签
  en-US: Hot Tags
---

## zh-CN

选择你感兴趣的话题。

## en-US

Select your favourite topics.

</docs>

<template>
  <span :style="{ marginRight: '8px' }">Categories:</span>
  <template v-for="tag in tags" :key="tag">
    <j-checkable-tag
      :checked="selectedTags.indexOf(tag) > -1"
      @change="checked => handleChange(tag, checked)"
    >
      {{ tag }}
    </j-checkable-tag>
  </template>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: [] as string[],
    });

    const handleChange = (tag: string, checked: boolean) => {
      const { selectedTags } = state;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      state.selectedTags = nextSelectedTags;
    };

    return {
      ...toRefs(state),
      handleChange,
    };
  },
});
</script>
