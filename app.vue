<template>
  <div>
    <p>{{ `APP_ENV: ${$config.public.APP_ENV}` }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
