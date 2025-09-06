import { promises as fs } from "fs";
import path from "path";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const filename = decodeURIComponent(params.filename);
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "Songs",
    filename
  );

  const file = await fs.readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Accept-Ranges": "bytes",
    },
  });
}


