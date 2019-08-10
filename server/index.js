const express = require('express'),
      graphqlHTTP = require('express-graphql'),
      schema = require('./schema/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
