const express = require('express')
const app = express()
const { expressGraphQL } = require('express-graphql')
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql')

const authors = [
    {id:1,name:'Rohit'},
    {id:2,name:'Rohit kumar'},
    {id:3,name:'Rohit kumar prajapati'}
]

const books = [
    {id:1,name:'harry potter first',authorid:1},
    {id:2,name:'harry potter second',authorid:2},
    {id:3,name:'harry potter third',authorid:3},
    {id:4,name:'harry potter four',authorid:1},
    {id:5,name:'harry potter five',authorid:2},
    {id:6,name:'harry potter six',authorid:3}

]

const BookType = new GraphQLObjectType({
    name:'Book',
    description:'this represent the book written by author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorid : { type: GraphQLNonNull(GraphQLInt) },
        author:{
            type:AuthorType,
            resolve: (book) => {
                return authors.find(author => author.id === book.authorId )
            }
        }  


    })
})

const AuthorType = new GraphQLObjectType({
    name:'Author',
    description:'this represent the author of a book ',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books:{
            type: new GraphQLList(BookType),
            resolve: (author) => {
                return books.filter(book => book.authorid === author.id)
            }
        }
    })
})
const RootQueryType = new GraphQLObjectType({
    name:'Query',
    description:'Root Query',
    fields:() =>({
        books:{
            type:new GraphQLList (BookType),
            description:'List of all books',
            resolve: () => books
        },
        authors:{
            type:new GraphQLList (AuthorType),
            description:'List of all Authors',
            resolve: () => authors
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})
// here basic hello world object create 
// const schema = new GraphQLSchema({
//     query:new GraphQLObjectType({
//         name:'helloworld',
//         fields:() => ({
//             message:{ type: GraphQLString,
//                 resolve:() => 'hello rohit'
//              }
//         })
//     })
// })

app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true

}))
   

app.listen(5000, () => console.log('Server is Running successful'))