import { existsSync, readFileSync, writeFileSync } from "fs";
import { ClientInfo, ClientInfoType, CredentialsType } from "../client/client";

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

  console.log("Requesting new client credentials");
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
  //   `https://accounts.spotify.com/authorize?client_id=${credentials.client_id}&response_type=code&redirect_uri=${credentials.redirect_uri}&scope=user-library-read user-library-modify user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing user-read-recently-played playlist-modify-public playlist-modify-private ugc-image-upload`
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

async function refresh_user_access_token(
  refresh_token: string,
  client_id: string,
  client_secret: string
) {
  let formBody: string[] = [];
  formBody.push(
    encodeURIComponent("refresh_token") +
      "=" +
      encodeURIComponent(refresh_token)
  );
  formBody.push(
    encodeURIComponent("grant_type") + "=" + encodeURIComponent("refresh_token")
  );
  let finalBody: string = formBody.join("&");

  let auth = Buffer.from(client_id + ":" + client_secret).toString("base64");
  return await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + auth,
    },
    body: finalBody,
  })
    .then((res) => res.json())
    .then((data) => ClientInfo.parse(data))
    .catch((e) => {
      throw e as Error;
    });
}

export {
  get_access_token,
  request_user_authorization,
  refresh_user_access_token,
};
