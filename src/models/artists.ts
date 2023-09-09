import { z } from "zod";
import { ExternalUrls, Followers, Images, cursors } from "./shared";

const Artist = z.object({
  external_urls: ExternalUrls.optional(),
  followers: Followers.optional(),
  genres: z.array(z.string()).optional(),
  href: z.string().optional(),
  id: z.string().optional(),
  images: z.array(Images).optional(),
  name: z.string().optional(),
  popularity: z.number().optional(),
  type: z.string().optional(),
  uri: z.string().optional(),
});

const SeveralArtists = z.object({
  artists: z.array(Artist),
});

const FullArtists = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(Artist).optional(),
});

const PagedArtists = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  cursors: cursors,
  total: z.number().optional(),
  items: z.array(Artist),
});

type ArtistType = z.infer<typeof Artist>;
type PagedArtistsType = z.infer<typeof PagedArtists>;
type SeveralArtistsType = z.infer<typeof SeveralArtists>;

export {
  Artist,
  SeveralArtists,
  FullArtists,
  PagedArtists,
  ArtistType,
  SeveralArtistsType,
  PagedArtistsType,
};
