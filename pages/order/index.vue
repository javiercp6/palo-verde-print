<template>
  <div class="my-4 max-w-[1200px] flex justify-center mx-auto px-2">
    <!-- <div
      v-if="data && !pending"
      class="flex justify-center justify-items-center w-full md:block"
    >
      <div>
        <WidgetsOrderCard
          v-for="order in data?.data"
          :key="order._id"
          :order="order"
          showBtn
        />
      </div>

      <span v-if="pending" class="loading loading-ring loading-lg"></span>
    </div>
    <div v-if="pending || error" class="flex justify-center justify-items-center">
      <span v-if="pending" class="loading loading-ring loading-lg"></span>
      <div class="flex justify-center justify-items-center" v-if="error">

        <p class="inline-block">{{ error.data?.message || error.message }}</p>
      </div>
    </div> -->
    <div class="flex justify-center justify-items-center w-full md:block">
      <div v-if="data">
        <WidgetsOrderCard
          v-for="order in data?.data"
          :key="order._id"
          :order="order"
          showBtn
        />
      </div>
      <WidgetsLoading v-else-if="pending" />
      <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" />
      <div v-if="data" class="flex justify-center pt-3">
        <WidgetsPagination :page="page" :totalPage="data?.totalPages!" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["user"],
});
import { type Order } from "@/types/interface";
/* const { pending, data: orders, error } = await useFetch<Order[]>("/orders/user", {
  lazy: true,
  server: false,
}); */
const { page } = useUtils();
const { getOrdersByUser } = useOrder();
const { data, pending, error, refresh } = await getOrdersByUser();
</script>

<style scoped></style>
