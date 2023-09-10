import { z } from "zod";

const FetchData = z.object({
  method: z.enum(["GET", "PUT", "POST", "DELETE"]),
  url: z.string(),
  token: z.string(),
  body: z.string().optional(),
  object: z.any().optional(), // TODO: restrict to zod objects
  user: z.boolean().optional(),
});

type FetchDataType = z.infer<typeof FetchData>;

async function fetch_wrapper(input: FetchDataType): Promise<{
  status_code: number;
  response: string;
}> {
  let data = await fetch(input.url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${input.token}`,
    },
    body: input.body,
    method: input.method,
  });

  let response: string;
  try {
    response = await data.json();
  } catch {
    response = data.statusText;
  }
  return { status_code: data.status, response };
}

async function handle_request<T>(input: FetchDataType): Promise<{
  status_code: number;
  result: string | T;
}> {
  let { status_code, response } = await fetch_wrapper(input);
  let result: string | T = response;

  if (input.object && input.object.safeParse(response).success) {
    result = input.object.parse(response) as T;
  }

  return { status_code, result };
}

export { handle_request, FetchData, FetchDataType };
