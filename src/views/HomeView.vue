<script setup lang="ts">
import { useRouter } from 'vue-router';

import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const router = useRouter();

const githubStore = useGitHubStore();

async function handleFetchUserData(event: Event) {
  event.preventDefault();
  try {
    await githubStore.fetchUser();
    await githubStore.fetchRepositories();
    await router.push('/repositories');
  } catch (error) {
    console.log(error);
    alert('Erro ao buscar usuario');
  }
}
</script>

<template>
  <main class="flex min-h-screen items-center justify-center p-4 sm:px-20">
    <div class="mx-auto flex items-center justify-center gap-[130px]">
      <section
        class="flex w-full max-w-[436px] flex-1 flex-col items-center gap-14"
      >
        <img
          src="../assets/github-logo.svg"
          alt=""
        >

        <h1 class="text-center text-[4rem] font-bold leading-none">
          GitHub <br>
          Profiles
        </h1>

        <p
          class="text-center text-base leading-tight text-zinc-300 sm:text-left"
        >
          Exiba seu perfil do GitHub em detalhes! Digite seu username abaixo
          para começar
        </p>

        <form
          @submit="handleFetchUserData"
          class="flex w-full flex-col gap-8"
        >
          <Input
            type="text"
            class="w-full"
            placeholder="Username"
            v-model="githubStore.username"
          />
          <Button
            type="submit"
            class="w-full"
          >
            Buscar
          </Button>
        </form>
      </section>
      <section
        class="hidden w-full max-w-[600] flex-1 items-center justify-center lg:flex"
      >
        <img
          src="../assets/github-pet.png"
          alt=""
          class="w-full"
        >
      </section>
    </div>
  </main>
</template>
