import axios from 'axios';

export default {
  name: 'Source-Test',
  version: '0.0.1',
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
    }
  },
  methods: {},
  async run({ $ }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`, {}, { headers });

    return response.data;
  },
};
