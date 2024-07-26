<script setup lang="ts">
import { ref } from 'vue'

const cardItems = ref([
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Supervisão e Sinergia',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://supervisao-e-sinergia.vercel.app/'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Dona ',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://dona-three.vercel.app/'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Gerador de QR Code',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://gerador-qrcode-mfvu5ega8-arthurazevedods-projects.vercel.app/'
  }
])
</script>

<template>
  <!-- ====== Cards Section -->
  <section class="bg-gray-2 dark:bg-dark m-2 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
    <div class="container mx-auto">
        <div class="flex flex-wrap mx-4">
            <Card v-for="(item, index) in cardItems" 
                :key="index" 
                :image="item.image" 
                :title="item.title" 
                :details="item.details" 
                :buttonText="item.buttonText" 
                :buttonLink="item.buttonLink" 
            />
        </div>
    </div>
  </section>
  
</template>