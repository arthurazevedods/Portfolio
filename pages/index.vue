<script setup lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";


</script>
<template>
    <div class="h-full">
        <header>
            <nav>
                <Navbar/>
            </nav>
        </header>
        <main>

        </main>
        <footer class="sticky top-full flex flex-row items-center text-gray-600 border-t-2 border-gray-600">
            <img src="" alt="">
            <p class="text-sm">
                2024 Arthur Silva - 
                <a href="" class="text-blue">@arthurazevedods</a>
            </p>
            <div class="ml-auto flex justify-center">icon</div>
            <div class="ml-auto flex justify-center">icon</div>
            <div class="ml-auto flex justify-center">icon</div>

        </footer>
    </div>
</template>

<style scoped>

</style>