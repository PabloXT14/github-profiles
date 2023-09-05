<script setup lang="ts">
import Header from '@/components/Header.vue';
import ProfileSection from '@/components/ProfileSection.vue';
import Divider from '@/components/Divider.vue';
import RepositoriesSection from '@/components/RepositoriesSection.vue';

</script>

<template>
  <div class="flex flex-col">
    <Header />
    <section class="flex-1 flex">
      <ProfileSection />
      <Divider />
      <RepositoriesSection />
    </section>
  </div>
</template>
