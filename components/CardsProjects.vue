<script setup lang="ts">
import { ref } from 'vue'
interface Tab {
  title: string
  content: string
}

const activeTab = ref<number>(0)

const tabs: Tab[] = [
  {
    title: 'todos',
    content:
      'todos'
  },
  {
    title: 'comerciais',
    content:
      'comerciais'
  },
  {
    title: 'pessoais',
    content:
      'pessoais'
  },

]

const selectTab = (index: number) => {
  activeTab.value = index;
};
const cardItems = ref([
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Supervisão e Sinergia',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://supervisao-e-sinergia.vercel.app/',
    tag: 'comerciais'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Dona ',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://dona-three.vercel.app/',
    tag: 'pessoais'
  },
  {
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
    title: 'Gerador de QR Code',
    details:
      'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    buttonText: 'Acesse',
    buttonLink: 'https://gerador-qrcode-mfvu5ega8-arthurazevedods-projects.vercel.app/',
    tag: 'pessoais'
  }
])

const filteredCardItems = computed(() => {
  if (tabs[activeTab.value].content === 'todos') {
    return cardItems.value
  } else {
    const selectedTag = tabs[activeTab.value].content
    return cardItems.value.filter((item) => item.tag === selectedTag)
  }
})
</script>

<template>
  <!-- ====== Cards Section -->

  <section class="bg-gray-800">
    <h3 class="text-4xl tracking-tight font-extrabold text-white  flex justify-center pt-4">Meus Projetos</h3>
    <!--Tabs-->
    <div class="container lg:pb-20 max-w-screen-xl py-4 mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mb-14 w-full">
            <div class="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
              <!---->
              <a v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{
                'bg-primary text-white': activeTab === index,
                'text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white':
                  activeTab !== index
                }" class="cursor-pointer capitalize rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6">
                {{ tab.title }}
              </a>
            </div>
            <!-- Display active tab content -->
            <div class="p-6 text-base leading-relaxed text-body-color dark:text-dark-6">
              <div class="container mx-auto">
                <div class="flex flex-wrap justify-between">
                  <CardComponent v-for="(item, index) in filteredCardItems" :key="index" :image="item.image" :title="item.title"
                  :details="item.details" :buttonText="item.buttonText" :buttonLink="item.buttonLink" />                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<style scoped></style>