import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const posts = [];

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/posted',(req,res)=>{
    res.render("index.ejs", { posts });
})

app.get('/new',(req,res)=>{
    res.render('new.ejs')
})

app.post('/post',(req,res)=> {
    const newPost = {
        id:posts.length+1,
        image:req.body.image_url,
        name:req.body.player_name,
        description:req.body.player_record
    }
    posts.unshift(newPost);
    res.redirect('/posted')
})
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})