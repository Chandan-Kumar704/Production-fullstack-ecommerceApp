const mongoose=require("mongoose")

//  const MONGO_URL="mongodb+srv://CHANDAN_KUMAR:chandanjava3510@cluster0.bngg6iw.mongodb.net/userdb"
function Connect(){
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
    })
    .then(()=>{

        console.log("Mongo db connected");
    })
    .catch(()=>{
        console.log("Mongo db not connect");
    })
}
module.exports=Connect;