<template>
  <div class="card w-80 bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{{ catDetail.name }}</h2>
      <ul class="list-disc pl-6">
        <li v-for="sub in catDetail.subtitules">{{ sub }}</li>
        <li>....</li>
      </ul>
      <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->

      <div class="card-actions justify-end">
        <NuxtLink
          :to="{ path: `/offer`, query: { category: catDetail.category } }"
          class="btn btn-primary btn-sm text-xs"
          >See Now</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  catDetail: {
    name: string;
    subtitules: string[];
    category: string;
  };
}>();
const { catDetail } = toRefs(props);
</script>

<style scoped></style>
