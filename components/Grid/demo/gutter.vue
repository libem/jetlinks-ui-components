<docs>
---
order: 1
title: 区块间隔
---

## zh-CN

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。

> 数组形式垂直间距在 `1.5.0` 之后支持。

</docs>

<template>
  <div class="gutter-example">
    <j-row :gutter="16">
      <j-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </j-col>
      <j-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </j-col>
      <j-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </j-col>
      <j-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </j-col>
    </j-row>
  </div>
</template>
<style scoped>
.gutter-example :deep(.ant-row > div) {
  background: transparent;
  border: 0;
}
.gutter-box {
  background: #00a0e9;
  padding: 5px 0;
}
</style>
```
