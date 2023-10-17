<script setup lang="ts">
import { useRoute } from '#imports'
const route = useRoute()
</script>
<template>
  <header
    class="h-16 w-full bg-stone-100 font-bold text-center flex justify-center items-center p-2"
    data-id="top-bar"
  >
    {{ route.meta.title }}
  </header>
</template>
