<docs>
---
order: 19
title: 固定列
---

## zh-CN

对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。

> 若列头与内容不对齐或出现列重复，请指定**固定列**的宽度 `width`。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。
>
> 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`。

</docs>

<template>
    <j-table
        :columns="columns"
        :data-source="data"
        :scroll="{ x: 1300, y: 1000 }"
    >
        <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
                <a>action</a>
            </template>
        </template>
    </j-table>
</template>
<script lang="ts">
import type { TableColumnsType } from 'ant-design-vue';
import { defineComponent } from 'vue';

const columns: TableColumnsType = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', dataIndex: 'address', key: '1' },
    { title: 'Column 2', dataIndex: 'address', key: '2' },
    { title: 'Column 3', dataIndex: 'address', key: '3' },
    { title: 'Column 4', dataIndex: 'address', key: '4' },
    { title: 'Column 5', dataIndex: 'address', key: '5' },
    { title: 'Column 6', dataIndex: 'address', key: '6' },
    { title: 'Column 7', dataIndex: 'address', key: '7' },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
    },
];

interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
}

const data: DataItem[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
    },
];

export default defineComponent({
    data() {
        return {
            data,
            columns,
        };
    },
});
</script>
