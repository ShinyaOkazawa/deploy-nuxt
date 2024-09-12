<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config);

</script>

<template>
  <div>
    <p>hoge</p>
    <p>{{ `APP_ENV: ${$config.public.APP_ENV}` }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
