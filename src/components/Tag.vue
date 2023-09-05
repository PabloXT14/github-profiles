<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue';
import { tv } from 'tailwind-variants'

interface TagProps {
  variant?: 'blue' | 'gray'
  class?: string
}

const props = withDefaults(defineProps<TagProps>(), {
  variant: 'blue',
})

const tagClass = computed(() => {
  return tv({
    base: "flex items-center h-6 px-3 w-max rounded-full text-xs font-bold",
    variants: {
      variant: {
        blue: [
          "text-blue-600 bg-blue-500/10",
          "focus:text-white focus:bg-blue-600",
          "hover:text-white hover:bg-blue-600",
        ],
        gray: [
          "text-zinc-300 bg-zinc-800",
          "focus:text-zinc-800 focus:bg-zinc-300",
          "hover:text-zinc-800 hover:bg-zinc-300",
        ],
      }
    },
    defaultVariants: {
      variant: "blue"
    }
  })({
    variant: props.variant,
    class: props.class,
  })
})

</script>

<template>
  <span :class="tagClass" v-bind="$attrs">
    <slot />
  </span>
</template>