<script setup lang="ts">
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js'
import { Line } from 'vue-chartjs'

import { definePageMeta, ref } from '#imports'
import Card from '@components/Card.vue'
import Icon from '@components/Icon.vue'
import { NAVIGATION } from '@config'

ChartJS.register(CategoryScale, Filler, LinearScale, PointElement, LineElement)

const data = ref({
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ],
  datasets: [
    {
      label: 'Przychód',
      data: [0, 300, 450, 450, 450, 450, 770, 1000, 1000, 1500],
      order: 2,
      borderColor: '#888888',
      pointStyle: false,
      pointBackgroundColor: '#888888',
      fill: 'origin',
      backgroundColor: '#CCCCCCCC',
      tension: 0.4,
    },
    {
      label: 'Zaplanowany',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        1500,
        1500,
        2100,
        2100,
        2900,
        3700,
        3700,
        3700,
        3700,
        4000,
        4000,
        4800,
        5400,
        5400,
        5400,
        6000,
        6000,
        6800,
        6800,
        7300,
        8000,
        8000,
      ],
      order: 3,
      borderColor: '#777777',
      pointStyle: false,
      pointBackgroundColor: '#777777',
      fill: 'origin',
      backgroundColor: '#AAAAAAAA',
      tension: 0.4,
    },
    {
      label: 'Minimalny',
      data: [
        3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000,
        3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000,
        3000, 3000, 3000, 3000, 3000, 3000, 3000,
      ],
      order: 4,
      borderColor: '#666666',
      borderWidth: 2,
      pointStyle: false,
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Cel',
      data: [
        6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500,
        6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500,
        6500, 6500, 6500, 6500, 6500, 6500, 6500,
      ],
      order: 5,
      borderColor: '#666666',
      borderWidth: 2,
      pointStyle: false,
      fill: false,
      tension: 0.4,
    },
  ],
})

const options = ref({
  animation: {
    delay: 1000,
  },
  responsive: true,
  transitions: {
    show: {
      animations: {
        x: {
          from: 0,
        },
      },
    },
    hide: {
      animations: {
        x: {
          to: 0,
        },
      },
    },
  },
})

definePageMeta({ layout: false })
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <header
      class="h-16 w-full bg-stone-100 font-bold text-center flex justify-center items-center p-2"
      data-id="top-bar"
    >
      Dashboard
    </header>
    <main class="flex-1 grid place-items-center px-4 overflow-auto">
      <section class="w-full">
        <h2 class="pb-3">Najbliższa wizyta</h2>
        <Card>
          <div class="w-24">
            <img src="/img/client.jpeg" alt="sample client" />
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
        <Line :data="data" :options="options" class="max-h-48" />
      </section>
    </main>
    <footer class="w-full">
      <section
        data-id="layout-action-bar"
        class="flex justify-evenly items-center h-14 font-semibold bg-stone-100 px-2 py-1"
      >
        <button
          data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800"
        >
          <Icon name="back" size="lg" />
          <span class="text-xs">Wstecz</span>
        </button>
        <button
          data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800"
        >
          <Icon name="plusCalendar" size="lg" />
          <span class="text-xs">Dodaj wizytę</span>
        </button>
        <button
          data-id="button-back"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800"
        >
          <Icon name="plusPerson" size="lg" />
          <span class="text-xs">Dodaj klientkę</span>
        </button>
      </section>
      <nav
        class="grid grid-cols-5 h-16 font-semibold bg-stone-200 p-2"
        data-id="navigation"
      >
        <button
          v-for="{ name, path, icon } in NAVIGATION"
          :key="name"
          size="lg"
          color="gray"
          variant="ghost"
          :to="path"
          data-class="nav-link"
          class="flex flex-col justify-end items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800"
        >
          <Icon v-if="icon" :name="icon" size="lg" />
          <span class="text-xs">{{ name }}</span>
        </button>
      </nav>
    </footer>
  </div>
</template>
