import config from "./config.json";
import { Client } from "./src/client/client";
import { request_user_authorization } from "./src/utils/utils";

let testing = async () => {
  // await request_user_authorization(config.code, { ...config.spotify_info });

  let client: Client = await Client.create_client({
    ...config.spotify_info,
  });

  client.add_user_access_token(config["user-stuff"].access_token);

  let result = await client.albums.save_albums_for_current_user({
    ids: [
      "2VrpzWjnsiELWKXOJAFhme",
      "7rKmLxCFlmtIxGpX4HYgs4",
      "5HV1423uFq5uNui7tZBBas",
    ],
  });
  if (result.result) {
    console.log(result.result);
  } else {
    console.log(result.error);
  }
};

testing();
