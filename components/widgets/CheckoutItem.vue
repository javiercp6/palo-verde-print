<template>
  <div class="flex py-6">
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img :src="wish.picture.url" class="h-full w-full object-cover object-center" />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium">
          <!-- <h3>{{ order.name }}</h3> -->
          <div>
            <p class="mt-1 text-sm text-gray-500">Impression on {{ wish.material }}</p>
            <p class="mt-1 text-sm text-gray-500">
              {{ wish.width }} W x {{ wish.height }} H
            </p>
          </div>
          <label
            v-if="isCart"
            class="btn btn-ghost btn-circle"
            @click="emit('remove-order')"
          >
            <svg class="h-5 w-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1l-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
              />
            </svg>
          </label>
          <label
            v-if="!isCart"
            class="btn btn-ghost btn-circle"
            @click="downloadPicture()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </label>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm pt-2">
        <div class="flex items-center border-gray-100">
          <span
            v-if="isCart"
            class="cursor-pointer rounded-l bg-base-300 py-1 px-3.5 duration-100 hover:bg-primary hover:text-blue-50"
            @click="emit('rest-quantity')"
          >
            -
          </span>
          <p class="px-1">{{ wish.quantity }}</p>
          <span
            v-if="isCart"
            class="cursor-pointer rounded-r bg-base-300 py-1 px-3 duration-100 hover:bg-primary hover:text-blue-50"
            @click="emit('add-quantity')"
          >
            +
          </span>
        </div>

        <div class="flex pr-3">
          <h3 class="text-red-500">
            ${{
              wish.quantity *
              (wish.price * wish.height * wish.width + wish.picture.price) *
              0.01
            }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Wish, WishOrder } from "../../types/interface";
const emit = defineEmits([
  "add-quantity",
  "rest-quantity",
  "remove-order",
  "download-photo",
]);
const props = defineProps<{ wish: Wish; isCart?: boolean }>();
const { wish, isCart } = toRefs(props);

const downloadPicture = () => {
  /* const link = document.createElement("a");
  link.href = wish.value.picture.url;
  link.setAttribute(
    "download",
    `Impression on ${wish.value.material} ${wish.value.width} W x ${wish.value.height} H`
  );
 */
  fetch(wish.value.picture.url)
    .then((response) => response.blob())
    .then((blob) => {
      // Crea un objeto URL desde el blob
      const url = window.URL.createObjectURL(blob);

      // Crea un elemento 'a' invisible
      const link = document.createElement("a");
      link.href = url;
      link.download = `Impression on ${wish.value.material} ${wish.value.width} W x ${wish.value.height} H.jpg`; // Reemplaza 'nombreDescarga.jpg' con el nombre que quieras para la descarga

      // Agrega el enlace al DOM
      document.body.appendChild(link);

      // Haz clic en el enlace para iniciar la descarga
      link.click();

      // Elimina el enlace del DOM
      document.body.removeChild(link);
    })
    .catch((error) => console.error(error));
};
</script>

<style scoped></style>
