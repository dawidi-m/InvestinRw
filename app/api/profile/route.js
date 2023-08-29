import { connectToDB } from "@utils/database";
import Profile from "@models/profile";


export const GET = async(request) => {
  try {
      await connectToDB;
      console.log("profiles:");
      const profiles = await Profile.find({}).populate('creator');
       console.log(profiles);
      return new Response(JSON.stringify(profiles),{status:200})
  } catch (error) {
      return new Response("Failed to fetch profiles",{status:200})
  }
}