<template>
  <div class="flex-1 overflow-y-auto px-6">
    <LayoutNavBarForPage title="Edit Offer"> </LayoutNavBarForPage>
    <div class="card w-full p-6 bg-base-200 shadow-xl mt-2 mb-4">
      <AdminFormOffer
        v-if="data"
        :offer="data"
        edit
        @submit="onsubmit"
        :loading="loading"
      >
        <template v-slot:btnDelete>
          <div class="btn btn-outline btn-error mr-4" @click="a = true">
            Delete
          </div></template
        >
      </AdminFormOffer>
      <WidgetsLoading v-else-if="pending" />
      <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" />
    </div>
    <WidgetsModalInfo
      :show="a"
      @close="a = false"
      @accept="onDeleteOffer"
      :loading="loadingDelete"
      title="Delete offer"
      subtitle="Are you sure you want to delete this offer?"
      colorbtn="error"
    />
    <Toaster richColors position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "../../../types/interface";
const {
  getOfferAdminById,
  updateOffer,
  deleteOffer,
  loading,
  loadingDelete,
} = useOffer();
const route = useRoute();
const { $toast } = useNuxtApp();
const a = ref(false);
const { data, pending, error, refresh } = await getOfferAdminById(
  route.query.idOffer as string
);
const onsubmit = async (data: Offer) => {
  //delete data.image;
  const { data: offer, pending, error, refresh } = await updateOffer(
    data,
    route.query.idOffer as string
  );
  console.log(data);

  if (error.value) {
    if (error.value.data) {
      $toast.error(error.value.data.message || "Error");
    } else {
      $toast.error(error.value.message || "Error");
    }
  }
  if (offer.value) {
    $toast.success("Offer update successfully");
  }
};

const onDeleteOffer = async (data: Offer) => {
  //delete data.image;
  const { data: offer, pending, error, refresh } = await deleteOffer(
    route.query.idOffer as string
  );
  console.log(data);

  if (error.value) {
    if (error.value.data) {
      $toast.error(error.value.data.message || "Error");
    } else {
      $toast.error(error.value.message || "Error");
    }
  }
  if (offer.value) {
    $toast.success("Offer delete successfully");
    a.value = false;
    await navigateTo("/admin/offer");
  }
};
</script>

<style scoped></style>
