<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

import Tag from './Tag.vue';
import { useGitHubStore } from '@/stores/GitHubStore';
import { onMounted } from 'vue';

const router = useRouter();

const currentRoute = router.currentRoute.value.name

const githubStore = useGitHubStore();

async function handleSwitchRoute() {
  if (currentRoute === 'starred') {
    await githubStore.fetchRepositories()
    await router.push('/repositories')
  }

  if (currentRoute === 'repositories') {
    await githubStore.fetchStarredRepositories()
    await router.push('/starred')
  }
}

onMounted(async () => {
  await githubStore.getTotals()
})

</script>

<template>
  <nav class="flex w-full border-b border-b-zinc-500 h-12">
    <button
      @click="handleSwitchRoute()"
      class="flex items-center px-4 gap-2 h-full border-b-4"
      :class="[currentRoute === 'repositories' ? 'border-b-red-400' : 'border-b-transparent']"
    >
      <span class="text-zinc-200 text-xs font-bold sm:text-base md:text-xl">
        Repositórios
      </span>
      <Tag variant="gray">
        {{ githubStore.totalRepositories }}
      </Tag>
    </button>

    <button
      @click="handleSwitchRoute()"
      class="flex items-center px-4 gap-2 h-full border-b-4"
      :class="[currentRoute === 'starred' ? 'border-b-red-400' : 'border-b-transparent']"
    >
      <span class="text-zinc-200 text-xs font-bold sm:text-base md:text-xl">
        Starred
      </span>
      <Tag variant="gray">
        {{ githubStore.totalStarredRepositories }}
      </Tag>
    </button>
  </nav>
</template>