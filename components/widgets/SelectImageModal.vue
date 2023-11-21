<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box w-12/12 max-w-5xl">
      <div
        class="grid gap-4 gap-x-4 grid-cols-4 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-10 place-content-center"
      >
        <!-- <div v-for="offer in data?.data" class="w-full">
        </div> -->

        <div
          class="cursor-pointer"
          v-for="picture in store.pictures"
          @click="emitPicture(picture.url)"
          onclick="buttonClose.click()"
        >
          <div class="flex justify-center">
            <img class="mask mask-squircle w-20 h-20" :src="picture.url" />
          </div>
          <div class="flex justify-center">
            <span class="text-red-500">$ {{ picture.price / 100 }}</span>
          </div>
        </div>
      </div>
      <WidgetsLoading v-if="store.pending" />
      <WidgetsError
        v-else-if="store.error"
        :error="store.error"
        @refresh="store.getPicturesStore(store.page + 1)"
      />
      <div v-if="store.totalPages > store.page" class="flex justify-center pt-2">
        <button
          class="btn btn-outline btn-primary btn-xs text-xs"
          :disabled="store.pending || store.error != null"
          @click="store.getPicturesStore(store.page + 1)"
        >
          Show more
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button id="buttonClose">close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
const emit = defineEmits(["pass-picture"]);
import { usePictureStore } from "@/stores/picture";
const store = usePictureStore();

//await storePicture.getPicturesStore;
if (!store.pictures.length && store.page === 1) {
  await store.getPicturesStore();
}

const selected = ref(false);
const emitPicture = (pictureUrl: string) => {
  emit("pass-picture", pictureUrl);
};
</script>

<style scoped></style>
