import { connectToDB  } from "@utils/database";
import Project from "@models/project";


export const POST = async(req) => {
    const{ projectName,userId,tags, desc,capital,investment, investors} = await req.json()
}

try {
    await connectToDB();

} catch (error) {
    
}
