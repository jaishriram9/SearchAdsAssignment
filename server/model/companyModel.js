import mongoose from "mongoose";
const Schema = mongoose.Schema;

const companySchema = Schema({
  name: {
    unique: true,
    required: true,
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  companyId:{
    type:Number,
    required:true
  }
});

const Company = mongoose.model("Company", companySchema);
export default Company;
