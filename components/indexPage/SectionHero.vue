<template>
  <div class="hero min-h-screen bg-gradient-to-b from-base-200 to-base-100">
    <!--  <div class="hero-overlay bg-opacity-60"></div> -->
    <!-- <div
      aria-hidden="true"
      class="transition duration-700 ease-in-out hover:-translate-y-14 hover:scale-110 absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primary to-primary-focus blur-3xl opacity-50 dark:opacity-20"
    ></div> -->
    <div
      aria-hidden="true"
      :class="hoverHero ? '-translate-y-14 scale-110' : ''"
      class="transition duration-700 ease-in-out hover:-translate-y-14 hover:scale-110 absolute inset-30 my-auto w-96 h-60 rotate-45 bg-gradient-to-r from-primary to-primary-focus blur-3xl opacity-40 dark:opacity-30"
    ></div>
    <div
      class="hero-content text-center"
      @mouseover="hoverHero = true"
      @mouseleave="hoverHero = false"
    >
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Lorem ipsum dolor sit amet. Aut voluptas deleniti qui molestiae delectus et
          natus nihil aut quia voluptas vel quia assumenda. Ea quae odit vel enim dicta
          est earum quasi sit ipsam asperiores ut optio eius et saepe error.
        </p>
        <NuxtLink
          to="/offer"
          class="btn btn-primary transition duration-700 ease-in-out hover:scale-110 z-10"
          >Print</NuxtLink
        >
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
const hoverHero = ref(false);
</script>

<style scoped>
.bg-img-1 {
  background-image: url(@/assets/hero.jpg);
}
</style>
