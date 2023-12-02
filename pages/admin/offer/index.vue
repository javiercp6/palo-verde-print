import { AdminTableUser } from '../../.nuxt/components';
<template>
  <main class="flex-1 overflow-y-auto pt-8 px-6">
    <AdminTableLayout title-btn="Add Offer" toBtn="/admin/offer/add" title="Offers">
      <template v-slot:tableBody>
        <AdminTableOffer
          v-if="data?.data && !pending && !error"
          :offers="data.data"
          @delete="onDeleteOffer"
        />
        <span v-if="pending" class="loading loading-ring loading-lg"></span>
        <WidgetsError v-if="error && !pending" :error="error" @refresh="refresh()" />
      </template>
      <template v-slot:pagination>
        <WidgetsPagination
          v-if="data?.totalPages"
          :page="page"
          :totalPage="data?.totalPages!"
        />
      </template>
    </AdminTableLayout>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: ["admin"],
});
const a = ref(false);
const { page } = useUtils();
const { getOffersAdmin, deleteOffer } = useOffer();
const { data, pending, error, refresh } = await getOffersAdmin();

const onDeleteOffer = async (id: string) => {
  console.log(id);
  a.value = true;
  //const { data, pending, error, refresh } = await deleteOffer(id);
};
</script>

<style scoped></style>
