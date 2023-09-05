<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';

const input = ref('');

console.log(input.value)

</script>

<template>
  <main>
    <h1>This is an home page</h1>
    <Button
      as="button"
      class="m-4"
    >
      <Icon icon="octicon:mark-github-16" />
      <span>
        Button
      </span>
    </Button>
    <Button
      as="button"
      variant="gray"
      class="m-4"
    >
      <Icon icon="octicon:mark-github-16" />
      <span>
        Button
      </span>
    </Button>

    <Input type="text" class="m-4" placeholder="Username" v-model="input" />

    <span>
      {{ input }}
    </span>
  </main>
</template>
