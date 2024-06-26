import axios from "axios";

export default {
  name: "Action-Test",
  version: "0.0.3",
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
