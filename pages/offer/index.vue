<template>
  <section>
    <LayoutNavBarForPage>
      <template v-slot:subNavEnd>
        <!-- <div class="badge badge-outline badge-lg">default</div>
        <div class="badge badge-outline px-1">default</div>
        <div class="badge badge-outline px-1">default</div> -->
        <div class="tabs tabs-boxed">
          <NuxtLink
            :to="{ path: '/offer', query: { category: 'Metal' } }"
            class="tab tab-sm"
            :class="offerCategory === 'Metal' ? 'tab-active' : ''"
            >Metal</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/offer', query: { category: 'Paper' } }"
            class="tab tab-sm"
            :class="offerCategory === 'Paper' ? 'tab-active' : ''"
            >Paper</NuxtLink
          >
          <NuxtLink
            :to="{ path: '/offer', query: { category: 'Carton' } }"
            class="tab tab-sm"
            :class="offerCategory === 'Carton' ? 'tab-active' : ''"
            >Carton</NuxtLink
          >
        </div>
      </template>
    </LayoutNavBarForPage>
    <div
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Offer } from "@/types/interface";
const config = useRuntimeConfig();
const { getOffers } = useOffer();
const { page, offerCategory } = useUtils();
const { pending, data, error, refresh } = useFetch<{
  data: Offer[];
  totalPages: number;
}>("/offers", {
  baseURL: config.public.baseURL,
  lazy: true,
  query: { page: page, material: offerCategory },
  watch: [page],
  server: true,
});
/* const { pending, data, error, refresh } = await getOffers(); */
</script>

<style scoped></style>
