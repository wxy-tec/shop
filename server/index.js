const express=require('express')
const app=express()
// cors解决跨域问题，因为前后端接口localhost不一样
app.use(require('cors')())
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/my-mall',{
    useNewUrlParser:true,
    useUnifiedTopology: true
    // useFindAndModify:true,
    // useCreateIndex:true,
})

const Article=mongoose.model('Article',new mongoose.Schema({
    title:{type:String},
    body:{type:String},
}))


app.get('/',async(req,res)=>{
    res.send('index')
})
//新增用户
app.post('/api/articles',async(req,res)=>{
    const article=await Article.create(req.body)
    res.send(article)
})

// 用户列表
app.get('/api/articles',async(req,res)=>{
    const articles=await Article.find()
    res.send(articles)
})

// 删除用户
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})

// 用户详情
app.get('/api/articles/:id',async(req,res)=>{
    const article=await Article.findById(req.params.id)
    res.send(article)
})

//x修改用户
app.put('/api/articles/:id',async(req,res)=>{
    const article=await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(article)
})
app.listen(3001,()=>{
    console.log('http://localhost:3001/');
})