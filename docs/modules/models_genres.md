[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / models/genres

# Module: models/genres

## Table of contents

### Type Aliases

- [GenresType](models_genres.md#genrestype)

### Variables

- [GenresObject](models_genres.md#genresobject)

## Type Aliases

### GenresType

Ƭ **GenresType**: `z.infer`<typeof [`GenresObject`](models_genres.md#genresobject)\>

#### Defined in

[src/models/genres.ts:7](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/genres.ts#L7)

## Variables

### GenresObject

• `Const` **GenresObject**: `ZodObject`<{ `genres`: `ZodArray`<`ZodString`, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `genres`: `string`[]  }, { `genres`: `string`[]  }\>

#### Defined in

[src/models/genres.ts:3](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/models/genres.ts#L3)
