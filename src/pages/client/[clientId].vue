<script setup lang="ts">
import { showError, useRoute } from '#imports'
import useClient from '@composables/clients'

const route = useRoute()
const clientId = Array.isArray(route.params.clientId)
  ? route.params.clientId[0]
  : route.params.clientId
const { findClientById } = useClient()
const client = findClientById(clientId)

if (client === null) {
  showError('Nie znaleziono klientki')
}
</script>
<template>
  <div
    v-if="client"
    data-id="page-client"
    class="flex flex-col items-center w-full"
  >
    <p v-if="client.firstName">
      <span>Imię:</span>
      <span data-class="client-first-name">{{ client.firstName }}</span>
    </p>
    <p v-if="client.lastName">
      <span>Nazwisko:</span>
      <span data-class="client-last-name">
        {{ client.lastName }}
      </span>
    </p>
    <p v-if="client.companyName">
      <span>Nazwa:</span>
      <span data-class="client-company-name">{{ client.companyName }}</span>
    </p>
    <p v-if="client.description">
      <span>Opis:</span>
      <span data-class="client-description">{{ client.description }}</span>
    </p>
    <p v-if="client.contact.email">
      <span>Email:</span>
      <span data-class="client-email">{{ client.contact.email }}</span>
    </p>
    <p v-if="client.contact.facebook">
      <span>Facebook: </span>
      <span data-class="client-facebook">{{ client.contact.facebook }}</span>
    </p>
    <p v-if="client.contact.instagram">
      <span>Instagram:</span>
      <span data-class="client-instagram">{{ client.contact.instagram }}</span>
    </p>
    <p v-if="client.contact.phone">
      <span>Tel:</span
      ><span data-class="client-phone">{{ client.contact.phone }}</span>
    </p>
  </div>
</template>
