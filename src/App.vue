<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <main>
        <RouterView />
    </main>
</template>

<style lang="scss">
main {
    display: flex;
    justify-content: center;
    width: 100vw;
}
</style>
