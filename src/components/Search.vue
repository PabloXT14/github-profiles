<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Button from './Button.vue';
import Input from './Input.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const githubStore = useGitHubStore();

</script>

<template>
  <div class="flex flex-col gap-2 w-full md:gap-6 md:flex-row">
    <Input type="text" placeholder="Nome do repositório..." class="w-full" v-model="githubStore.searchFilter"/>
    <Button class="md:flex-1">
      Pesquisar
    </Button>
  </div>
</template>