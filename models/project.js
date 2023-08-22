import {Schema,model,models } from "mongoose";

const ProjectSchema = new Schema ({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    projectName:{
        type: String,
        required:[true,'Project name is required'],

    },
    
    tags:{
    type : String,
    required: [true,'Tags are required'],
    },
    
    desc:{
        type : String,
        required: [true,'Project Description is required'],
    },
    
    capital:{
        type : Number,
        required: [true,"Project's capital  is required"],
    },
    
    investment:{
        type: Number
    },
    
    investors:{
        type: Number
    }

})

const Project = models.Project || model ('Project',ProjectSchema);

export default Project;