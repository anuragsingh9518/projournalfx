import "dotenv/config";
import {z} from "zod";

const envSchema = z.object({
    NODE_ENV:z.enum(["development","production","test"]).default("development"),
    PORT:z.coerce.number().default(5000),
    MONGO_URL:z.string().min(1,"MONGO_URL")
});
const parsed = envSchema.safeParse(process.env);

if(!parsed.success){
    console.error("invalid envorment variable");
    parsed.error.issues.forEach((issue)=>{
        console.error(`-${issue.path.join(".")}:${issue.message}`);
    });
    process.exit(1);
}

export const env = parsed.data;