import { AdminTableUser } from '../../.nuxt/components';
<template>
  <main class="flex-1 overflow-y-auto pt-8 px-6">
    <AdminTableLayout title-btn="Add Picture" title="Pictures">
      <template v-slot:tableBody>
        <AdminTablePicture v-if="data?.data" :pictures="data.data" />
        <WidgetsLoading v-else-if="pending" />
        <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" />
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
const { page } = useUtils();
const { getPicture } = usePicture();
const { data, pending, error, refresh } = await getPicture();
</script>

<style scoped></style>
