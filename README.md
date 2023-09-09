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

### TODO: Add info about user tokens

## Documentation

[Documentation](./docs/modules.md)
