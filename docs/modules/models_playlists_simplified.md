[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/playlists-simplified

# Module: models/playlists-simplified

## Table of contents

### Type Aliases

- [SeveralSimplifiedPlaylistsType](models_playlists_simplified.md#severalsimplifiedplayliststype)

### Variables

- [SeveralSimplifiedPlaylists](models_playlists_simplified.md#severalsimplifiedplaylists)

## Type Aliases

### SeveralSimplifiedPlaylistsType

Ƭ **SeveralSimplifiedPlaylistsType**: `z.infer`<typeof [`SeveralSimplifiedPlaylists`](models_playlists_simplified.md#severalsimplifiedplaylists)\>

#### Defined in

[src/models/playlists-simplified.ts:40](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/playlists-simplified.ts#L40)

## Variables

### SeveralSimplifiedPlaylists

• `Const` **SeveralSimplifiedPlaylists**: `ZodObject`<{ `href`: `ZodOptional`<`ZodString`\> ; `items`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `collaborative`: `ZodBoolean` ; `description`: `ZodString` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `name`: `ZodString` ; `owner`: `ZodObject`<{ `display_name`: `ZodString` ; `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodOptional`<`ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>\> ; `href`: `ZodString` ; `id`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `display_name`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers?`: { href: string \| null; total: number; } ; `href`: `string` ; `id`: `string` ; `type`: `string` ; `uri`: `string`  }, { `display_name`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `followers?`: { href: string \| null; total: number; } ; `href`: `string` ; `id`: `string` ; `type`: `string` ; `uri`: `string`  }\> = Owner; `public`: `ZodNullable`<`ZodBoolean`\> ; `snapshot_id`: `ZodString` ; `tracks`: `ZodObject`<{ `href`: `ZodString` ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `total`: `number`  }, { `href`: `string` ; `total`: `number`  }\> ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: ``null`` \| `boolean` ; `snapshot_id`: `string` ; `tracks`: { href: string; total: number; } ; `type`: `string` ; `uri`: `string`  }, { `collaborative`: `boolean` ; `description`: `string` ; `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `owner`: { type: string; href: string; external\_urls: { spotify: string; }; id: string; uri: string; display\_name: string; followers?: { href: string \| null; total: number; } \| undefined; } = Owner; `public`: ``null`` \| `boolean` ; `snapshot_id`: `string` ; `tracks`: { href: string; total: number; } ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>\> ; `limit`: `ZodOptional`<`ZodNumber`\> ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodOptional`<`ZodNumber`\> ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodOptional`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }, { `href?`: `string` ; `items?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; tracks: { href: string; total: number; }; ... 4 more ...; snapshot\_id: string; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }\>

#### Defined in

[src/models/playlists-simplified.ts:30](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/playlists-simplified.ts#L30)
