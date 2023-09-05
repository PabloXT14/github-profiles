import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

interface User {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  forks: number;
  license: string;
}

export const useGitHubStore = defineStore('github', () => {
  // states
  const username = ref('')

  let user = reactive<User>({} as User)

  let repositories = reactive<Repository[]>([])

  // computed or getters

  // actions
  function clearAllData() {
    username.value = ''
    user = {} as User
    repositories = []
  }

  return { username, user, repositories }
})
