<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Button from './Button.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const githubStore = useGitHubStore()

</script>

<template>
  <aside class="flex flex-col py-10 px-6 lg:max-w-[400px] w-full">
    <div class="flex flex-col w-full">
      <div class="flex flex-col justify-start items-center mb-4 sm:flex-row lg:flex-col">
        <div class="sm:mr-4">
          <img :src="githubStore.user.avatar_url" alt=""
          class="max-w-[250px] w-full mx-auto border-2 border-zinc-600 rounded-full" />
        </div>

        <div class="flex flex-col w-full">
          <h2 class="mt-4 text-zinc-100 text-2xl font-semibold leading-tight">
            {{ githubStore.user.name }}
          </h2>
          <strong class="block mb-4 text-zinc-400 text-xl font-light leading-[1.2]">
            {{ githubStore.user.login }}
          </strong>


          <p class="mb-4 text-zinc-100 text-base font-light leading-[1.2]">
            {{ githubStore.user.bio }}
          </p>

          <div class="flex-wrap mb-4 flex items-center gap-2 text-zinc-400 text-sm font-light">
            <Icon icon="octicon:people-16" class="text-zinc-400" />
            <p>
              <span class="text-zinc-200 font-bold">
                {{ githubStore.user.followers }}
              </span>
              seguidores
            </p>

            <p>·</p>

            <p>
              <span class="text-zinc-200 font-bold">
                {{ githubStore.user.following }}
              </span>
              seguindo
            </p>
          </div>
        </div>
      </div>
      <Button variant="gray" as="a" :href="githubStore.user.html_url" target="_blank">
        <Icon icon="octicon:mark-github-16" />
        Perfil no GitHub
      </Button>
    </div>
  </aside>
</template>