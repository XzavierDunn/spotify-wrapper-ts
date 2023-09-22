[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / utils/helpers

# Module: utils/helpers

## Table of contents

### Type Aliases

- [OptionalType](utils_helpers.md#optionaltype)

### Variables

- [Optional](utils_helpers.md#optional)

### Functions

- [check\_user\_token](utils_helpers.md#check_user_token)
- [handle\_optional](utils_helpers.md#handle_optional)
- [scope\_check](utils_helpers.md#scope_check)

## Type Aliases

### OptionalType

Ƭ **OptionalType**: `z.infer`<typeof [`Optional`](utils_helpers.md#optional)\>

#### Defined in

[src/utils/helpers.ts:10](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/helpers.ts#L10)

## Variables

### Optional

• `Const` **Optional**: `ZodObject`<{ `limit`: `ZodOptional`<`ZodNumber`\> ; `market`: `ZodOptional`<`ZodString`\> ; `offset`: `ZodOptional`<`ZodNumber`\>  }, ``"strip"``, `ZodTypeAny`, { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }, { `limit?`: `number` ; `market?`: `string` ; `offset?`: `number`  }\>

#### Defined in

[src/utils/helpers.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/helpers.ts#L4)

## Functions

### check\_user\_token

▸ **check_user_token**(`user_token`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user_token` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `error?` | [`CustomError`](models_client.md#customerror) |

#### Defined in

[src/utils/helpers.ts:22](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/helpers.ts#L22)

___

### handle\_optional

▸ **handle_optional**(`optional?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `optional?` | `Object` |
| `optional.limit?` | `number` |
| `optional.market?` | `string` |
| `optional.offset?` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `limit?` | `number` |
| `market?` | `string` |
| `offset?` | `number` |

#### Defined in

[src/utils/helpers.ts:12](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/helpers.ts#L12)

___

### scope\_check

▸ **scope_check**(`error`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `undefined` \| [`CustomError`](models_client.md#customerror) |

#### Returns

`boolean`

#### Defined in

[src/utils/helpers.ts:31](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/helpers.ts#L31)
