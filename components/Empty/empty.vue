<template>
    <Empty v-bind="baseProps">
        <template v-for="item in renderArr" :key="item" #[item]="scope">
            <slot :name="item" :scope="scope"></slot>
        </template>
    </Empty>
</template>

<script lang="ts" setup name="JEmpty">
import { Empty } from 'ant-design-vue';
import { useSlots } from 'vue';
import NoData from './image';
import { omit } from 'lodash-es';
import type { PropType, CSSProperties } from 'vue';
const slots = useSlots();
const renderArr = Object.keys(slots);
console.log(renderArr);

const props = defineProps({
    description: {
        type: String,
        default: '暂无数据',
    },
    image: {
        type: String,
        default: NoData,
    },
    imageStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => {
            return { height: '60px' };
        },
    },
});

const baseProps = omit(props, ...renderArr);
</script>
