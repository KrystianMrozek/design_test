<script setup lang="ts">
import { ref } from '#imports'
import ActionBar from '@components/layout/ActionBar.vue'
import ConfirmationBar from '@components/layout/ConfirmationBar.vue'
import NavBar from '@components/layout/NavBar.vue'

// layout store will manage state of bars visibility
const isConfirmationBarVisible = ref(false)
</script>

<template>
  <footer class="w-full">
    <ConfirmationBar v-if="isConfirmationBarVisible" />
    <ActionBar />
    <NavBar />
  </footer>
</template>
