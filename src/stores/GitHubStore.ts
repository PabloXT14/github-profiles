import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { api } from '@/libs/axios';

export interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  forks: number;
  license: {
    name: string;
  };
  stargazers_count: number;
}

export const useGitHubStore = defineStore('github', () => {
  // states
  const username = ref('')

  const totalRepositories = ref(0)

  const totalStarredRepositories = ref(0)

  const user = ref<User>({} as User)

  const repositories = ref<Repository[]>([])

  const searchFilter = ref('')

  const filteredRepositories = computed(() => {
    return repositories.value.filter((repository) => {
      return repository.name.toLowerCase().includes(searchFilter.value.toLowerCase())
    })
  })

  // actions
  async function getTotals() {
    totalRepositories.value = await api.get(`https://api.github.com/users/${username.value}/repos`).then(res => res.data.length)
    totalStarredRepositories.value = await api.get(`https://api.github.com/users/${username.value}/starred`).then(res => res.data.length)
  }

  function clearAllData() {
    username.value = ''
    user.value = {} as User 
    repositories.value = []
  }

  async function fetchUser() {
    const response = await api.get(`https://api.github.com/users/${username.value}`)

    user.value = response.data
  }

  async function fetchRepositories() {
    if (!username.value) {
      return
    }

    searchFilter.value = ''

    const response = await api.get(`https://api.github.com/users/${username.value}/repos`)

    repositories.value = response.data
  }

  async function fetchStarredRepositories() {
    if (!username.value) {
      return
    }

    searchFilter.value = ''

    const response = await api.get(`https://api.github.com/users/${username.value}/starred`)

    repositories.value = response.data
  }

  return {
    username,
    totalRepositories,
    totalStarredRepositories,
    user,
    repositories,
    searchFilter,
    filteredRepositories,
    getTotals,
    clearAllData, 
    fetchUser,
    fetchRepositories,
    fetchStarredRepositories,
  }
})
