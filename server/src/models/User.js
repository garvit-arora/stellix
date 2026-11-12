import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({name:{type:String,required:true,trim:true,maxlength:80},email:{type:String,required:true,unique:true,index:true,lowercase:true,trim:true},passwordHash:{type:String,default:null},authSubject:{type:String,unique:true,sparse:true,index:true},authProvider:{type:String,enum:['local','auth0'],default:'local'},avatar:{type:String,default:''},emailVerified:{type:Boolean,default:false},globalRole:{type:String,enum:['user','operator'],default:'user'}},{timestamps:true});
export default mongoose.model('User',userSchema);
