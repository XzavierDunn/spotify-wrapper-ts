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

  // const playlist = await client.playlists.get_playlist({
  //   playlist_id: "37i9dQZF1DX8NMUtC3b3gL",
  // });
  // if (playlist.result) {
  //   console.log("Name: " + playlist.result.name);
  //   console.log("Type: " + playlist.result.type);
  //   console.log("Description: " + playlist.result.description);
  //   console.log("Followers: " + playlist.result.followers.total);
  //   console.log(
  //     "Owner - Followers: " +
  //       playlist.result.owner.display_name +
  //       " - " +
  //       playlist.result.owner.followers?.total
  //   );
  //   console.log("Total tracks: " + playlist.result.tracks.total);
  //   console.log("\n");
  //   for (let i = 0; i < 10; i++) {
  //     console.log(
  //       "Track " +
  //         (i + 1) +
  //         " - " +
  //         playlist.result.tracks.items![i].track.name +
  //         " By: " +
  //         playlist.result.tracks.items![i].track.artists![0].name
  //     );
  //   }
  //   console.log("\n");
  // } else {
  //   console.log(playlist.error);
  // }
};

testing();
