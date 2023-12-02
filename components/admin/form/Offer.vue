<template>
  <FormKit
    type="form"
    id="offerForm"
    :value="{
      title: offer?.title,
      material: offer?.material,
      discount: offer?.discount,
      price: offer?.price,
    }"
    submit-label="Save"
    @submit="onsubmit"
    :actions="false"
    :disabled="loading"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
      <FormKit
        type="text"
        name="title"
        id="title"
        validation="required|alpha_spaces"
        label="Title"
        placeholder="Title"
      />
      <FormKit
        type="text"
        name="material"
        id="material"
        validation="required"
        label="Material"
        placeholder="Material"
      />
      <FormKit
        type="number"
        name="price"
        id="price"
        validation="required"
        label="Price"
        placeholder="Price"
      />
      <FormKit
        type="number"
        name="discount"
        id="discount"
        validation="required"
        label="Discount (%)"
        placeholder="Discount"
      />
      <FormKit
        v-if="!edit"
        type="file"
        name="image"
        id="image"
        label="Image"
        accept=".jpg,.png"
        placeholder="Image"
      />
    </div>
    <div class="flex py-4 justify-end justify-items-center">
      <slot name="btnDelete"></slot>
      <br />
      <FormKit
        :disabled="loading"
        :classes="{
          input: {
            'text-primary': loading,
          },
        }"
        type="submit"
      >
        <p
          :class="loading ? 'text-primary' : ''"
          class="flex justify-items-center justify-center"
        >
          <span v-if="loading" class="loading loading-ring text-primary"></span>
          {{ loading ? "Loading" : edit ? "Save" : "Add offer" }}
        </p>
      </FormKit>
      <!-- <FormKit type="submit">
        <p
          :class="true ? 'text-primary' : ''"
          class="flex justify-items-center justify-center"
        >
          <span v-if="true" class="loading loading-ring text-primary"></span>
          {{ false ? "Loading" : "Save" }}
        </p>
      </FormKit> -->
    </div>
  </FormKit>
</template>

<script setup lang="ts">
import type { Offer } from "../../../types/interface.ts";
import { reset } from "@formkit/core";
const props = defineProps<{ offer?: Offer; loading: boolean; edit?: boolean }>();
const { offer, loading, edit } = toRefs(props);
const emit = defineEmits(["submit"]);
const formkit = ref();
const onsubmit = (data: Offer) => {
  emit("submit", data);
  // reset("offerForm");
};
</script>

<style scoped></style>
