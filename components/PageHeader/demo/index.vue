<template>
  <demo-sort :cols="1">
    <basic />
    <breadcrumb />
    <actions />
    <context />
    <responsive />
    <ghost />
  </demo-sort>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Basic from './basic.vue';
import Breadcrumb from './breadcrumb.vue';
import Actions from './actions.vue';
import Context from './content.vue';
import Responsive from './responsive.vue';
import Ghost from './ghost.vue';

import CN from '../index.md';

export default defineComponent({
  CN,
  components: {
    Basic,
    Breadcrumb,
    Actions,
    Context,
    Responsive,
    Ghost,
  },
});
</script>
