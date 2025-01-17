const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index')

// const app = express()
app.use(cors({
    origin: 'https://chikku-chat.vercel.app',  // Replace with your frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true  // Adjust as per your application's needs
}))
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

//api endpoints
app.use('/api',router)

connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log("server running at " + PORT)
    })
})



app.get('/api/messages', (req, res) => {
    res.json({ message: 'Hello from backend!' });
  });
  

