import { z } from "zod";
import { InfoType } from "../client/client";

type FetchData = {
  url: string;
  token: string;
  method: "GET" | "PUT" | "DELETE";
  body: BodyInit | null | undefined;
};

async function error_handler<T extends z.ZodType<any, any, any>>(
  fetchData: FetchData,
  requestData: { status_code: number; response: any },
  info: InfoType,
  object?: z.infer<T>
): Promise<{
  result?: string | z.TypeOf<T> | undefined;
  error?: any;
}> {
  try {
    let recovered = false;
    let status_code = requestData.status_code;
    let error_message = requestData.response.error.message;

    if (status_code === 401) {
      if (error_message === "The access token expired") {
        await info.refresh_token_function();
        fetchData.token = info.client_access_token;
        recovered = true;
      }
    } else if (status_code === 404) {
      if (error_message === "Invalid username") {
        await info.refresh_user_token_function();
        fetchData.token = info.user_access_token;
        recovered = true;
      }
    }

    if (recovered) {
      switch (fetchData.method) {
        case "GET":
          return await get_req(fetchData.url, fetchData.token, object, info);
        case "PUT":
          return await put_req(
            fetchData.url,
            fetchData.token,
            fetchData.body,
            info
          );
        case "DELETE":
          return await delete_req(fetchData.url, fetchData.token, info);
      }
    } else {
      throw new Error(`${status_code} -> ${error_message}`);
    }
  } catch (e) {
    throw e as Error;
  }
}

async function fetch_wrapper(input: FetchData) {
  let data = await fetch(input.url, {
    headers: {
      Authorization: `Bearer ${input.token}`,
    },
    body: input.body,
    method: input.method,
  });

  let response;
  try {
    response = await data.json();
  } catch {
    response = data.statusText;
  }
  return { status_code: data.status, response };
}

async function get_req<T extends z.ZodType<any, any, any>>(
  url: string,
  token: string,
  object: z.infer<T>,
  info: InfoType
): Promise<{ result?: z.TypeOf<T>; error?: any }> {
  let fetchData: FetchData = { url, method: "GET", body: null, token };
  let result = await fetch_wrapper(fetchData);

  if (result.status_code != 200)
    return await error_handler(fetchData, result, info, object);
  return { result: object.parse(result.response) };
}

async function put_req(
  url: string,
  token: string,
  body: BodyInit | null | undefined,
  info: InfoType
): Promise<{ result?: string; error?: any }> {
  let fetchData: FetchData = { url, method: "GET", body, token };
  let result = await fetch_wrapper(fetchData);

  if (result.status_code != 200)
    return await error_handler(fetchData, result, info);
  return { result: result.response };
}

async function delete_req(
  url: string,
  token: string,
  info: InfoType
): Promise<{ result?: string; error?: any }> {
  let fetchData: FetchData = { url, method: "GET", body: null, token };
  let result = await fetch_wrapper(fetchData);

  if (result.status_code != 200)
    return await error_handler(fetchData, result, info);
  return { result: result.response };
}

export { get_req, put_req, delete_req };
