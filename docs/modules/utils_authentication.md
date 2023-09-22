[spotify-wrapper-ts](../README.md) / [Exports](../modules.md) / utils/authentication

# Module: utils/authentication

## Table of contents

### Functions

- [get\_access\_token](utils_authentication.md#get_access_token)
- [refresh\_user\_access\_token](utils_authentication.md#refresh_user_access_token)
- [request\_user\_authorization](utils_authentication.md#request_user_authorization)

## Functions

### get\_access\_token

▸ **get_access_token**(`credentials`, `refresh?`): `Promise`<[`ClientInfoType`](models_client.md#clientinfotype)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `credentials` | `Object` | `undefined` |
| `credentials.client_id` | `string` | `undefined` |
| `credentials.client_secret` | `string` | `undefined` |
| `credentials.redirect_uri` | `string` | `undefined` |
| `refresh` | `boolean` | `false` |

#### Returns

`Promise`<[`ClientInfoType`](models_client.md#clientinfotype)\>

#### Defined in

[src/utils/authentication.ts:4](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/authentication.ts#L4)

___

### refresh\_user\_access\_token

▸ **refresh_user_access_token**(`client_id`, `client_secret`): `Promise`<{ `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `client_id` | `string` |
| `client_secret` | `string` |

#### Returns

`Promise`<{ `access_token?`: `string` ; `expires_in?`: `number` ; `refresh_token?`: `string` ; `scope?`: `string` ; `token_type?`: `string`  }\>

#### Defined in

[src/utils/authentication.ts:80](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/authentication.ts#L80)

___

### request\_user\_authorization

▸ **request_user_authorization**(`code`, `credentials`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `credentials` | `Object` |
| `credentials.client_id` | `string` |
| `credentials.client_secret` | `string` |
| `credentials.redirect_uri` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/authentication.ts:36](https://github.com/XzavierDunn/spotify-wrapper-ts/blob/7ece3b9/src/utils/authentication.ts#L36)
