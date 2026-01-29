import { promises as fs } from "fs";
import path from "path";

export async function GET(
  _req: Request,
  context: { params: Promise<{ filename: string }> },
) {
  const { filename } = await context.params;
  const safeName = decodeURIComponent(filename);
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "Songs",
    safeName,
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
