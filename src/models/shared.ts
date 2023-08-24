import { z } from "zod";

const ExternalUrls = z.object({
  spotify: z.string(),
});

const ExternalIds = z.object({
  isrc: z.string().optional(),
  ean: z.string().optional(),
  upc: z.string().optional(),
});

const Followers = z.object({
  href: z.string().nullable(),
  total: z.number(),
});

const Images = z.object({
  height: z.number(),
  width: z.number(),
  url: z.string(),
});

const Restrictions = z.object({
  reason: z.string(),
});

const Copyrights = z.object({
  text: z.string(),
  type: z.string(),
});

const LinkedFrom = z.object({
  external_urls: ExternalUrls,
});

export {
  ExternalUrls,
  ExternalIds,
  Followers,
  Images,
  Restrictions,
  Copyrights,
  LinkedFrom,
};
