<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Repository } from '@/stores/GitHubStore';
import Tag from './Tag.vue';
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router';

interface RepoItemProps {
  repo: Repository
}

const props = defineProps<RepoItemProps>()

const router = useRouter()

const currentRoute = router.currentRoute.value.name

</script>

<template>
  <li
    class="flex flex-col flex-1 items-start gap-3 py-5 border-b border-b-zinc-500 first:border-t first:border-t-zinc-500"
  >
    <a
      :href="props.repo.html_url"
      class="text-blue-600 text-xl font-semibold leading-normal hover:underline focus:underline"
      target="_blank"
    >
      {{ props.repo.name }}
    </a>

    <p class="text-zinc-300 text-sm leading-normal">
      {{ props.repo.description }}
    </p>

    <div class="flex gap-x-[2px] gap-y-2 flex-wrap">
      <Tag
        v-for="tag in props.repo.topics"
        :key="props.repo.id+tag.toString()"
        variant="blue"
      >
        {{ tag }}
      </Tag>
    </div>

    <div class="flex gap-4">
      <div
        v-if="currentRoute === 'repositories'"
        class="flex items-center gap-[2px] text-zinc-300"
      >
        <Icon icon="octicon:zap-16" />
        <span class="text-xs">{{ props.repo.language }}</span>
      </div>

      <div
        v-if="currentRoute === 'starred'"
        class="flex items-center gap-[2px] text-zinc-300"
      >
        <Icon icon="octicon:zap-16" />
        <span class="text-xs">{{ props.repo.stargazers_count }}</span>
      </div>

      <div class="flex items-center gap-[2px] text-zinc-300">
        <Icon icon="octicon:repo-forked-16" />
        <span class="text-xs">{{ props.repo.forks }}</span>
      </div>

      <div class="flex items-center gap-[2px] text-zinc-300">
        <Icon icon="octicon:law-16" />
        <span class="text-xs">
          {{ props.repo.license ? props.repo.license.name : 'Sem Licença' }}
        </span>
      </div>
    </div>
  </li>
</template>