export const schema = [`
  type Form {
    id: String
  }

  type Mutation {
    submitForm(id: String): Form
  }

  type Query {
    form(id: String): Form
  }

  schema {
    query: Query
    mutation: Mutation;
  }
`];