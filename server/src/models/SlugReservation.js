import mongoose from 'mongoose';
const schema=new mongoose.Schema({slug:{type:String,required:true,unique:true,index:true,lowercase:true},organization:{type:mongoose.Schema.Types.ObjectId,ref:'Organization',default:null},status:{type:String,enum:['pending','active','retired'],default:'pending'},expiresAt:{type:Date,default:()=>new Date(Date.now()+10*60_000)}},{timestamps:true});
schema.index({expiresAt:1},{expireAfterSeconds:0,partialFilterExpression:{status:'pending'}});
export default mongoose.model('SlugReservation',schema);
