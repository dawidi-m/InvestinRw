import { connectToDB  } from "@utils/database";
import Project from "@models/project";


export const POST = async(req) => {
    const{ projectName,userId,tags, desc,capital,investment, investors} = await req.json()

try {
    await connectToDB();
    const newProject = new Project({
        creator: userId,
        projectName,
        tags,
        desc,
        capital,
        investment,
        investors
    });

await newProject.save();
return new Response(JSON.stringify(newProject),{status:201})
} catch (error) {
    return new Response("Failed to create a new project",{status:500});
}

}