import axios from "axios";
import { env } from "./env";

export const restartDeployment = async () => {
    console.log("Restarting deployment...");

    await axios.post("https://backboard.railway.app/graphql/v2", {
        "query": `mutation deploymentRestart { deploymentRestart(id: ${env.DEPLOYMENT_ID}) }`
    }, {
        headers: {
            "Authorization": `Bearer ${env.RAILWAY_TOKEN}`,
        }
    })

    console.log("Deployment restarted successfully...");
}
