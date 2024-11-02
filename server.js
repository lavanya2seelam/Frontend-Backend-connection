import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("Server is ready");
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          "id": 1,
          "title": "Introduction to APIs",
          "content": "An overview of API concepts and how they work in modern applications."
        },
        {
          "id": 2,
          "title": "Getting Started with Node.js",
          "content": "A beginner's guide to setting up and using Node.js for web development."
        },
        {
          "id": 3,
          "title": "Understanding PostgreSQL",
          "content": "Learn about PostgreSQL, its features, and how to work with relational databases."
        },
        {
          "id": 4,
          "title": "Building RESTful APIs",
          "content": "Steps and best practices for creating RESTful APIs using Node.js and Express."
        },
        {
          "id": 5,
          "title": "Deploying Your Application",
          "content": "A guide on deploying applications to production, covering various hosting options."
        }
      ]
      res.send(jokes);
      // console.log(req);
      
})

const port=process.env.port || 5000;

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});