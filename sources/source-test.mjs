import axios from 'axios';

export default {
  name: 'Source-Test',
  version: '0.0.2',
  key: 'source-test',
  description: 'This is a public source test.',
  type: 'source',
  props: {
    word: {
      type: 'string',
      label: 'Word',
      description: 'The word to search for.',
      optional: false,
      default: 'hello'
    },
    testProp: {
      type: 'string',
      label: 'Test Prop',
      description: 'The test prop.',
      optional: false
    },
  },
  methods: {},
  async run({ $ }) {
    const headers = {
      'Content-Type': 'application/json',
    };
    console.log(this.word);
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`, {}, { headers });

    return response.data;
  },
};
