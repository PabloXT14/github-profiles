<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Button from './Button.vue';

</script>

<template>
  <aside class="flex flex-col py-10 px-6 max-w-[400px] w-full">
    <div class="flex flex-col gap-4 w-full">
      <img src="https://github.com/PabloXT14.png" alt="" class="max-w-[250px] w-full mx-auto border-2 border-zinc-600 rounded-full" />

      <div>
        <h2 class="text-zinc-100 text-2xl font-semibold leading-tight">
          Pablo Alan de Freitas Cardoso
        </h2>
        <strong class="text-zinc-400 text-xl font-light leading-[1.2]">
          @PabloXT14
        </strong>
      </div>

      <p class="text-zinc-100 text-base font-light leading-[1.2]">
        Front-End Developer | ReactJS | NodeJS | React Native
      </p>

      <div class="flex items-center gap-2 text-zinc-400 text-sm font-light">
        <Icon icon="octicon:people-16" class="text-zinc-400" />
        <p>
          <span class="text-zinc-200 font-bold">29</span>
          seguidores
        </p>

        <p>·</p>

        <p>
          <span class="text-zinc-200 font-bold">30</span>
          seguindo
        </p>
      </div>

      <Button
        variant="gray"
        as="a"
        href="https://github.com/PabloXT14"
        target="_blank"
      >
        <Icon icon="octicon:mark-github-16" />
        Perfil no GitHub
      </Button>
    </div>
  </aside>
</template>