import { z } from "zod";
import {
  ClientInfo,
  ClientInfoType,
  CredentialsType,
  InfoType,
} from "../client/client";
import { existsSync, readFileSync, writeFileSync } from "fs";

async function get_access_token(
  credentials: CredentialsType,
  refresh = false
): Promise<ClientInfoType> {
  if (!refresh) {
    let exists: boolean = existsSync("./credentials.json");
    if (exists) {
      return ClientInfo.parse(
        JSON.parse(readFileSync("./credentials.json").toString())
      );
    }
  }

  let clientInfo = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${credentials.client_id}&client_secret=${credentials.client_secret}`,
  })
    .then((res) => res.json())
    .then((data) => ClientInfo.parse(data))
    .catch((e) => {
      throw e as Error;
    });

  writeFileSync("./credentials.json", JSON.stringify(clientInfo));
  return clientInfo;
}

async function request_user_authorization(
  code: string,
  credentials: CredentialsType
) {
  // RUN CONSOLE LOG TO GET CODE, THEN UPDATE CODE IN CONFIG.json
  // console.log(
  //   `https://accounts.spotify.com/authorize?client_id=${credentials.client_id}&response_type=code&redirect_uri=${credentials.redirect_uri}&scope=user-library-read user-library-modify user-read-playback-position user-read-playback-state user-modify-playback-state`
  // );
  // throw new Error("bruh");

  // RUN THIS AFTER UPDATING CODE, THEN UPDATE user-stuff IN CONFIG.JSON
  let formBody: string[] = [];
  formBody.push(encodeURIComponent("code") + "=" + encodeURIComponent(code));
  formBody.push(
    encodeURIComponent("redirect_uri") +
      "=" +
      encodeURIComponent(credentials.redirect_uri)
  );
  formBody.push(
    encodeURIComponent("grant_type") +
      "=" +
      encodeURIComponent("authorization_code")
  );

  let finalBody: string = formBody.join("&");

  let auth = Buffer.from(
    credentials.client_id + ":" + credentials.client_secret
  ).toString("base64");
  let clientInfo = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + auth,
    },
    body: finalBody,
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => {
      throw e as Error;
    });

  console.log(clientInfo);
}

async function fetch_wrapper(
  input: RequestInfo | URL,
  access_token: string,
  method: string | undefined = "get",
  body: BodyInit | null | undefined = null
) {
  let data = await fetch(input, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    method,
    body,
  });

  let response;
  try {
    response = await data.json();
  } catch {
    response = data.statusText;
  }
  return { status_code: data.status, response };
}

async function error_handler<T extends z.ZodType<any, any, any>>(
  url: string,
  object: z.infer<T>,
  result: {
    status_code: number;
    response: any;
  },
  info: InfoType
) {
  if (result.status_code === 401) {
    if (result.response.error.message === "The access token expired") {
      await info.refresh_token();
    } else if (result.response.error.message === "Missing token") {
      throw new Error(result.response.error.message);
    } else {
      throw new Error(
        `${result.status_code} -> ${result.response.error.message}`
      );
    }
  } else if (result.status_code === 204) {
    if (result.response === "No Content") {
      return { error: result };
    }
  } else {
    throw new Error(
      `${result.status_code} -> ${result.response.error.message}`
    );
  }

  return get(url, object, info);
}

async function get<T extends z.ZodType<any, any, any>>(
  url: string,
  object: z.infer<T>,
  info: InfoType,
  user_token_required = false
): Promise<{ result?: z.TypeOf<T>; error?: any }> {
  let result = await fetch_wrapper(
    url,
    !user_token_required
      ? info.clientInfo.access_token
      : info.user_access_token!
  );

  if (result.status_code != 200)
    return await error_handler(url, object, result, info);
  return { result: object.parse(result.response) };
}

async function put(url: string, body: any, info: InfoType) {
  let result = await fetch_wrapper(url, info.user_access_token!, "PUT", body);
  if (result.status_code != 200) throw new Error(result.response);
  return { result: result.response };
}

async function delete_method(url: string, body: any, info: InfoType) {
  let result = await fetch_wrapper(
    url,
    info.user_access_token!,
    "DELETE",
    body
  );
  if (result.status_code != 200) throw new Error(result.response);
  return { result: result.response };
}

export {
  get_access_token,
  request_user_authorization,
  get,
  put,
  delete_method,
};
