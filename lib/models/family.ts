import mongoose, { Schema } from "mongoose";

interface FamilyParams extends Document {
    avatar : string;
    fullName: string ;
    userName: string;
    bio: string;
    admins ?: mongoose.Schema.Types.ObjectId[];
    familyMembers ?: mongoose.Schema.Types.ObjectId[];
    posts ?: mongoose.Schema.Types.ObjectId[];
}

const familySchema = new Schema<FamilyParams>(
    {
        avatar : {
            type : String,
            required: [true , "avatar of family is required 😒😒"],
        },
        fullName : {
            type : String,
            trim: true,
            required: [true , " full name of family is required 😒😒"],
            minLength:[5, "name of family must be less than 5 characters 😒😒"],
            maxLength : [50 , "name must be not less than 50 characters 😒😒"]
        },
        userName : {
            type : String,
            trim: true,
            required: [true , " User name of family is required 😒😒"],
            minLength:[3, " User name of family must be less than 3 characters 😒😒"],
            maxLength : [35 , "name must be not less than 35 characters 😒😒"]
        },
        bio : {
            type : String,
            trim: true,
            required: [true , " Family bio is required 😒😒"],
            minLength:[3, " User name of family must be less than 3 characters 😒😒"],
            maxLength : [150 , "bio must be not less than 150 characters 😒😒"],
        },
        admins : {
            type : [Schema.Types.ObjectId],
            ref: "Users",
            required: [true , "Admins bio is required 😒😒"],
        },
        familyMembers : {
            type : [Schema.Types.ObjectId],
            ref: "Users",
        },
        posts : {
            type : [Schema.Types.ObjectId],
            ref: "FamilyNews",
        },
    },
    {
        timestamps : true,
    },
);

const Family = mongoose.models.Family || mongoose.model<FamilyParams>("Family" , familySchema);

export default Family;