import { AdminTableUser } from '../../.nuxt/components';
<template>
  <main class="flex-1 overflow-y-auto pt-8 px-6">
    <AdminTableLayout title-btn="Add User" title="User">
      <template v-slot:tableBody>
        <AdminTableUser v-if="data?.data && !pending && !error" :users="data.data" />
        <span v-if="pending" class="loading loading-ring loading-lg"></span>
        <WidgetsError v-if="error && !pending" :error="error" @refresh="refresh()" />
      </template>
      <template v-slot:pagination>
        <WidgetsPagination
          v-if="data?.totalPages"
          :page="page"
          :totalPage="data.totalPages"
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
const { getUser } = useUser();
const { data, pending, error, refresh } = await getUser();

console.log(error);
</script>

<style scoped></style>
