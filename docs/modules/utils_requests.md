[spotify_wrapper](../README.md) / [Exports](../modules.md) / utils/requests

# Module: utils/requests

## Table of contents

### Functions

- [delete\_req](utils_requests.md#delete_req)
- [get\_req](utils_requests.md#get_req)
- [post\_req](utils_requests.md#post_req)
- [put\_req](utils_requests.md#put_req)

## Functions

### delete\_req

▸ **delete_req**<`T`\>(`url`, `token`, `info`, `body?`, `object?`): `Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ZodType`<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `token` | `string` |
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |
| `body?` | ``null`` \| `BodyInit` |
| `object?` | `TypeOf`<`T`\> |

#### Returns

`Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Defined in

[src/utils/requests.ts:165](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/utils/requests.ts#L165)

___

### get\_req

▸ **get_req**<`T`\>(`url`, `token`, `object`, `info`): `Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\>  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ZodType`<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `token` | `string` |
| `object` | `TypeOf`<`T`\> |
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |

#### Returns

`Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\>  }\>

#### Defined in

[src/utils/requests.ts:110](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/utils/requests.ts#L110)

___

### post\_req

▸ **post_req**<`T`\>(`url`, `token`, `body`, `info`, `object?`): `Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ZodType`<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `token` | `string` |
| `body` | `undefined` \| ``null`` \| `BodyInit` |
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |
| `object?` | `TypeOf`<`T`\> |

#### Returns

`Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Defined in

[src/utils/requests.ts:148](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/utils/requests.ts#L148)

___

### put\_req

▸ **put_req**<`T`\>(`url`, `token`, `body`, `info`, `object?`): `Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ZodType`<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `token` | `string` |
| `body` | `undefined` \| ``null`` \| `BodyInit` |
| `info` | `Object` |
| `info.api_url` | `string` |
| `info.client_access_token` | `string` |
| `info.refresh_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.refresh_user_token_function` | (...`args`: `unknown`[]) => `unknown` |
| `info.user_access_token` | `string` |
| `object?` | `TypeOf`<`T`\> |

#### Returns

`Promise`<{ `error?`: `any` ; `result?`: `z.TypeOf`<`T`\> \| `string`  }\>

#### Defined in

[src/utils/requests.ts:126](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/259550e/src/utils/requests.ts#L126)
