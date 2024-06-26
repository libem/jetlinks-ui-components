<docs>
---
order: 29
title: 总结栏
---

## zh-CN

通过 `summary` 设置总结栏。使用 `j-table-summary-cell` 同步 Column 的固定状态。你可以通过配置 `j-table-summary` 的 `fixed` 属性使其固定。

</docs>

<template>
    <j-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        bordered
    >
        <template #summary>
            <j-table-summary-row>
                <j-table-summary-cell>Total</j-table-summary-cell>
                <j-table-summary-cell>
                    <j-typography-text type="danger">{{
                        totals.totalBorrow
                    }}</j-typography-text>
                </j-table-summary-cell>
                <j-table-summary-cell>
                    <j-typography-text>{{
                        totals.totalRepayment
                    }}</j-typography-text>
                </j-table-summary-cell>
            </j-table-summary-row>
            <j-table-summary-row>
                <j-table-summary-cell>Balance</j-table-summary-cell>
                <j-table-summary-cell :col-span="2">
                    <j-typography-text type="danger">
                        {{ totals.totalBorrow - totals.totalRepayment }}
                    </j-typography-text>
                </j-table-summary-cell>
            </j-table-summary-row>
        </template>
    </j-table>
    <br />
    <j-table
        :columns="fixedColumns"
        :data-source="fixedData"
        :pagination="false"
        :scroll="{ x: 2000, y: 500 }"
        bordered
    >
        <template #summary>
            <j-table-summary fixed>
                <j-table-summary-row>
                    <j-table-summary-cell :index="0"
                        >Summary</j-table-summary-cell
                    >
                    <j-table-summary-cell :index="1"
                        >This is a summary content</j-table-summary-cell
                    >
                </j-table-summary-row>
            </j-table-summary>
        </template>
    </j-table>
</template>

<script lang="ts">
import type { TableColumnsType } from 'ant-design-vue';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const columns = ref<TableColumnsType>([
            {
                title: 'Name',
                dataIndex: 'name',
            },
            {
                title: 'Borrow',
                dataIndex: 'borrow',
            },
            {
                title: 'Repayment',
                dataIndex: 'repayment',
            },
        ]);

        const data = ref([
            {
                key: '1',
                name: 'John Brown',
                borrow: 10,
                repayment: 33,
            },
            {
                key: '2',
                name: 'Jim Green',
                borrow: 100,
                repayment: 0,
            },
            {
                key: '3',
                name: 'Joe Black',
                borrow: 10,
                repayment: 10,
            },
            {
                key: '4',
                name: 'Jim Red',
                borrow: 75,
                repayment: 45,
            },
        ]);

        const fixedColumns = ref<TableColumnsType>([
            {
                title: 'Name',
                dataIndex: 'name',
                fixed: true,
                width: 100,
            },
            {
                title: 'Description',
                dataIndex: 'description',
            },
        ]);

        const fixedData = ref<
            { key: number; name: string; description: string }[]
        >([]);
        for (let i = 0; i < 20; i += 1) {
            fixedData.value.push({
                key: i,
                name: ['Light', 'Bamboo', 'Little'][i % 3],
                description: 'Everything that has a beginning, has an end.',
            });
        }

        const totals = computed(() => {
            let totalBorrow = 0;
            let totalRepayment = 0;

            data.value.forEach(({ borrow, repayment }) => {
                totalBorrow += borrow;
                totalRepayment += repayment;
            });
            return { totalBorrow, totalRepayment };
        });
        return {
            data,
            columns,
            totals,
            fixedColumns,
            fixedData,
        };
    },
});
</script>

<style>
#components-table-demo-summary tfoot th,
#components-table-demo-summary tfoot td {
    background: #fafafa;
}
[data-theme='dark'] #components-table-demo-summary tfoot th,
[data-theme='dark'] #components-table-demo-summary tfoot td {
    background: #1d1d1d;
}
</style>
