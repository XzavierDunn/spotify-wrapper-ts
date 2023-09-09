[spotify_wrapper](../README.md) / [Exports](../modules.md) / models/paged-track

# Module: models/paged-track

## Table of contents

### Type Aliases

- [PagedTracksType](models_paged_track.md#pagedtrackstype)

### Variables

- [PagedTracks](models_paged_track.md#pagedtracks)

## Type Aliases

### PagedTracksType

Ƭ **PagedTracksType**: `z.infer`<typeof [`PagedTracks`](models_paged_track.md#pagedtracks)\>

#### Defined in

[src/models/paged-track.ts:27](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/paged-track.ts#L27)

## Variables

### PagedTracks

• `Const` **PagedTracks**: `ZodObject`<{ `cursors`: `ZodObject`<{ `after`: `ZodString` ; `before`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `after`: `string` ; `before`: `string`  }, { `after`: `string` ; `before`: `string`  }\> = cursors; `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `context`: `ZodNullable`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `type`: `string` ; `uri`: `string`  }\>\> ; `played_at`: `ZodString` ; `track`: `ZodObject`<{ `artists`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `id`: `ZodString` ; `name`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>\> ; `available_markets`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `disc_number`: `ZodOptional`<`ZodNumber`\> ; `duration_ms`: `ZodOptional`<`ZodNumber`\> ; `explicit`: `ZodOptional`<`ZodBoolean`\> ; `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `is_local`: `ZodOptional`<`ZodBoolean`\> ; `is_playable`: `ZodOptional`<`ZodBoolean`\> ; `linked_from`: `ZodOptional`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls }, { `external_urls`: { spotify: string; } = ExternalUrls }\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `preview_url`: `ZodNullable`<`ZodString`\> ; `restrictions`: `ZodOptional`<`ZodObject`<{ `reason`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `reason`: `string`  }, { `reason`: `string`  }\>\> ; `track_number`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `artists?`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] ; `available_markets?`: `string`[] ; `disc_number?`: `number` ; `duration_ms?`: `number` ; `explicit?`: `boolean` ; `external_urls?`: { spotify: string; } ; `href?`: `string` ; `id?`: `string` ; `is_local?`: `boolean` ; `is_playable?`: `boolean` ; `linked_from?`: { external\_urls: { spotify: string; }; } ; `name?`: `string` ; `preview_url`: ``null`` \| `string` ; `restrictions?`: { reason: string; } ; `track_number?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\> = SimplifiedTrack }, ``"strip"``, `ZodTypeAny`, { `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `played_at`: `string` ; `track`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; } = SimplifiedTrack }, { `context`: ``null`` \| { type: string; href: string; external\_urls: { spotify: string; }; uri: string; } ; `played_at`: `string` ; `track`: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; } = SimplifiedTrack }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodString` ; `total`: `ZodOptional`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `cursors`: { after: string; before: string; } = cursors; `href`: `string` ; `items`: { track: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }; played\_at: string; context: { ...; } \| null; }[] ; `limit`: `number` ; `next`: `string` ; `total?`: `number`  }, { `cursors`: { after: string; before: string; } = cursors; `href`: `string` ; `items`: { track: { preview\_url: string \| null; artists?: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; }[] \| undefined; available\_markets?: string[] \| undefined; ... 13 more ...; is\_local?: boolean \| undefined; }; played\_at: string; context: { ...; } \| null; }[] ; `limit`: `number` ; `next`: `string` ; `total?`: `number`  }\>

#### Defined in

[src/models/paged-track.ts:18](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/paged-track.ts#L18)