<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Tab {
    title: string;
    content: string;
}

const activeTab = ref<number>(0);

const tabs: Tab[] = [
    {
        title: 'todos',
        content: 'todos',
    },
    {
        title: 'comerciais',
        content: 'comerciais',
    },
    {
        title: 'pessoais',
        content: 'pessoais',
    },
];

//altera a aba ativa na interface
const selectTab = (index: number) => {
    activeTab.value = index;
};

const cardItems = ref([
    {
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
        title: 'Supervisão e Sinergia',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        buttonText: 'Acesse',
        buttonLink: 'https://supervisao-e-sinergia.vercel.app/',
        tag: 'comerciais',
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
        title: 'Dona',
        details:
            'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
        buttonText: 'Acesse',
        buttonLink: 'https://dona-three.vercel.app/',
        tag: 'pessoais',
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
        title: 'Gerador de QR Code',
        details:
            'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
        buttonText: 'Acesse',
        buttonLink: 'https://gerador-qrcode-mfvu5ega8-arthurazevedods-projects.vercel.app/',
        tag: 'pessoais',
    },
    {
        image: 'https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg',
        title: 'Gerador de QR Code',
        details:
            'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
        buttonText: 'Acesse',
        buttonLink: 'https://gerador-qrcode-mfvu5ega8-arthurazevedods-projects.vercel.app/',
        tag: 'pessoais',
    },
]);

const filteredCardItems = computed(() => {
    // Verifica se a aba ativa é a aba "todos
    // Se for "todos", retorna todos os itens de cardItems sem filtragem
    if (tabs[activeTab.value].content === 'todos') {
        return cardItems.value;
    } else {
        // Caso contrário, obtém o conteúdo (tag) da aba ativa
        const selectedTag = tabs[activeTab.value].content;
        // Filtra cardItems para retornar apenas os itens cuja tag coincide com a aba ativa
        return cardItems.value.filter((item) => item.tag === selectedTag);
    }
});

const currentIndex = ref(0); // mantém o índice atual do primeiro card visível no carrossel.
const cardsPerView = ref(3); // define quantos cards são exibidos simultaneamente no carrossel.

// ajusta o índice do slide visível com base no índice fornecido
const showSlide = (index: number) => {
    // obtém o número total de slides (cards) disponíveis.
    const totalSlides = filteredCardItems.value.length;

    // Se o índice for menor que 0, o carrossel vai para o último conjunto de slides.
    // Se o índice for maior ou igual ao número total de slides, o carrossel reinicia no primeiro slide.
    // Caso contrário, o índice é atualizado para o valor fornecido.
    if (index < 0) {
        currentIndex.value = totalSlides - cardsPerView.value;
    } else if (index >= totalSlides) {
        currentIndex.value = 0;
    } else {
        currentIndex.value = index;
    }
};

// avança o carrossel para o próximo conjunto de slides.
const nextSlide = () => {
    // Chama `showSlide` para mover para o próximo conjunto de slides baseado no número de `cardsPerView`.
    showSlide(currentIndex.value + 1);
     
};

// retrocede o carrossel para o conjunto de slides anterior.
const previousSlide = () => {
    // Chama `showSlide` para mover para o conjunto de slides anterior baseado no número de `cardsPerView`.
    showSlide(currentIndex.value - 1);
};

// ajusta o número de cards por visualização com base no tamanho da janela.
const updateCardsPerView = () => {
    // Se a largura da janela for menor que 640 pixels, apenas 1 card será exibido.
    if (window.innerWidth < 640) {
        cardsPerView.value = 1;
    // Caso contrário, 3 cards serão exibidos simultaneamente.
    } else {
        cardsPerView.value = 3;
    }
};


// Executa após o componente ser montado na tela.
onMounted(() => {
    // Chama `updateCardsPerView` para configurar o número inicial de cards por visualização.
    updateCardsPerView();
    // Adiciona um listener para atualizar `cardsPerView` sempre que a janela for redimensionada.
    window.addEventListener('resize', updateCardsPerView);
});


</script>

<template>
    <!-- Seção de Cards -->
    <section class="bg-gray-900">
        <!-- Título da seção -->
        <h3 class="text-4xl tracking-tight font-extrabold text-white flex justify-center pt-4">Meus Projetos</h3>

        <!-- Tabs (Abas) -->
        <div class="container lg:pb-20 max-w-screen-xl py-4 mx-auto">
            <div class="-mx-4 flex flex-wrap">
                <div class="w-full px-4">
                    <div class="mb-14 w-full">
                        <!-- Contêiner das abas -->
                        <div class="flex flex-col flex-wrap rounded-lg gap-2 px-4 py-3 sm:flex-row">
                            <!-- Renderiza cada aba dinamicamente -->
                            <a v-for="(tab, index) in tabs" :key="index" @click="selectTab(index)" :class="{
                                'bg-primary text-white': activeTab === index, // Aba ativa: fundo primário e texto branco
                                'text-body-color hover:bg-primary hover:text-white text-dark-6': activeTab !== index // Aba inativa: fundo padrão, mas muda ao passar o mouse
                            }" class="cursor-pointer capitalize rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6">
                                {{ tab.title }} <!-- Título da aba -->
                            </a>
                        </div>

                        <!-- Exibição do conteúdo da aba ativa -->
                        <div class="py-6 text-base leading-relaxed text-body-color text-dark-6">
                            <div class="relative w-full overflow-hidden">
                                <!-- Carrossel -->
                                <div class="flex transition-transform duration-500" :style="{
                                    transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`, // Transforma a posição do carrossel com base no índice atual
                                    width: `${filteredCardItems.length * (100 / cardsPerView)}%`, // Ajusta a largura do contêiner do carrossel
                                }">
                                    <!-- Renderiza os cards dinamicamente -->
                                    <CardComponent v-for="(item, index) in filteredCardItems" :key="index"
                                        :image="item.image" :title="item.title" :details="item.details"
                                        :buttonText="item.buttonText" :buttonLink="item.buttonLink" class="w-full px-4"
                                        :class="{
                                            'sm:w-full': cardsPerView === 1, // Em telas pequenas, ocupa toda a largura
                                            'md:w-1/3': cardsPerView === 3, // Em telas maiores, ocupa um terço da largura
                                        }" />
                                </div>

                                <!-- Controles de navegação do carrossel -->
                                <button
                                    class="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 bg-gray-800 bg-opacity-10 text-white"
                                    @click="previousSlide">
                                    &#10094; <!-- Seta para a esquerda -->
                                </button>
                                <button
                                    class="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 bg-gray-800 bg-opacity-50 text-white"
                                    @click="nextSlide">
                                    &#10095; <!-- Seta para a direita -->
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
