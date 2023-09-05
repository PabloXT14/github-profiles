<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue';
import { tv } from 'tailwind-variants'

interface InputProps {
  modelValue?: string
  class?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
})

defineEmits(['update:modelValue'])

const inputClass = computed(() => {
  return tv({
    base: [
      "rounded-md px-4 h-10 text-base font-normal bg-transparent border border-zinc-700 outline-none placeholder:text-zinc-500",
      "transition-all duration-150 ease-in-out",
      "focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    ],    
    variants: {},
    defaultVariants: {}
  })({
    class: props.class
  })
})

</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="inputClass"
    v-bind="$attrs"
  />
</template>