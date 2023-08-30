import config from "./config.json";
import user_credentials from "./user-credentials.json";

import { Client } from "./src/client/client";
import { request_user_authorization } from "./src/utils/authentication";

let testing = async () => {
  // await request_user_authorization(config.code, { ...config.spotify_info });

  let client: Client = await Client.create_client({
    ...config.spotify_info,
  });

  client.add_user_info(user_credentials);

  let devices = await client.player.get_available_devices();
  if (devices.result) {
    console.log(devices.result);
  } else {
    console.log(devices.error);
  }

  let laptopId = devices.result?.devices.find((x) => x.name === "iPhone")?.id;

  let result = await client.player.transfer_playback(
    [laptopId as string],
    true
  );
  if (result.result) {
    console.log(result.result);
  } else {
    console.log(result.error);
  }
};
testing();
