<template>
  <div class="max-w-[1200px] mx-auto px-2 flex flex-col justify-items-center">
    <LayoutNavBarForPage title="Order"> </LayoutNavBarForPage>
    <div v-if="data" class="bg-base-200 rounded-lg p-4 mt-4 w-full">
      <WidgetsOrderCard v-if="data" :order="data" />
      <div class="divider"></div>
      <div v-for="(wish, index) in data?.wishes" :key="index">
        <WidgetsCheckoutItem
          :wish="{
            picture: { url: wish.image, price: wish.photoPrice },
            material: wish.material,
            price: wish.offerPrice,
            quantity: wish.quantity,
            height: wish.height,
            width: wish.width,
          }"
        />
        <div v-if="data?.wishes!.length !== index + 1" class="divider"></div>
      </div>
    </div>
    <!-- <div v-if="pending || error" class="flex justify-center justify-items-center">
      <span v-if="pending" class="loading loading-ring loading-lg"></span>
      <div class="flex justify-center justify-items-center" v-if="error">
        <p class="inline-block">{{ error.data?.message || error.message }}</p>
      </div>
    </div> -->
    <WidgetsLoading v-else-if="pending" />
    <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" />
  </div>
</template>

<script setup lang="ts">
import { type Order } from "@/types/interface";
const route = useRoute();
const { page } = useUtils();
const { getOrderById } = useOrder();
const { data, pending, error, refresh } = await getOrderById(route.params.id as string);
/* const { pending, data: order, error } = await useFetch<Order>(
  `/orders/${route.params.id}`,
  {
    lazy: true,
    server: false,
  }
); */
</script>

<style scoped></style>
