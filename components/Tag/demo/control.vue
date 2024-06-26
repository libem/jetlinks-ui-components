<docs>
---
order: 5
title:
  zh-CN: 动态添加和删除
  en-US: Add & Remove Dynamically
---

## zh-CN

用数组生成一组标签，可以动态添加和删除。

## en-US

Generating a set of Tags by array, you can add and remove dynamically.

</docs>

<template>
  <template v-for="(tag, index) in tags" :key="tag">
    <j-tooltip v-if="tag.length > 20" :title="tag">
      <j-tag :closable="index !== 0" @close="handleClose(tag)">
        {{ `${tag.slice(0, 20)}...` }}
      </j-tag>
    </j-tooltip>
    <j-tag v-else :closable="index !== 0" @close="handleClose(tag)">
      {{ tag }}
    </j-tag>
  </template>
  <j-input
    v-if="inputVisible"
    ref="inputRef"
    v-model:value="inputValue"
    type="text"
    size="small"
    :style="{ width: '78px' }"
    @blur="handleInputConfirm"
    @keyup.enter="handleInputConfirm"
  />
  <j-tag v-else style="background: #fff; border-style: dashed" @click="showInput">
    <plus-outlined />
    New Tag
  </j-tag>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const inputRef = ref();
    const state = reactive({
      tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: '',
    });

    const handleClose = (removedTag: string) => {
      const tags = state.tags.filter(tag => tag !== removedTag);
      console.log(tags);
      state.tags = tags;
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    const handleInputConfirm = () => {
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    };
    return {
      ...toRefs(state),
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef,
    };
  },
});
</script>
