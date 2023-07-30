const mongoose =require('mongoose');
const url='mongodb+srv://sir00475:shot459@cluster0.ltzxkgo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connected to DB")).catch((e)=>console.log("Error found",e))