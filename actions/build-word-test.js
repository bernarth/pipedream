export default {
  name: "Build-Word-Test",
  version: "0.0.1",
  key: "build-word-test",
  description: "This is a dictionary builder test.",
  type: "action",
  props: {
    phonetic: {
      type: 'string',
      label: 'Phonetic',
      description: 'The word phonetic.',
      optional: false
    },
    word: {
      type: 'string',
      label: 'Word',
      description: 'The word to search for.',
      optional: false
    }
  },
  methods: {},
  async run({ $ }) {
    return {
      word: this.word,
      phonetic: this.phonetic
    }
  },
};
