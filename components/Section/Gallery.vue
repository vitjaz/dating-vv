<template>
  <ClientOnly>
    <SectionWrapper id="4" disable-h-screen>
      <div class="text-center montserrat-regular p-2 text-4xl mb-5 text-white">
        Наши фотографии
      </div>
      <PrimeGalleria
        v-model:activeIndex="activeIndex"
        v-model:visible="displayCustom"
        :value="images"
        :numVisible="7"
        containerStyle="max-width: 550px"
        :circular="true"
        :fullScreen="true"
        :showItemNavigators="true"
        :showThumbnails="false"
        :show-indicators="true"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%; display: block"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
            style="display: block"
          />
        </template>
      </PrimeGalleria>

      <div v-if="images" class="grid grid-cols-4 gap-2">
        <div v-for="(image, index) of images" :key="index">
          <img
            :src="image.thumbnailImageSrc"
            class="cursor-pointer object-cover w-[150px] h-[150px]"
            @click="imageClick(index)"
          />
        </div>
      </div>

      <!-- <PrimeGalleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            class="cursor-pointer object-cover w-[150px] h-[150px]"
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
          />
        </template>
      </PrimeGalleria> -->
    </SectionWrapper>
  </ClientOnly>
</template>

<script setup lang="ts">
const displayCustom = ref(false);
const activeIndex = ref(0);

const imageClick = (index: number) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
const images = ref([
  {
    itemImageSrc: "/dating-vv/img/IMG_2176.webp",
    thumbnailImageSrc: "/dating-vv/img/IMG_2176.webp",
  },
  {
    itemImageSrc: "/dating-vv/img/IMG_2376.webp",
    thumbnailImageSrc: "/dating-vv/img/IMG_2376.webp",
  },
  {
    itemImageSrc: "/dating-vv/img/IMG_6311.webp",
    thumbnailImageSrc: "/dating-vv/img/IMG_6311.webp",
  },
  {
    itemImageSrc: "/dating-vv/img/IMG_5046.webp",
    thumbnailImageSrc: "/dating-vv/img/IMG_5046.webp",
  },
]);
</script>

<style lang="scss">
.p-galleria-close {
  color: white;
  z-index: 999999;
}

.p-galleria-item-prev {
  color: white;
  z-index: 99;
}

.p-galleria-item-next {
  color: white;
  z-index: 99;
}
</style>
