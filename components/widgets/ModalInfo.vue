<template>
  <dialog ref="modalInfo" class="modal">
    <div class="modal-box">
      <button
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        @click="emitClose"
      >
        ✕
      </button>
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <p class="py-4">{{ subtitle }}</p>
      <div class="flex justify-end">
        <button
          v-show="!loading"
          class="btn btn-outline btn-sm text-xs mr-3"
          @click="emitClose"
        >
          Cancel
        </button>
        <button class="btn btn-sm text-xs" :class="`btn-${colorbtn}`" @click="emitAccept">
          <span v-show="loading" class="loading loading-spinner"></span>
          {{ loading ? "Loading..." : "Accept" }}
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
const props = defineProps<{
  show: boolean;
  loading: boolean;
  title: string;
  subtitle: string;
  colorbtn?: string;
}>();
const emit = defineEmits(["close", "accept"]);
const { show, loading, title, subtitle, colorbtn } = toRefs(props);
const modalInfo = ref<any>();

watch(show, (newValue, oldName) => {
  // Haz algo (side effects) 👁
  if (newValue) {
    modalInfo.value.showModal();
  } else {
    modalInfo.value.close();
  }
});

const emitClose = () => {
  emit("close");
};
const emitAccept = () => {
  emit("accept");
};
</script>

<style scoped></style>
