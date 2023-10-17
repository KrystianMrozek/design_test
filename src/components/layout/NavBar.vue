<script setup lang="ts">
import NavLink from '@components/NavLink.vue'
import { NAVIGATION } from '@config'
</script>

<template>
  <nav
    class="flex justify-between items-center h-16 font-semibold bg-stone-200 p-2"
    data-id="navigation"
  >
    <NavLink
      v-for="item in NAVIGATION"
      :key="item.name"
      :to="item.path"
      data-class="nav-link"
      >{{ item.name }}</NavLink
    >
  </nav>
</template>
