<template>
  <section
    class="mx-auto px-2 2xl:px-10 container flex flex-col justify-center justify-items-center w-full"
  >
    <div v-if="data" class="w-full">
      <div
        class="grid gap-4 gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center py-10"
      >
        <!-- <div v-for="offer in data?.data" class="w-full">
        </div> -->
        <WidgetsOfferCard v-for="offer in data?.data" :offer="offer" />
      </div>
    </div>
    <WidgetsLoading v-else-if="pending" />
    <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" />
    <div v-if="data" class="flex justify-center">
      <WidgetsPagination :page="page" :totalPage="data?.totalPages!" />
    </div>
    <!--     <button class="btn btn-primary btn-sm text-xs" @click="wish" type="submit">
      fghfgh
    </button> -->
  </section>
</template>

<script setup lang="ts">
import type { Offer } from "@/types/interface";
const config = useRuntimeConfig();
/* const { getOffers } = useOffer(); */
const { page } = useUtils();
const { pending, data, error, refresh } = useFetch<{
  data: Offer[];
  totalPages: number;
}>("/offers", {
  baseURL: config.public.baseURL,
  lazy: true,
  query: { page: page.value },
  watch: [page],
  server: false,
});
/* const { pending, data, error, refresh } = await getOffers(); */
</script>

<style scoped></style>
