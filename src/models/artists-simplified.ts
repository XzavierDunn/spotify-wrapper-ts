import { z } from "zod";
import { ExternalUrls } from "./shared";

const SimplifiedArtist = z.object({
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  name: z.string(),
  type: z.string(),
  uri: z.string(),
});

type SimplifiedArtistType = z.infer<typeof SimplifiedArtist>;

export { SimplifiedArtist, SimplifiedArtistType };
