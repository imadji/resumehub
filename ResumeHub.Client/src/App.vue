<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/navigation/Navigation.vue";
</script>

<template>
  <Navigation />
  <main class="main">
    <RouterView />
  </main>
</template>
<style>
.main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
