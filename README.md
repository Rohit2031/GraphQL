# GraphQL
All_Files_Folder
Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.
Apollo Server provides:

    Straightforward setup, so your client developers can start fetching data quickly
    Incremental adoption, allowing you to add features as they're needed
    Universal compatibility with any data source, any build tool, and any GraphQL client
    Production readiness, enabling you to ship features faster
    
    differnce between REST and GraphQL
    Request1:         |  Response1:
query {           |  {
  user (id: 1) {  |    "user": {
    id            |       "id": 1
  }               |     }
}                 |  }
----------------------------------------
Request2:         |   Response2:
query {           |   {
  user (id: 1) {  |     "user": {
    id            |       "id": 1
    name          |       "name": "Elmo"
  }               |     }
}                 |   }

About Schema
Your GraphQL server uses a schema to describe the shape of your data graph. This schema defines a hierarchy of types with fields that are populated from your back-end data stores. The schema also specifies exactly which queries and mutations are available for clients to execute against your data graph.

Abour Resolver
A resolver is a function that's responsible for populating the data for a single field in your schema. It can populate that data in any way you define, such as by fetching data from a back-end database or a third-party API.
