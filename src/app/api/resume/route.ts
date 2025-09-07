import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "Resume",
    "Yathin_Mrudul_Resume.pdf"
  );

  try {
    const fileBuffer = await fs.readFile(filePath);
    const url = new URL(request.url);
    const download = url.searchParams.get("download") === "1";

    // Copy into a new Uint8Array to ensure an ArrayBuffer (not SharedArrayBuffer)
    const arrayBuffer: ArrayBuffer = new Uint8Array(fileBuffer).buffer;

    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": fileBuffer.length.toString(),
        "Content-Disposition": `${download ? "attachment" : "inline"}; filename="Yathin_Mrudul_Resume.pdf"`,
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch {
    return new Response("Resume not found", { status: 404 });
  }
}


