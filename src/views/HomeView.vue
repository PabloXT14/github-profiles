<script setup lang="ts">
import { useRouter } from 'vue-router'

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const router = useRouter();

const githubStore = useGitHubStore()

async function handleFetchUserData(event: Event) {
  event.preventDefault();
  try {
    await githubStore.fetchUser();
    await githubStore.fetchRepositories()
    await router.push('/repositories')
  } catch (error) {
    console.log(error);
    alert('Erro ao buscar usuario')
  }
  
}

</script>

<template>
  <main class="flex items-center justify-center min-h-screen p-4 sm:px-20">
    <div class="flex justify-center items-center gap-[130px] mx-auto">
      <section class="flex-1 flex flex-col items-center gap-14 max-w-[436px] w-full">
        <img src="../assets/github-logo.svg" alt="" />

        <h1 class="text-[4rem] font-bold text-center leading-none">
          GitHub <br/> Profiles
        </h1>

        <p class="text-zinc-300 text-base leading-tight text-center sm:text-left">
          Exiba seu perfil do GitHub em detalhes! Digite seu username abaixo para começar
        </p>

        <form
          @submit="handleFetchUserData"
          class="w-full flex flex-col gap-8"
        >
          <Input type="text" class="w-full" placeholder="Username" v-model="githubStore.username" />
          <Button type="submit" class="w-full">
            Buscar
          </Button>
        </form>
      </section>
      <section class="hidden lg:flex flex-1 items-center justify-center  max-w-[600] w-full">
        <img src="../assets/github-pet.png" alt="" class="w-full">
      </section>
    </div>
  </main>
</template>
