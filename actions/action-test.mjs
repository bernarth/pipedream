import axios from "axios";

export default {
  name: "Action-Test",
  version: "0.0.1",
  key: "action-test",
  description: "This is a public action test.",
  type: "action",
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
    const response = await axios.post(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`, {}, { headers });

    return response.data;
  },
};
