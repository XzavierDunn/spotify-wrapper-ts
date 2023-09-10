# [Spotify Web API](https://developer.spotify.com/documentation/web-api) Wrapper

A brief description of what this project does and who it's for

## Usage/Examples

```typescript
let client: Client = await Client.create_client({
  client_id: "...",
  client_secret: "...",
  redirect_uri: "...",
});

let album = await client.albums.get_album({ id: "" });
if (album.result) {
  let details = {
    name: album.result.name,
    artists: album.result.artists.map((artist) => artist.name),
    release_date: album.result.release_date,
  };
}

let tracks = await client.tracks.get_several_tracks([""]);
if (tracks.result) {
  console.log(tracks.result.tracks.map((track) => track.id));
  console.log(tracks.result.tracks.map((track) => track.name));
  console.log(tracks.result.tracks.map((track) => track.album.name));
}
```

### User credentials can be supplied with the add_user_info method

_This allows endpoints that require [user permissions](https://developer.spotify.com/documentation/web-api/concepts/scopes) to be hit._

Currently all user authentication must be handled separately, there are no methods to help handle this.

```typescript
let ClientInfo = z.object({
  access_token: z.string().optional(),
  token_type: z.string().optional(),
  expires_in: z.number().optional(),
  refresh_token: z.string().optional(),
  scope: z.string().optional(),
});

let user_credentials: ClientInfo = {
  access_token: "...",
  refresh_token: "...",
};

client.add_user_info(user_credentials);

let user_profile = await client.users.get_current_users_profile();
if (user_profile.result) {
  console.log(user_profile.result.id);
  console.log(user_profile.result.display_name);
}
```

## Documentation

[Documentation](./docs/modules.md)

## Roadmap

- Implement request_user_authorization util

- Improve error handling and return missing scopes

- Clean up request util functions

- Test util functions

- Test client methods
