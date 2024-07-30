<template>
  <div class="w-full px-4 md:w-1/2 xl:w-1/3">
    <div
      class="mb-10 overflow-hidden duration-300 bg-gray-700 rounded-lg bg-dark-2 shadow-1 hover:shadow-3 shadow-card hover:shadow-3">

      <img :src="image" alt="image" class="object-cover w-full h-36" />
      <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a :href="buttonLink"
            class="text-white hover:text-gray-300 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">{{
            title }}</a>
        </h3>
        <p class="leading-relaxed text-body-color text-white mb-7 text-left ">{{ details }}</p>
        <a :href="buttonLink"
          class="inline-block py-2 text-white font-medium transition border rounded-full border-gray-500  hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white border-dark-3 text-dark-6">Veja
          mais</a>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
  const props = defineProps({
    image: String,
    title: String,
    details: String,
    buttonText: String,
    buttonLink: String,
  });

</script>

<style scoped>
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height:5em;
  }
</style>