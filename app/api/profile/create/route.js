import Prompt from "@models/profile";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, isInvestor, fullname,phonenbr,bio,identification,businesslicense  } = await request.json();

    try {
        await connectToDB();
        const newProfile = new Profile({ creator: userId, isInvestor, fullname,phonenbr,bio,identification,businesslicense });

        await newProfile.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new profile", { status: 500 });
    }
}
