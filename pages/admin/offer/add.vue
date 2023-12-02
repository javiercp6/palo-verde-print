<template>
  <div class="flex-1 overflow-y-auto px-6">
    <LayoutNavBarForPage title="Add Offer"> </LayoutNavBarForPage>
    <div class="card w-full p-6 bg-base-200 shadow-xl mt-2 mb-4">
      <AdminFormOffer @submit="onsubmit" :loading="loading" />
    </div>
    <Toaster richColors position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "../../../types/interface";
import { reset } from "@formkit/core";
const { addOffer, loading } = useOffer();
const { $toast } = useNuxtApp();

const onsubmit = async (data: Offer) => {
  const formData = new FormData();
  //formData.append("file", data.image?[0].file);
  if (data.image[0].file) {
    formData.append("file", data.image[0].file);
  }
  formData.append("title", data.title);
  formData.append("material", data.material);
  formData.append("price", data.price);
  formData.append("discount", data.discount);
  const { data: offer, pending, error, refresh } = await addOffer(formData);
  console.log(formData);

  if (error.value) {
    if (error.value.data) {
      $toast.error(error.value.data.message || "Error");
    } else {
      $toast.error(error.value.message || "Error");
    }
  }
  if (offer.value) {
    $toast.success("Offer created successfully");
    reset("offerForm");
  }
};
</script>

<style scoped></style>
