<script setup lang="ts">
import { onMounted } from 'vue'

import Card from '@components/Card.vue'
import Icon from '@components/Icon.vue'
import useClients from '@composables/clients'
import { DYNAMIC_NAVIGATION } from '@config'
import { getName } from '@core/client'

const { addSampleClient, clients } = useClients()

onMounted(async () => {
  await addSampleClient()
})
</script>

<template>
  <ol v-if="clients" class="flex flex-col items-center w-full gap-2">
    <li
      v-for="client in clients"
      :key="client.id"
      class="flex flex-col w-full"
      data-class="client"
      :data-uid="client.id"
    >
      <NuxtLink :to="DYNAMIC_NAVIGATION.client(client.id)">
        <Card>
          <Icon
            :name="client.isCompany ? 'company' : 'person'"
            class="m-2 text-gray-500"
            data-class="client-type"
          />
          <p data-class="client-name">{{ getName(client) }}</p>
        </Card>
      </NuxtLink>
    </li>
  </ol>
</template>
