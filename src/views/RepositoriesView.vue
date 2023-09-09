<script setup lang="ts">
import Header from '@/components/Header.vue';
import ProfileSection from '@/components/ProfileSection.vue';
import Divider from '@/components/Divider.vue';
import RepositoriesSection from '@/components/RepositoriesSection.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <section class="flex flex-col lg:flex-row">
      <ProfileSection />
      <Divider />
      <RepositoriesSection />
    </section>
  </div>
</template>
