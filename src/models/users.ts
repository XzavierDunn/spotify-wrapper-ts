import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";

const ExplicitContent = z.object({
  filter_enabled: z.boolean(),
  filter_locked: z.boolean(),
});

const User = z.object({
  country: z.string().optional(),
  display_name: z.string(),
  email: z.string().optional(),
  explicit_content: ExplicitContent.optional(),
  external_urls: ExternalUrls,
  followers: Followers,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  product: z.string().optional(),
  type: z.string(),
  uri: z.string(),
});

type UserType = z.infer<typeof User>;

export { User, UserType };
