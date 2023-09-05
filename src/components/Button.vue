<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue';
import { tv } from 'tailwind-variants'

interface ButtonProps {
  as?: string | Object,
  variant?: 'green' | 'gray',
  class?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  variant: 'green',
})

const buttonClass = computed(() => {
  return tv({
    base: "rounded-md px-4 h-10 flex items-center justify-center gap-2 text-base font-bold transition-all duration-150 ease-in-out",
    variants: {
      variant: {
        green: [
          "bg-green-600 text-white border border-green-600",
          "focus:bg-green-500 focus:border-green-500",
          "hover:bg-green-500 hover:border-green-500",
        ],
        gray: [
          "bg-zinc-800 border-zinc-700 text-zinc-300 border",
          "focus:bg-zinc-700 focus:border-zinc-500 focus:text-zinc-200",
          "hover:bg-zinc-700 hover:border-zinc-500 hover:text-zinc-200",
        ]
      }
    },
    defaultVariants: {
      variant: "green"
    }
  })({
    variant: props.variant,
    class: props.class
  })
})

</script>

<template>
  <component
    :is="props.as"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>