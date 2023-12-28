import mongoose from "mongoose"

const familySchema = new mongoose.Schema ({
    username : {
        type : String,
        required : true,
        unique: true,
        min : 3,
        max : 20
    },
    name : {
        type : String,
        required : true ,
        max : 50,
        min : 5,
    },
    bio : {
        type : String,
        required : true ,
        max : 100,
        min : 5,
    },
    members: Array , 
}, {
    timestamps : true,
})

const Families = mongoose.models.Families || mongoose.model("families", familySchema);

export default Families