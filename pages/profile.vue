<template>
  <div class="max-w-[1200px] mx-auto px-2 flex flex-col justify-items-center">
    <LayoutNavBarForPage title="Profile"> </LayoutNavBarForPage>
    <div class="bg-base-200 rounded-lg p-4 mt-4 w-full">
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> -->
      <FormKit type="form" submit-label="Save" @submit="onsubmit" :actions="false">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <FormKit
            type="text"
            name="fullName"
            id="fullname"
            validation="required|alpha_spaces"
            label="Fullname"
            placeholder="Fullname"
          />
          <FormKit
            type="email"
            name="username"
            id="name"
            validation="required|email"
            label="Email"
            placeholder="e.g. name@gmail.com"
          />
        </div>
        <div class="divider">Address</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <FormKit
            type="text"
            name="fullName"
            id="fullname"
            validation="required|alpha_spaces"
            label="Fullname"
            placeholder="Fullname"
          />
          <FormKit
            type="text"
            name="fullName"
            id="fullname"
            validation="required|alpha_spaces"
            label="Fullname"
            placeholder="Fullname"
          />
          <FormKit
            type="text"
            name="fullName"
            id="fullname"
            validation="required|alpha_spaces"
            label="Fullname"
            placeholder="Fullname"
          />
          <FormKit
            type="text"
            name="fullName"
            id="fullname"
            validation="required|alpha_spaces"
            label="Fullname"
            placeholder="Fullname"
          />
        </div>

        <div class="flex py-4 justify-end justify-items-center">
          <!-- <FormKit
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
                {{ loading ? "Loading" : props.register ? "Register" : "Login" }}
              </p>
            </FormKit> -->
          <FormKit type="submit">
            <p
              :class="true ? 'text-primary' : ''"
              class="flex justify-items-center justify-center"
            >
              <span v-if="true" class="loading loading-ring text-primary"></span>
              {{ false ? "Loading" : "Save" }}
            </p>
          </FormKit>
        </div>
      </FormKit>
    </div>
    <!-- <div v-if="pending || error" class="flex justify-center justify-items-center">
        <span v-if="pending" class="loading loading-ring loading-lg"></span>
        <div class="flex justify-center justify-items-center" v-if="error">
          <p class="inline-block">{{ error.data?.message || error.message }}</p>
        </div>
      </div> -->
    <!-- <WidgetsLoading v-else-if="pending" />
    <WidgetsError v-else-if="error" :error="error" @refresh="refresh()" /> -->
  </div>
</template>

<script setup lang="ts">
import { type Order } from "@/types/interface";
const route = useRoute();
const { page } = useUtils();
const { getOrderById } = useOrder();
interface DataProfile {
  fullName?: string;
  username: string;
  password: string;
  password_confirm?: string;
}
const { data, pending, error, refresh } = await getOrderById(route.params.id as string);
const onsubmit = (data: DataProfile)=> {
  console.log(data)
}
</script>

<style scoped></style>
