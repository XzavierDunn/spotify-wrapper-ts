[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/artists

# Module: models/artists

## Table of contents

### Type Aliases

- [ArtistType](models_artists.md#artisttype)
- [PagedArtistsType](models_artists.md#pagedartiststype)
- [SeveralArtistsType](models_artists.md#severalartiststype)

### Variables

- [Artist](models_artists.md#artist)
- [FullArtists](models_artists.md#fullartists)
- [PagedArtists](models_artists.md#pagedartists)
- [SeveralArtists](models_artists.md#severalartists)

## Type Aliases

### ArtistType

Ƭ **ArtistType**: `z.infer`<typeof [`Artist`](models_artists.md#artist)\>

#### Defined in

[src/models/artists.ts:35](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L35)

___

### PagedArtistsType

Ƭ **PagedArtistsType**: `z.infer`<typeof [`PagedArtists`](models_artists.md#pagedartists)\>

#### Defined in

[src/models/artists.ts:36](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L36)

___

### SeveralArtistsType

Ƭ **SeveralArtistsType**: `z.infer`<typeof [`SeveralArtists`](models_artists.md#severalartists)\>

#### Defined in

[src/models/artists.ts:37](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L37)

## Variables

### Artist

• `Const` **Artist**: `ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\> = Followers; `genres`: `ZodArray`<`ZodString`, ``"many"``\> ; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `name`: `ZodString` ; `popularity`: `ZodNumber` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }\>

#### Defined in

[src/models/artists.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L4)

___

### FullArtists

• `Const` **FullArtists**: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\> = Followers; `genres`: `ZodArray`<`ZodString`, ``"many"``\> ; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `name`: `ZodString` ; `popularity`: `ZodNumber` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodString`\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }\>

#### Defined in

[src/models/artists.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L21)

___

### PagedArtists

• `Const` **PagedArtists**: `ZodObject`<{ `artists`: `ZodObject`<{ `href`: `ZodString` ; `items`: `ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\> = Followers; `genres`: `ZodArray`<`ZodString`, ``"many"``\> ; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `name`: `ZodString` ; `popularity`: `ZodNumber` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\> ; `limit`: `ZodNumber` ; `next`: `ZodNullable`<`ZodString`\> ; `offset`: `ZodNumber` ; `previous`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }, { `href`: `string` ; `items`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[] ; `limit`: `number` ; `next`: ``null`` \| `string` ; `offset`: `number` ; `previous`: ``null`` \| `string` ; `total`: `number`  }\> = FullArtists }, ``"strip"``, `ZodTypeAny`, { `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists }, { `artists`: { href: string; total: number; limit: number; next: string \| null; offset: number; previous: string \| null; items: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; ... 4 more ...; followers: { ...; }; }[]; } = FullArtists }\>

#### Defined in

[src/models/artists.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L31)

___

### SeveralArtists

• `Const` **SeveralArtists**: `ZodObject`<{ `artists`: `ZodArray`<`ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `followers`: `ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\> = Followers; `genres`: `ZodArray`<`ZodString`, ``"many"``\> ; `href`: `ZodString` ; `id`: `ZodString` ; `images`: `ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\> ; `name`: `ZodString` ; `popularity`: `ZodNumber` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `followers`: { href: string \| null; total: number; } = Followers; `genres`: `string`[] ; `href`: `string` ; `id`: `string` ; `images`: { url: string \| null; height: number \| null; width: number \| null; }[] ; `name`: `string` ; `popularity`: `number` ; `type`: `string` ; `uri`: `string`  }\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }, { `artists`: { type: string; href: string; external\_urls: { spotify: string; }; name: string; id: string; uri: string; images: { url: string \| null; height: number \| null; width: number \| null; }[]; genres: string[]; popularity: number; followers: { ...; }; }[]  }\>

#### Defined in

[src/models/artists.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists.ts#L17)
