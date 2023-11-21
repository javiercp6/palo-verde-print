// stores/counter.js
import { defineStore } from "pinia";
import type { Picture } from "../types/interface";

/* interface Order {
  name: string;
  material: string;
  size: string;
  price: number; 
} */
interface PictureState {
  pictures: Picture[];
  totalPages: number;
  page: number;
  error: any;
  pending: boolean;
}

export const usePictureStore = defineStore("picture", {
  state: () =>
    ({
      pictures: [],
      totalPages: 0,
      page: 1,
      error: null,
      pending: false,
    } as PictureState),

  getters: {
    /*     cartPrice: (state) => {
      let subtotal = 0
      state.cart.forEach(e => subtotal += ((e.picture.price + (e.price * e.height * e.width) ) * e.quantity));
      return subtotal
    } */
  },

  actions: {
    async getPicturesStore(page: number = 1) {
      const config = useRuntimeConfig();
      //this.cart = [{name: 'f', material: 'ff', size: 'fff' }]
      console.log("ddd");
      this.pending = true;
      /* const picture = await useFetch<{data: Picture[], totalPages: number}>("/pictures", {
        lazy: true,
        server: false,
      }); */
      console.log("ddds");
      const picture = await useAsyncData<{
        data: Picture[];
        totalPages: number;
      }>("pictures", () =>
        $fetch("/pictures", {
          baseURL: config.public.baseURL,
          method: "GET",
          query: { page: page },
        })
      );

      if (picture.data.value) {
        this.pictures.push.apply(this.pictures, picture.data.value.data);
        this.totalPages = picture.data.value.totalPages;
        this.page = page;
        this.error = null;
      }
      if (picture.error.value) {
        this.error = picture.error;
      }
      /* console.log(picture);
      console.log(picture.data.value);
      console.log(picture.data.value?.data);
      return picture; */
      this.pending = false;
    },
  },
});
