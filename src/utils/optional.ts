import { z } from "zod";

const Optional = z.object({
  market: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
});

type OptionalType = z.infer<typeof Optional>;

const handle_optional = (optional?: OptionalType): OptionalType => {
  optional = {
    limit: optional?.limit || 20,
    offset: optional?.offset || 0,
    market: optional?.market,
  };

  return optional;
};

export { handle_optional, Optional, OptionalType };
