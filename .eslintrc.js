module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'airbnb'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/html-self-closing': 'off',
    'arrow-body-style': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
