<template>
  <n-config-provider :theme="theme">
    <n-space>
      <n-button @click="theme = darkTheme">
        Dark
      </n-button>
      <n-button @click="theme = null">
        Light
      </n-button>
    </n-space>
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup>
import { darkTheme } from 'naive-ui';
import { ref } from 'vue';

const theme = ref(null);
</script>

<style>

</style>
