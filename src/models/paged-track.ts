import { z } from "zod";
import { ExternalUrls } from "./shared";
import { SimplifiedTrack } from "./tracks-simplified";

const Context = z.object({
  type: z.string(),
  href: z.string(),
  external_urls: ExternalUrls,
  uri: z.string(),
});

const PagedTrackItem = z.object({
  track: SimplifiedTrack,
  played_at: z.string(),
  context: Context.nullable(),
});

const PagedTracks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  cursors: z.object({
    after: z.string(),
    before: z.string(),
  }),
  total: z.number().optional(),
  items: z.array(PagedTrackItem),
});

type PagedTracksType = z.infer<typeof PagedTracks>;

export { PagedTracks, PagedTracksType };
