export const schema = [`
  type Form {
    _id: String
  }

  type RootQuery {
    form(_id: String): Form
  }

  type RootMutation {
    submitForm(_id: String): Form
  }

  schema {
    query: RootQuery
    mutation: RootMutation;
  }
`];
