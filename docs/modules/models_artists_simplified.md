[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/artists-simplified

# Module: models/artists-simplified

## Table of contents

### Type Aliases

- [SimplifiedArtistType](models_artists_simplified.md#simplifiedartisttype)

### Variables

- [SimplifiedArtist](models_artists_simplified.md#simplifiedartist)

## Type Aliases

### SimplifiedArtistType

Ƭ **SimplifiedArtistType**: `z.infer`<typeof [`SimplifiedArtist`](models_artists_simplified.md#simplifiedartist)\>

#### Defined in

[src/models/artists-simplified.ts:13](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists-simplified.ts#L13)

## Variables

### SimplifiedArtist

• `Const` **SimplifiedArtist**: `ZodObject`<{ `external_urls`: `ZodObject`<{ `spotify`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `spotify`: `string`  }, { `spotify`: `string`  }\> = ExternalUrls; `href`: `ZodString` ; `id`: `ZodString` ; `name`: `ZodString` ; `type`: `ZodString` ; `uri`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }, { `external_urls`: { spotify: string; } = ExternalUrls; `href`: `string` ; `id`: `string` ; `name`: `string` ; `type`: `string` ; `uri`: `string`  }\>

#### Defined in

[src/models/artists-simplified.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/artists-simplified.ts#L4)
