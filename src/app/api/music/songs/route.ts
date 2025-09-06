import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const dirPath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "Songs"
  );

  const entries = await fs.readdir(dirPath);
  const artistMap: Record<string, string> = {
    // Explicit mappings requested
    peaches: "Peaches - Kevin Abstract",
    we_find_love: "We Find Love - Daniel Caesar",
    scar_tissue: "Scar Tissue - Red Hot Chili Pepper",
    out_getting_ribs: "Out Getting Ribs - King Krule",
    the_man_who_cant_be_moved: "The Man Who Cant Be Moved - The Script",
  };

  const songs = entries
    .filter((name) => name.toLowerCase().endsWith(".mp3"))
    .map((file) => {
      const base = file.replace(/\.[^/.]+$/, "");
      const key = base.toLowerCase();
      const fallbackTitle = base.replace(/_/g, " ");
      const title = artistMap[key] ?? fallbackTitle;
      return {
        file,
        title,
        url: `/api/music/song/${encodeURIComponent(file)}`,
      };
    });

  return Response.json({ songs });
}


