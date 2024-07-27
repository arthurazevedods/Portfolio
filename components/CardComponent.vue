<template>
    <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden duration-300 bg-white rounded-lg bg-dark-2 shadow-1 hover:shadow-3 shadow-card hover:shadow-3">
            <img :src="image" alt="image" class="object-cover w-full h-36" />
            <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                    <a :href="buttonLink" class="text-gray-700  hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">{{ title }}</a>
                </h3>
                <p class="leading-relaxed text-body-color text-gray-600 mb-7">{{ details }}</p>
                <a :href="buttonLink" class="inline-block py-2 text-gray-600 font-medium transition border rounded-full border-gray-500  hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white border-dark-3 text-dark-6">Veja mais</a>
            </div>
        </div>
    </div>
    
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      title: String,
      details: String,
      buttonText: String,
      buttonLink: String,
    },
  };
  </script>
  
  <style scoped>
    
  </style>
  