<template>
    <section class="p-5 bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Olá, me chamo Arthur Azevedo</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Sou um desenvolvedor Web e Professor.
                </p>
                
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Conheça mais
                </a>  
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
            </div>                
        </div>

        <!--Redes sociais-->
        <Redes/>
        

    </section>
</template>

<style scoped>
img{
    
    width: 1000px; /* width of container */
    height: 500px; /* height of container */
    object-fit: cover;
}
</style>