/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import { setActivePinia, createPinia } from 'pinia';
import twemoji from 'twemoji';
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
      directives: {
        twemoji: (el) => {
          // eslint-disable-next-line no-param-reassign
          el.innerHTML = twemoji.parse(el.innerHTML);
        },
      },
    },
  });

  it('renders the right amount of emoji based on mode', () => {
    expect(wrapper.findAll('.emoji-shell .emoji')).toHaveLength(mode.amount);
  });

  it('renders only one right emote', () => {
    const emojiToFind = wrapper.find('.emoji-to-find').text();

    expect(wrapper.findAll(`div[data-emoji="${emojiToFind}"]`)).toHaveLength(1);
  });
});
