import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";

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

type ArtistType = z.infer<typeof Artist>;
type SeveralArtistsType = z.infer<typeof SeveralArtists>;

export { Artist, SeveralArtists, FullArtists, ArtistType, SeveralArtistsType };
