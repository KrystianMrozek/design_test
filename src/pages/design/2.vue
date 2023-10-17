<script setup lang="ts">
import { definePageMeta } from '#imports';
import Card from '@components/Card.vue';
import Icon from '@components/Icon.vue'
import { NAVIGATION } from '@config'

definePageMeta({ layout: false })
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <header class="h-16 w-full bg-stone-100 font-bold text-center flex justify-center items-center p-2" data-id="top-bar">
      Dashboard
    </header>
    <main class="flex-1 grid place-items-center px-4 overflow-auto">
      <section class="w-full">
        <h2 class="pb-3">Najbliższa wizyta</h2>
        <Card>
          <div class="w-24">
            <img src="/client.jpeg" alt="sample client">
          </div>
          <div class="self-start px-2">
            <div class="flex justify-center gap-3">
              <p>4 Paź 2023</p>
              <p>14:00 - 15:00</p>
            </div>
            <p class="pt-6">1x Makijaż ślubny</p>
          </div>
        </Card>
      </section>
      <section class="w-full">
        <h2 class="pb-3">Nowa klientka</h2>
        <Card>
          <div class="flex flex-col">
            <h3>Helena Iwo</h3>
            <p>od 24 Mar 2021</p>
          </div>
        </Card>
      </section>
      <section class="w-full">
        <h2 class="pb-3">Podsumowanie miesiąca</h2>
        <div class="flex justify-evenly">
          <h3>Przychód: <span>1500zł</span></h3>
          <h3>Planowany: <span>8000zł</span></h3>
        </div>
      </section>
    </main>
    <footer class="w-full">
      <section data-id="layout-action-bar"
        class="flex justify-evenly items-center h-14 font-semibold bg-stone-100 px-2 py-1">
        <button data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800">
          <Icon name="back" size="lg" />
          <span class="text-xs">Wstecz</span>
        </button>
        <button data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800">
          <span class="text-xs">Dodaj wizytę</span>
        </button>
        <button data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800">
          <span class="text-xs">Dodaj klientkę</span>
        </button>
      </section>
      <nav class="grid grid-cols-5 h-16 font-semibold bg-stone-200 p-2" data-id="navigation">
        <button v-for="{ name, path, icon } in NAVIGATION" :key="name" size="lg" color="gray" variant="ghost" :to="path"
          data-class="nav-link"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800">
          <Icon v-if="icon" :name="icon" size="lg" />
          <span class="text-xs">{{ name }}</span>
        </button>
      </nav>
    </footer>
  </div>
</template>
