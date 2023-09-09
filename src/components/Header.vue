<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

import Button from './Button.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const githubStore = useGitHubStore();

const router = useRouter();

async function handleClearUserData() {
  await githubStore.clearAllData();
  await router.push('/');
}
</script>

<template>
  <header class="flex h-20 items-center justify-between bg-zinc-950 px-8">
    <div class="flex items-center gap-3">
      <img
        src="../assets/github-logo.svg"
        alt=""
        class="w-11"
      >
      <h1 class="text-xl font-bold leading-none text-zinc-100 md:text-3xl">
        GitHub Profiles
      </h1>
    </div>

    <Button @click="handleClearUserData">
      <Icon icon="octicon:arrow-left-16" />
      <span class="hidden md:inline"> Nova busca </span>
    </Button>
  </header>
</template>
