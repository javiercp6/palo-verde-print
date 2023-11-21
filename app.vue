<template>
  <NuxtLayout>
    <main>
      <NuxtPage style="min-height: calc(100vh - 66px)" />
    </main>
  </NuxtLayout>
</template>
<script>
import { useAuthStore } from "@/stores/auth";
export default {
  created() {
    const auth = useAuthStore();
    auth.postTokenFetch();
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.05s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
