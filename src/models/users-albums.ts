import { z } from "zod";
import { Album } from "./albums";

const SavedAlbumObject = z.object({
  added_at: z.string(),
  album: Album,
});

const UsersAlbums = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: z.array(SavedAlbumObject),
});

type UsersAlbumsType = z.infer<typeof UsersAlbums>;

export { UsersAlbums, UsersAlbumsType };
