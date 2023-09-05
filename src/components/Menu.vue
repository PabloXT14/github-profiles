<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

import Tag from './Tag.vue';
import { ref } from 'vue';

const activeTab = ref<'repositories' | 'starred'>('repositories');

</script>

<template>
  <nav class="flex w-full border-b border-b-zinc-500 h-12">
    <RouterLink
      to="/repositories"
      class="flex items-center px-4 gap-2 h-full border-b-4"
      :class="[activeTab === 'repositories' ? 'border-b-red-400' : 'border-b-transparent']"
    >
      <span class="text-zinc-200 text-xl font-bold">
        Repositórios
      </span>
      <Tag variant="gray">30</Tag>
    </RouterLink>
    <RouterLink
      to="/starred"
      class="flex items-center px-4 gap-2 h-full border-b-4"
      :class="[activeTab === 'starred' ? 'border-b-red-400' : 'border-b-transparent']"
    >
      <span class="text-zinc-200 text-xl font-bold">
        Starred
      </span>
      <Tag variant="gray">30</Tag>
    </RouterLink>
  </nav>
</template>