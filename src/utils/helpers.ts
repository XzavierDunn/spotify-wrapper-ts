import { z } from "zod";
import { CustomError } from "../models/client";

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

const check_user_token = (user_token: string): { error?: CustomError } => {
  if (!user_token || user_token === "") {
    return {
      error: { message: "This endpoint requires a user access token" },
    };
  }
  return {};
};

const scope_check = (error: CustomError | undefined): boolean => {
  if (error && error.status_code === 403) return true;
  return false;
};

export {
  handle_optional,
  Optional,
  OptionalType,
  check_user_token,
  scope_check,
};
