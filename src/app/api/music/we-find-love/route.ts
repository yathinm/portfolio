import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "We_Find_Love_Daniel_Caesar.mp3"
  );

  const file = await fs.readFile(filePath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Accept-Ranges": "bytes",
    },
  });
}


