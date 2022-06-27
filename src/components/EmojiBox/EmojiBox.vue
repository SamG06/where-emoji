<template>
  <div>
    this {{ emojiToFind }}
    <h1>Happy Birthday!</h1>
    {{ $props.mode.amount }}
    <div class="emoji-to-find">
      {{ emojiToFind }}
    </div>
    <p> Displaying {{ props.amount }} emoji's!</p>

    <div class="emojis-container">
      <div
        v-for="emoji in displayingEmoji"
        :key="emoji"
        :data-emoji="emoji"
        class="emoji"
      >
        {{ emoji }}
      </div>
    </div>

    <EmojiBanner />
  </div>
</template>

<script setup>
// import { storeToRefs } from 'pinia';
import { useEmojiOptionStore } from '@/store/emojiOptionStore.js';
import EmojiBanner from '../EmojiBanner/EmojiBanner.vue';

const props = defineProps({
  mode: {
    type: Object,
    required: true,
  },
});

const emojiStore = useEmojiOptionStore();

// const { emojiOptions } = storeToRefs(emojiStore);

// Actions
const emojiToFind = emojiStore.singleEmoji;

// eslint-disable-next-line max-len
const emojiNotToFind = emojiStore.allRandomButThisEmoji(emojiToFind);

const makeRepeated = (arr, repeats) => Array.from({ length: repeats }, () => arr).flat();

const notToFindShuffle = makeRepeated(emojiNotToFind, 10);

// shuffle emoji
for (let i = notToFindShuffle.length - 1; i > 0; i += -1) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = notToFindShuffle[i];
  notToFindShuffle[i] = emojiNotToFind[j];
  notToFindShuffle[j] = temp;
}

notToFindShuffle.unshift(emojiToFind);

const displayingEmoji = notToFindShuffle.slice(0, props.mode.amount);

</script>

<style scoped></style>
