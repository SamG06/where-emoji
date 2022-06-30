<template>
  <div class="container">
    <div class="content center-items">
      <h1>Where Emoji?</h1>
      <p style="margin-bottom:20px">
        Find the Emoji and win!
      </p>
      <n-carousel
        :slides-per-view="4"
        :space-between="20"
        draggable
        :touchable="false"
        autoplay
        :show-dots="false"
      >
        <n-carousel-item
          v-for="emoji in emojiOptions"
          :key="emoji"
          v-twemoji
          class="emoji"
        >
          {{ emoji }}
        </n-carousel-item>
      </n-carousel>

      <n-button
        style="margin-top:20px"
        size="large"
        type="primary"
        @click="$router.push('/play')"
      >
        Begin Game
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { useEmojiOptionStore } from '@/store/emojiOptionStore.js';

const { emojiOptions } = useEmojiOptionStore();
</script>

<style scoped>
  .emoji-scroll{
    font-size: 3em;
  }
.n-carousel{
  width:100%;
  max-width: 500px;
  height: auto;
  user-select: none;
}
  .emoji img{
    width:50px;
    height: 50px;
  }
</style>
