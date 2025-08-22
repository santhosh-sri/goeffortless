import { promises as fs } from "fs";
import { join } from "path";

export async function fetchServiceData(url) {  
  debugger
  try {
    const servicePath = `/src/data/${url}.json`;
    const filePath = join(process.cwd(), servicePath);
    const jsonData = await fs.readFile(filePath, "utf-8");
    return jsonData;
  } catch (err) {
    console.log("Error in fetching data", err);
  }
}

