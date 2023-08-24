import { z } from "zod";
import { Album } from "./albums";

const SavedAlbumObject = z.object({
  added_at: z.string(),
  album: Album,
});

const UsersAlbums = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(SavedAlbumObject).optional(),
});

type UsersAlbumsType = z.infer<typeof UsersAlbums>;

export { UsersAlbums, UsersAlbumsType };
