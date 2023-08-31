import { existsSync } from "fs";
import config from "./config.json";
import user_credentials from "./user-credentials.json";

import { Client } from "./src/client/client";
import { request_user_authorization } from "./src/utils/authentication";

let testing = async () => {
  // await request_user_authorization(config.code, { ...config.spotify_info });

  let client: Client = await Client.create_client({
    ...config.spotify_info,
  });

  if (existsSync("./user-credentials.json")) {
    let user_credentials = require("./user-credentials.json");
    client.add_user_info(user_credentials);
  }

  const playlist = await client.playlists.get_playlist({
    playlist_id: "37i9dQZF1DX8NMUtC3b3gL",
  });
  if (playlist.result) {
    console.log(playlist.result);
  } else {
    console.log(playlist.error);
  }
};

testing();
