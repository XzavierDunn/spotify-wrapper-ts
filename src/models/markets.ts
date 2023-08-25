import { z } from "zod";

const MarketsObject = z.object({
  markets: z.array(z.string()),
});

type MarketsType = z.infer<typeof MarketsObject>;

export { MarketsObject, MarketsType };
