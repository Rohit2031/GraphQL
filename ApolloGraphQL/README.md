queries:
mutation createPost(
  $input: PostInput
){
  createPost(
    input:$input
  ){
    id
    title
    content
  }
}
=========================

query getPosts{
  getPosts{
    id
    title
    content
  }
}

======================
query getPost(
  $id:ID!
){
  getPost(
    id:$id
    
  ){
    id
    title
    content
  }
}

mutation updatePost(
  $id: ID!
  $input: PostInput
){
  updatePost(
    id:$id
    input:$input
  ){
    id
    title
    content
  }
}
=====
mutation deletePost(
  $id:ID!
  
){
  deletePost(
    id:$id
    
    
  )
  
}
======

=======================
Output:
{
  "data": {
    "createPost": {
      "id": "b3509073d7a39ee12114",
      "title": "Testing Title",
      "content": "Test Content"
    }
  }
}
===================

{
  "data": {
    "getPosts": [
      {
        "id": "b3509073d7a39ee12114",
        "title": "Testing Title",
        "content": "Test Content"
      }
    ]
  }
}
===================

{
  "data": {
    "getPost": {
      "id": "b3509073d7a39ee12114",
      "title": "Testing Title",
      "content": "Test Content"
    }
  }
}

=======
{
  "data": {
    "updatePost": {
      "id": "b3509073d7a39ee12114",
      "title": "Yes this is update title",
      "content": "this is update content "
    }
  }
}
=======
{
  "data": {
    "deletePost": "90ea2a00d5e172b21ad1"
  }
}
==============================
Insert:value:
{
  "input": {
    "title": "Testing Title",
    "content": "Test Content"
  }
}
==================
{
  "id": "b3509073d7a39ee12114"
}

=========

{
  "id": "b3509073d7a39ee12114",
  "input": {
    "title": "Yes this is update title",
    "content": "this is update content "
  }
}
====
{
  "id": "90ea2a00d5e172b21ad1"
}