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

  // let devices = await client.player.get_available_devices();
  // if (devices.result) {
  //   console.log(devices.result.devices[0].name);
  //   console.log(devices.result.devices[0].volume_percent);
  // } else {
  //   console.log(devices.error);
  // }

  // console.log(await client.player.pause_playback());
  // console.log(await client.player.start_or_resume_playback({}));
  // console.log(await client.player.skip_to_next());

  const track = await client.episodes.get_episode("7zdc5hr5Noit79lKVrecyz");
  if (track.result) {
    console.log(track.result.name);
    console.log(track.result.uri);
    console.log(track.result.description);
    console.log(track.result.show.name);
    console.log(track.result.show.publisher);

    console.log(
      await client.player.add_item_to_playback_queue(track.result.uri)
    );
  }
};

testing();
