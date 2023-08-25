import config from "./config.json";
import { Client } from "./src/client/client";
import { request_user_authorization } from "./src/utils/utils";

let testing = async () => {
  // await request_user_authorization(config.code, { ...config.spotify_info });

  let client: Client = await Client.create_client({
    ...config.spotify_info,
  });

  client.add_user_access_token(config["user-stuff"].access_token);

  let playback_state = await client.player.get_playback_state();
  if (playback_state.result) {
    console.log(playback_state.result);
  } else {
    console.log(playback_state.error);
  }
};
testing();
