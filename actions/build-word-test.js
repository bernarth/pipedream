export default {
  name: "Build-Word-Test",
  version: "0.0.1",
  key: "build-word-test",
  description: "This is a dictionary builder test.",
  type: "action",
  props: {
    meanings: {
      type: 'object[]',
      label: 'Meanings',
      description: 'The meaning for a word.',
      optional: false,
      default: 'hello'
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
    if (this.meanings && this.meanings.length > 0) {
      const meaning = this.meanings[0];

      return {
        word: this.word,
        meaning: `${meaning.partOfSpeech}: ${meaning.definitions[0].definition}`
      }
    }

    return {
      word: this.word,
      meaning: ""
    }
  },
};
