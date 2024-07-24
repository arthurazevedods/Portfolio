<template>
    <section class="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-800">
        <h2 class="text-lg font-semibold  text-white">Entre em contato</h2>

        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 ">
                <div>
                    <label class="text-gray-200" for="email">Nome</label>
                    <input id="nome" type="text" class="block w-full px-4 py-2 mt-2 border  rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-200" for="email">E-mail</label>
                    <input id="email" type="email" class="block w-full px-4 py-2 mt-2 border  rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring">
                </div>
                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 text-white">Sua mensagem</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Deixe sua mensagem..."></textarea>
                </div>
            </div>

            <div class="flex justify-end mt-6">
                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Enviar</button>
            </div>
        </form>
    </section>

</template>
<style scoped>
    section{
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-variation-settings:
        "slnt" 0;
    }
</style>