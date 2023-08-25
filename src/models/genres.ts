import { z } from "zod";

const GenresObject = z.object({
  genres: z.array(z.string()),
});

type GenresType = z.infer<typeof GenresObject>;

export { GenresObject, GenresType };
