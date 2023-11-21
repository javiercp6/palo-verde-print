<template>
  <div class="flex flex-row justify-around my-9 lg:my-40">
    <div class="flex flex-col justify-center basis-full lg:basis-auto">
      <Swiper
        class="swiper-cards w-80"
        :width="320"
        :modules="[SwiperAutoplay, SwiperEffectCards]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        :autoplay="{
          delay: 4000,
        }"
      >
        <SwiperSlide v-for="(a, idx) in arr" :key="idx">
          <WidgetsOfferCategoryCard :catDetail="a" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="lg:flex hidden">
      <div class="md:basis-auto basis-0">
        <div class="mockup-phone border-primary rotate-6">
          <div class="camera"></div>
          <div class="display">
            <img
              src="../../assets/prueba.png"
              alt="Oscar Mattern"
              loading="lazy"
              class="artboard artboard-demo phone-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr = [
  {
    name: "Print on Paper",
    subtitules: [
      "Premium Luster Photo Paper",
      "Watercolor Radiant White",
      "Singleweight Matte Paper",
    ],
    category: "paper",
  },
  {
    name: "Print on Metal",
    subtitules: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    category: "metal",
  },
  {
    name: "Print on Carton",
    subtitules: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"],
    category: "carton",
  },
];
</script>

<style scoped>
/* .swiper-slide {
  height: 384px;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 384px;
  height: 140px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
} */
</style>
