<template>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th>Title</th>
          <th>Material</th>
          <th>Image</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Active</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="offer in offers" :key="offer._id">
          <td>{{ offer.title }}</td>
          <td>{{ offer.material }}</td>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img :src="offer.image" alt="Offer" />
                </div>
              </div>
              <!-- <div>
                <div class="font-bold">{{ user.fullName }}</div>
              </div> -->
            </div>
          </td>
          <td>
            <p>$ {{ offer.price }}</p>
          </td>
          <td>
            <p>{{ offer.discount }} %</p>
          </td>
          <td>
            <input
              type="checkbox"
              class="toggle toggle-primary toggle-sm"
              :checked="offer.isActive"
            />
          </td>
          <td>
            <div class="flex flex-row justify-items-center">
              <!-- <NuxtLink
                class="btn btn-ghost btn-circle"
                :to="{ path: '/admin/offer/edit', query: { idOffer: offer._id } }"
              >
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path
                    d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
                  />
                  <path d="M16 5l3 3" />
                </svg>
              </NuxtLink> -->
              <NuxtLink
                class="btn btn-primary btn-sm text-xs"
                :to="{ path: '/admin/offer/edit', query: { idOffer: offer._id } }"
              >
                details
              </NuxtLink>
              <!-- <div class="btn btn-ghost btn-circle" @click="emitDelete(offer._id)">
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </div> -->
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Offer } from "../../types/interface";
const props = defineProps<{ offers: Offer[] }>();
const { offers } = toRefs(props);
</script>

<style scoped></style>
