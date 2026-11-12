import mongoose from 'mongoose';
const schema=new mongoose.Schema({organization:{type:mongoose.Schema.Types.ObjectId,ref:'Organization',required:true,unique:true,index:true},status:{type:String,enum:['active','suspended','deleted'],default:'active'},settings:{timezone:{type:String,default:'UTC'},retentionDays:{type:Number,default:365,min:30,max:730}}},{timestamps:true});
export default mongoose.model('TenantWorkspace',schema);
