const gql = require('graphql-tag');
const {ApolloServer} = require('apollo-server')

const typeDefs = gql`
type User{
    email: String!
    avatar: String
    friends:[User!]!

}

type Pet{
    name: String!
    animaltype: String!
}

type Query{
    me: User!
    pet: Pet!
}
`
const resolvers = {
    Query:{
        me(){
            return{
                email:"del_mei@yahoo.com",
                avatar:"https://avatars.githubusercontent.com/u/40926855?v=4",
                friends: []
        }
    },

    pet(){
        return{
            name:"Rolly",
            animaltype:"Bunny"
        }
    }
}
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
.then(() => console.log('on port 4000'))