<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Button from './Button.vue';
import { useGitHubStore } from '@/stores/GitHubStore';

const githubStore = useGitHubStore();
</script>

<template>
  <aside class="flex w-full flex-col px-6 py-10 lg:max-w-[400px]">
    <div class="flex w-full flex-col">
      <div
        class="mb-4 flex flex-col items-center justify-start sm:flex-row lg:flex-col"
      >
        <div class="sm:mr-4">
          <img
            :src="githubStore.user.avatar_url"
            alt=""
            class="mx-auto w-full max-w-[250px] rounded-full border-2 border-zinc-600"
          >
        </div>

        <div class="flex w-full flex-col">
          <h2 class="mt-4 text-2xl font-semibold leading-tight text-zinc-100">
            {{ githubStore.user.name }}
          </h2>
          <strong
            class="mb-4 block text-xl font-light leading-[1.2] text-zinc-400"
          >
            {{ githubStore.user.login }}
          </strong>

          <p class="mb-4 text-base font-light leading-[1.2] text-zinc-100">
            {{ githubStore.user.bio }}
          </p>

          <div
            class="mb-4 flex flex-wrap items-center gap-2 text-sm font-light text-zinc-400"
          >
            <Icon
              icon="octicon:people-16"
              class="text-zinc-400"
            />
            <p>
              <span class="font-bold text-zinc-200">
                {{ githubStore.user.followers }}
              </span>
              seguidores
            </p>

            <p>·</p>

            <p>
              <span class="font-bold text-zinc-200">
                {{ githubStore.user.following }}
              </span>
              seguindo
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="gray"
        as="a"
        :href="githubStore.user.html_url"
        target="_blank"
      >
        <Icon icon="octicon:mark-github-16" />
        Perfil no GitHub
      </Button>
    </div>
  </aside>
</template>
