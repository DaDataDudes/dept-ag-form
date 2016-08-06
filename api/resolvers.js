import { Forms } from './connectors.js';

const resolvers = {
  RootQuery: {
    form(_, { _id }) {
      return Forms.findOne({ _id });
    }
  },

  RootMutation: {
    submitForm(_, args) {
      return Forms.create(args);
    }
  }
};

export default resolvers;
