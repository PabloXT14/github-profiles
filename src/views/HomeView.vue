<script setup lang="ts">
import { Icon } from '@iconify/vue'

import Button from '@/components/Button.vue';

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
  </main>
</template>
