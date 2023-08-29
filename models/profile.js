import {Schema,model,models } from "mongoose";

const ProfileSchema = new Schema ({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    isinvestor:{
        type: Boolean,
        required:[true,'Need to know if it is investor or B. Owner'],

    },

    fullname:{
        type: String,
        required:[true,'Need to know The full name'],

    },

    phonenbr:{
        type: String,
        required:[true,'Need to the phone number '],

    },

    bio:{
        type: String,
        required:[true,'your story/vision'],

    },

    identification:{
        type: String,
    },

    businesslicense:{
        type: String,
    },
})

const Profile = models.Profile || model ('Profile',ProfileSchema);

export default Profile;