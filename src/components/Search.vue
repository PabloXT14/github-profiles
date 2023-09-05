<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Button from './Button.vue';
import Input from './Input.vue';

</script>

<template>
  <div class="flex gap-6">
    <Input type="text" placeholder="Nome do repositório..." class="w-full"/>
    <Button class="flex-1">
      Pesquisar
    </Button>
  </div>
</template>