<script lang="ts" setup>
import { definePageMeta } from '#imports'
import ClientList from '@blocks/Client/ClientList.vue'

definePageMeta({
  title: 'Klientki',
})
</script>

<template>
  <div data-id="page-clients" class="flex flex-col items-center w-full">
    <ClientList />
  </div>
</template>
