<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useGitHubStore } from '@/stores/GitHubStore';
import RepoItem from './RepoItem.vue';

const githubStore = useGitHubStore();
</script>

<template>
  <ul class="flex flex-1 flex-col overflow-y-auto">
    <RepoItem
      v-for="repo in githubStore.filteredRepositories"
      :key="repo.id"
      :repo="repo"
    />
  </ul>
</template>
