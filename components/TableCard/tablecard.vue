<template>
    <div class="costom-table-card" :style="style">
        <div class="table-card-title">
            <span>{{ name }}</span>
        </div>
        <div
            class="table-card-status"
            :style="{ backgroundColor: getRgb(status?.color, 0.3) }"
        >
            <Badge :color="status?.color" :text="status?.text" />
        </div>
        <div class="table-card-content">
            <slot name="content"></slot>
        </div>
        <div class="table-card-btns">
            <div
                v-for="item in actions"
                :key="item.name"
                class="card-btn"
                @click="handleClick(item)"
            >
                <Button type="link" :disabled="item.disabled">
                    {{ item.name }}
                    <template #icon>
                        <JLAIcon :type="item.icon"></JLAIcon>
                    </template>
                </Button>
            </div>
            <div v-if="moreActions?.length" class="card-btn-more">
                <Popover
                    v-model:visible="visible"
                    trigger="click"
                    placement="bottomRight"
                    overlay-class-name="card-popover"
                >
                    <Button type="link">...</Button>
                    <template #content>
                        <div
                            v-for="item in moreActions"
                            :key="item.name"
                            class="card-popover-item"
                            @click="handleClick(item)"
                        >
                            <JLAIcon :type="item.icon"></JLAIcon>
                            <span>{{ item.name }}</span>
                        </div>
                    </template>
                </Popover>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import './style/index.less';
import { Badge, Button, Popover } from 'ant-design-vue';
import { ref } from 'vue';
import type { PropType } from 'vue';
import type { ActionType } from './tablecardType';
import JLAIcon from '../AIcon';
const getRgb = (str: string, opacity: number): string => {
    var arr = str.split('');
    var myred = arr[1] + arr[2];
    var mygreen = arr[3] + arr[4];
    var myblue = arr[5] + arr[6];
    return (
        'rgba(' +
        parseInt(myred, 16) +
        '' +
        parseInt(mygreen, 16) +
        ' , ' +
        parseInt(myblue, 16) +
        ' , ' +
        opacity +
        ')'
    );
};

const props = defineProps({
    /**
     * 卡片样式
     */
    style: {
        type: Object,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        default: () => {},
    },
    /**
     * 卡片数据，用于按钮操作传递数据
     */
    cardData: {
        type: Object,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        default: () => {},
    },
    /**
     * 卡片title名称
     */
    name: {
        type: String,
        default: '',
    },
    /**
     * 卡片状态
     */
    status: {
        type: Object,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        default: () => {},
    },
    /**
     * 卡片按钮
     */
    actions: {
        type: Array as PropType<ActionType[]>,
        default: () => [],
    },
    moreActions: {
        type: Array as PropType<ActionType[]>,
        default: () => [],
    },
});

const visible = ref(false);
const handleClick = (item: ActionType) => {
    visible.value = false;
    item.onClick(props.cardData);
};
</script>