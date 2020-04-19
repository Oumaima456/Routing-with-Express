const express=require("express")
const app=express ()
let hours=new Date().getHours()



app.get("/" ,(req,res)=>{
    ((hours>=8)
   && (hours<=17)) ? res.sendFile(__dirname+"/public/home.html"):res.sendFile(__dirname+"/public/closed.html")
})


app.use(express.static(__dirname + "/public"))

const port=process.env.port||5000
app.listen(port,()=>console.log("server is running at port 5000"))
