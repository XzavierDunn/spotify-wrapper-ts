[spotify_wrapper](../README.md) / [Exports](../modules.md) / models/artists

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

[src/models/artists.ts:35](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L35)

___

### PagedArtistsType

Ƭ **PagedArtistsType**: `z.infer`<typeof [`PagedArtists`](models_artists.md#pagedartists)\>

#### Defined in

[src/models/artists.ts:36](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L36)

___

### SeveralArtistsType

Ƭ **SeveralArtistsType**: `z.infer`<typeof [`SeveralArtists`](models_artists.md#severalartists)\>

#### Defined in

[src/models/artists.ts:37](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L37)

## Variables

### Artist

• `Const` **Artist**: `ZodObject`<{ `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `followers`: `ZodOptional`<`ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>\> ; `genres`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `images`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `popularity`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>

#### Defined in

[src/models/artists.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L4)

___

### FullArtists

• `Const` **FullArtists**: `ZodObject`<{ `href`: `ZodOptional`<`ZodString`\> ; `items`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `followers`: `ZodOptional`<`ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>\> ; `genres`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `images`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `popularity`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>, ``"many"``\>\> ; `limit`: `ZodOptional`<`ZodNumber`\> ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodOptional`<`ZodNumber`\> ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodOptional`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `href?`: `string` ; `items?`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }, { `href?`: `string` ; `items?`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }\>

#### Defined in

[src/models/artists.ts:21](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L21)

___

### PagedArtists

• `Const` **PagedArtists**: `ZodObject`<{ `artists`: `ZodObject`<{ `href`: `ZodOptional`<`ZodString`\> ; `items`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `followers`: `ZodOptional`<`ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>\> ; `genres`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `images`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `popularity`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>, ``"many"``\>\> ; `limit`: `ZodOptional`<`ZodNumber`\> ; `next`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `offset`: `ZodOptional`<`ZodNumber`\> ; `previous`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `total`: `ZodOptional`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `href?`: `string` ; `items?`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }, { `href?`: `string` ; `items?`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[] ; `limit?`: `number` ; `next?`: ``null`` \| `string` ; `offset?`: `number` ; `previous?`: ``null`` \| `string` ; `total?`: `number`  }\> = FullArtists }, ``"strip"``, `ZodTypeAny`, { `artists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = FullArtists }, { `artists`: { href?: string \| undefined; limit?: number \| undefined; next?: string \| null \| undefined; offset?: number \| undefined; previous?: string \| null \| undefined; total?: number \| undefined; items?: { ...; }[] \| undefined; } = FullArtists }\>

#### Defined in

[src/models/artists.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L31)

___

### SeveralArtists

• `Const` **SeveralArtists**: `ZodObject`<{ `artists`: `ZodArray`<`ZodObject`<{ `external_urls`: `ZodOptional`<`ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\>\> ; `followers`: `ZodOptional`<`ZodObject`<{ `href`: `ZodNullable`<`ZodString`\> ; `total`: `ZodNumber`  }, ``"strip"``, `ZodTypeAny`, { `href`: ``null`` \| `string` ; `total`: `number`  }, { `href`: ``null`` \| `string` ; `total`: `number`  }\>\> ; `genres`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\> ; `href`: `ZodOptional`<`ZodString`\> ; `id`: `ZodOptional`<`ZodString`\> ; `images`: `ZodOptional`<`ZodArray`<`ZodObject`<{ `height`: `ZodNullable`<`ZodNumber`\> ; `url`: `ZodNullable`<`ZodString`\> ; `width`: `ZodNullable`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }, { `height`: ``null`` \| `number` ; `url`: ``null`` \| `string` ; `width`: ``null`` \| `number`  }\>, ``"many"``\>\> ; `name`: `ZodOptional`<`ZodString`\> ; `popularity`: `ZodOptional`<`ZodNumber`\> ; `type`: `ZodOptional`<`ZodString`\> ; `uri`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }, { `external_urls?`: { spotify: string; } ; `followers?`: { href: string \| null; total: number; } ; `genres?`: `string`[] ; `href?`: `string` ; `id?`: `string` ; `images?`: { height: number \| null; width: number \| null; url: string \| null; }[] ; `name?`: `string` ; `popularity?`: `number` ; `type?`: `string` ; `uri?`: `string`  }\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }, { `artists`: { external\_urls?: { spotify: string; } \| undefined; followers?: { href: string \| null; total: number; } \| undefined; genres?: string[] \| undefined; href?: string \| undefined; id?: string \| undefined; ... 4 more ...; uri?: string \| undefined; }[]  }\>

#### Defined in

[src/models/artists.ts:17](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/models/artists.ts#L17)
