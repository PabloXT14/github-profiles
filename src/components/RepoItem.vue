<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Tag from './Tag.vue';
import { Icon } from '@iconify/vue'

</script>

<template>
  <li
    class="flex flex-col gap-3 py-5 border-b border-b-zinc-500 first:border-t first:border-t-zinc-500"
  >
    <a
      href="#"
      class="text-blue-600 text-xl font-semibold leading-normal hover:underline focus:underline"
    >
      Repo Title
    </a>

    <p class="text-zinc-300 text-sm leading-normal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, eius tenetur! Laboriosam repellat qui adipisci magnam architecto quae odit quos corrupti et modi cum laborum est, quas veritatis molestias facere.
    </p>

    <div class="flex gap-[2px]">
      <Tag variant="blue">
        react
      </Tag>
      <Tag variant="blue">
        node
      </Tag>
      <Tag variant="blue">
        react-native
      </Tag>
    </div>

    <div class="flex gap-4">
      <div class="flex items-center gap-[2px] text-zinc-300">
        <Icon icon="octicon:zap-16" />
        <span class="text-xs">TypeScript</span>
      </div>

      <div class="flex items-center gap-[2px] text-zinc-300">
        <Icon icon="octicon:repo-forked-16" />
        <span class="text-xs">1</span>
      </div>

      <div class="flex items-center gap-[2px] text-zinc-300">
        <Icon icon="octicon:law-16" />
        <span class="text-xs">MIT License</span>
      </div>
    </div>
  </li>
</template>