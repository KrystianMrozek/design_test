<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue'
import TopBar from '@/components/layout/TopBar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <TopBar />
    <main class="flex-1 grid place-items-center p-2 overflow-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
