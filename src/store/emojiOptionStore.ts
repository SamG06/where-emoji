import { defineStore } from 'pinia';

export type RootState = {
  emojiOptions: Array<string>
}

var a = 'TEST STRING'
var b = a as string; //Means the compiler will assume it's a string

export const useEmojiOptionStore = defineStore('emoji-options', {
  state: () => 
  ({
    emojiOptions: ['💘', '❤️', '🧡', '💛',3,'💚', '💙', '💜', '🤎', '🛎️', '🧳', '⏳️', '⌚️', '⏰', '⏱️', '⏲️', '🕰️', '🌡️', '🗺️', '🧭', '🎃', '🎄', '🧨', '🎈', '🎉', '🎊', '🪐', '💫', '⭐️', '🌟', '✨', '🌠', '🌌', '☁️', '⛅️', '⛈️', '🌤️', '🌥️', '🌧️', '🌨️', '🌩️', '🌪️', '🌫️', '🌬️', '🌀', '🌈', '🌂', '☂️', '☔️', '⛱️', '⚡️', '❄️', '☃️', '⛄️', '☄️', '🔥', '💧', '🌊', '💥', '💦', '💨', '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '☺️', '😚', '😙', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐️', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '😮‍', '💨', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '😶‍', '🌫️', '🥴', '😵‍', '💫', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😞', '😓', '😩', '😫', '🥱', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽️', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊'],
  } as RootState),

  getters: {
    // eslint-disable-next-line max-len
    singleEmoji: (state) => state.emojiOptions[Math.floor(Math.random() * state.emojiOptions.length)],
    allRandomButThisEmoji: (state) => (emoji) => state.emojiOptions.filter((v) => v !== emoji),
  },
});
