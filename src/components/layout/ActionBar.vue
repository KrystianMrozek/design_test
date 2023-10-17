<script setup lang="ts">
import { useRouter } from '#imports'
import Icon from '@components/Icon.vue'

const router = useRouter()

const goBack = () => {
  if (router.options.history.state.back) {
    router.back()
  } else {
    // TODO: notify user that there is no history once toast is implemented
  }
}
</script>

<template>
  <section
    data-id="layout-action-bar"
    class="flex items-center h-14 font-semibold bg-stone-100 px-2 py-1"
  >
    <button
      data-id="button-back"
      class="flex flex-col justify-center items-center hover:bg-gray-100 font-semibold px-2 gap-1 h-12 text-gray-800"
      @click="goBack"
    >
      <Icon name="back" size="lg" />
      <span class="text-xs">Wstecz</span>
    </button>
  </section>
</template>
