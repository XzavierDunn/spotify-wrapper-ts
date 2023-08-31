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

  let devices = await client.player.get_available_devices();
  if (devices.result) {
    console.log(devices.result.devices);
  } else {
    console.log(devices.error);
  }

  // let current_track = await client.player.get_currently_playing_track();
  // if (current_track.result) {
  //   console.log(
  //     "Device Name: " + current_track.result.device
  //       ? current_track.result.device?.name
  //       : "Unavailable"
  //   );
  //   console.log("Playing?: " + current_track.result.is_playing);
  //   console.log(
  //     "Track Name: " +
  //       current_track.result.item?.name +
  //       " - " +
  //       current_track.result.item?.artists
  //         ?.map((artist) => artist.name)
  //         .join(", ")
  //   );
  //   console.log("Repeat State: " + current_track.result.repeat_state);
  //   console.log("Shuffle State: " + current_track.result.shuffle_state);
  //   console.log("Timestamp: " + current_track.result.timestamp);
  //   console.log("Context Type: " + current_track.result.context?.type);
  // } else {
  //   console.log(current_track.error);
  // }

  // let result = await client.player.start_or_resume_playback({
  //   // context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
  //   uris: ["spotify:track:1301WleyT98MSxVHPZCA6M"],
  //   // offset: { position: 5 },
  //   // position_ms: 0,
  // });
};
testing();
