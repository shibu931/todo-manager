const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        require:[true,"email Required!!"]
    },
    password:{
        type:String,
        require:[true,"Password Required!"]
    },
    about:String,
    profileURL:String,
})

export const User = mongoose.models.users || mongoose.model("users",UserSchema) 