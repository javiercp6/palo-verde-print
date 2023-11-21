<template>
  <div class="flex flex-row justify-items-center justify-center">
    <div class="avatar-group -space-x-8">
      <div class="avatar">
        <div class="w-10">
          <img src="@/assets/img2.jpg" alt="" />
        </div>
      </div>
      <div class="avatar">
        <div class="w-10">
          <img src="@/assets/img1.jpg" alt="" />
        </div>
      </div>
      <div class="avatar placeholder" onclick="my_modal_1.showModal()">
        <div class="w-10 bg-primary text-neutral-content cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <p>Select an Image</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
