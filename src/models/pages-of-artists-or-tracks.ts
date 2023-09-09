import { z } from "zod";
import { Artist } from "./artists";
import { Track } from "./tracks";

const ArtistorTrack = z.union([Artist, Track]);

const PagesofArtistsOrTracks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(ArtistorTrack),
});

type PagesofArtistsOrTracksType = z.infer<typeof PagesofArtistsOrTracks>;

export { PagesofArtistsOrTracks, PagesofArtistsOrTracksType };
