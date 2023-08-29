import { connectToDB } from "@utils/database";
import Project from "@models/project";


export const GET = async(request,{params}) => {
  try {
      await connectToDB;
      console.log("projects:");
      const projects = await Project.find({
        creator: params.id
      });
      console.log(request);
       console.log(projects);
      return new Response(JSON.stringify(projects),{status:200})
  } catch (error) {
      return new Response("Failed to fetch projects",{status:200})
  }
}