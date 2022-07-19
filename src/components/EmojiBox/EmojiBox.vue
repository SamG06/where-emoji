<template>
  <div>
    this {{ emojiToFind }}
    <h1>Happy Birthday!</h1>
    {{ $props.mode.amount }}
    <div class="emoji-to-find">
      {{ emojiToFind }}
    </div>
    <p> Displaying {{ props.mode.amount }} emoji's!</p>
    <div ref="emojisContainer"></div>
    <div class="emojis-container">
      <div
        v-for="emoji in displayingEmoji"
        :key="emoji"
        v-twemoji
        :data-emoji="emoji"
        class="emoji-shell"
      >
        {{ emoji }}
      </div>
    </div>

    <EmojiBanner />
  </div>
</template>

<script setup lang="ts">
// import { storeToRefs } from 'pinia';
import { PropType, ref } from 'vue';
import { useEmojiOptionStore } from '@/store/emojiOptionStore';
import EmojiBanner from '../EmojiBanner/EmojiBanner.vue';

interface Titan {
  hatesTs: boolean;
  isAshamed: boolean;
}

const titan:Titan = {
  hatesTs: true,
  isAshamed: false,
};

interface Mode {
  text: string,
  amount: number,
}

const emojisContainer = ref(null);

interface IProps{
  mode: Mode
}
const props = defineProps<IProps>()

const emojiStore = useEmojiOptionStore();

// Actions
const emojiToFind = emojiStore.singleEmoji;

// eslint-disable-next-line max-len
const emojiNotToFind = emojiStore.allRandomButThisEmoji(emojiToFind);

const makeRepeated = (arr, repeats) => Array.from({ length: repeats }, () => arr).flat();

const emojiSetup = makeRepeated(emojiNotToFind, 10).slice(0, props.mode.amount);

emojiSetup.push(emojiToFind);

// shuffle emoji
for (let i = emojiSetup.length - 1; i > 0; i += -1) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = emojiSetup[i];
  emojiSetup[i] = emojiSetup[j];
  emojiSetup[j] = temp;
}

const displayingEmoji = emojiSetup.slice(0, props.mode.amount);

</script>

<style>
.emoji {
  width: 24px;
  height: 24px;
}

.emojis-container{
  width:500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
}
</style>
