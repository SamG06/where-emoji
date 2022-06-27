/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import EmojiBox from './EmojiBox.vue';

describe('EmojiBox.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const mode = {
    text: 'easy',
    amount: 10,
  };

  const wrapper = mount(EmojiBox, {
    propsData: { mode },
    global: {
      plugins: [createPinia()],
    },
  });

  it('renders the right amount of emoji based on mode', () => {
    const emoji = wrapper.findAll('div.emoji');

    expect(emoji.length).toBe(mode.amount);
  });

  it('renders only one right emote', () => {
    const emojiToFind = wrapper.find('.emoji-to-find').text();

    const emojiToChoose = wrapper.findAll(`div[data-emoji="${emojiToFind}"]`);

    expect(emojiToChoose.length).toBe(1);
  });
});
