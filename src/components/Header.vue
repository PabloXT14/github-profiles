<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

import Button from './Button.vue';

function handleClearUserData() {
  console.log('handleClearUserData')
}

</script>

<template>
  <header class="flex items-center justify-between px-8 h-20 bg-zinc-950">
    <div class="flex items-center gap-3">
      <img src="../assets/github-logo.svg" alt="" class="w-11">
      <h1 class="text-3xl text-zinc-100 font-bold leading-none">
        GitHub Profiles
      </h1>
    </div>

    <Button @click="handleClearUserData">
      <Icon icon="octicon:search-16" />
      Nova busca
    </Button>
  </header>
</template>
