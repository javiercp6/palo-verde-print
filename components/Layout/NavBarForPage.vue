<template>
  <div class="flex justify-center">
    <div class="navbar bg-base-100">
      <div class="navbar-start pl-3">
        <div class="btn btn-ghost btn-circle" @click="goTo()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </div>
        <h2 class="px-2">{{ title }}</h2>
      </div>
      <div class="navbar-center">
        <slot name="subNavCenter"></slot>
      </div>
      <div class="navbar-end pr-3">
        <!-- <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> -->
        <slot name="subNavEnd"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  toBack?: string;
}>();
const { title, toBack } = toRefs(props);
const router = useRouter();

const goTo = () => {
  console.log(toBack);
  toBack?.value ? navigateTo(`${toBack?.value}`) : router.go(-1);
};
</script>

<style scoped></style>
