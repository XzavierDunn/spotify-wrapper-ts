import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";

const Artist = z.object({
  external_urls: ExternalUrls,
  followers: Followers.optional(),
  genres: z.array(z.string()).optional(),
  href: z.string(),
  id: z.string(),
  images: z.array(Images).optional(),
  name: z.string(),
  popularity: z.number().optional(),
  type: z.string(),
  uri: z.string(),
});

const SeveralArtists = z.object({
  artists: z.array(Artist),
});

type ArtistType = z.infer<typeof Artist>;
type SeveralArtistsType = z.infer<typeof SeveralArtists>;

export { Artist, SeveralArtists, ArtistType, SeveralArtistsType };
