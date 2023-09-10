import { z } from "zod";
import { FetchDataType } from "../utils/requests";

const Credentials = z.object({
  client_id: z.string(),
  client_secret: z.string(),
  redirect_uri: z.string(),
});

let ClientInfo = z.object({
  access_token: z.string().optional(),
  token_type: z.string().optional(),
  expires_in: z.number().optional(),
  refresh_token: z.string().optional(),
  scope: z.string().optional(),
});

type InfoType = {
  api_url: string;
  client_access_token: string;
  user_access_token: string;
  error_handler: <T>(
    status_code: number,
    input: { error: any },
    fetchData: FetchDataType
  ) => Promise<{ result?: T; error?: CustomError }>;
  submit_request: <T>(
    input: FetchDataType
  ) => Promise<{ result?: T; error?: CustomError }>;
};

type CredentialsType = z.infer<typeof Credentials>;
type ClientInfoType = z.infer<typeof ClientInfo>;

type CustomError = { message: string; status_code?: number; scopes?: string[] };

export {
  Credentials,
  CredentialsType,
  ClientInfo,
  ClientInfoType,
  InfoType,
  CustomError,
};
