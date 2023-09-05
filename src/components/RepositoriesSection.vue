<script setup lang="ts">
import Menu from './Menu.vue';
import RepositoriesList from './RepositoriesList.vue';
import Search from './Search.vue';

</script>

<template>
  <main class="flex gap-9 flex-col py-10 px-6 flex-1">
    <Menu />
    <Search />
    <RepositoriesList />
  </main>
</template>