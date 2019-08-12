const express = require('express'),
      graphqlHTTP = require('express-graphql'),
      schema = require('./schema/schema'),
      mongoose = require('mongoose'),
      db = require('./config').dbURI,
      cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors())

// connect to mlab database
mongoose
  .connect(
    db,
    {useNewUrlParser: true}
  )
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
