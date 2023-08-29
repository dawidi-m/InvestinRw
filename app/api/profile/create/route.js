import Profile from "@models/profile";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    console.log("hi");
    
    const { userId, role, fullname,phonenbr,bio,identification } = await request.json();
    // console.log(userId, role, fullname,phonenbr,bio,identification);
    try {
        await connectToDB();
        const newProfile = new Profile({ creator: userId, role, fullname,phonenbr,bio,identification });
       console.log(newProfile);
        await newProfile.save();
        return new Response(JSON.stringify(newProfile), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new profile", { status: 500 });
    }
}
