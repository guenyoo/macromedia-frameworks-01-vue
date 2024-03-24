module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 0,
        ignores: [],
      },
    ],
  },
};
