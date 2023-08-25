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
  height: z.number().nullable(),
  width: z.number().nullable(),
  url: z.string().nullable(),
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

const authors = z.array(
  z.object({
    name: z.string(),
  })
);

const narrators = z.array(z.object({ name: z.string() }));

const Resume_Point = z.object({
  fully_played: z.boolean(),
  resume_position_ms: z.number(),
});

export {
  ExternalUrls,
  ExternalIds,
  Followers,
  Images,
  Restrictions,
  Copyrights,
  LinkedFrom,
  authors,
  narrators,
  Resume_Point,
};
