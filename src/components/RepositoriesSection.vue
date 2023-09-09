<script setup lang="ts">
import Menu from './Menu.vue';
import RepositoriesList from './RepositoriesList.vue';
import Search from './Search.vue';
</script>

<template>
  <main class="flex flex-1 flex-col gap-9 px-6 py-10">
    <Menu />
    <Search />
    <RepositoriesList />
  </main>
</template>
