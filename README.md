# Response Helper Kit

A simple and lightweight API response helper for Node.js and TypeScript.

## Features

- Simple success and error responses
- Full TypeScript support
- Lightweight with zero runtime dependencies
- Built-in TypeScript type declarations
- Works with Node.js and modern TypeScript projects

## Installation

```bash
npm install response-helper-kit
```

## Usage

### Success Response

```typescript
import { success } from "response-helper-kit";

const response = success(
  { id: 1, name: "Abdelaziz" },
  "User fetched successfully",
);

console.log(response);
```

Output:

```json
{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "Abdelaziz"
  }
}
```

### Error Response

```typescript
import { error } from "response-helper-kit";

const response = error("User not found");

console.log(response);
```

Output:

```json
{
  "success": false,
  "message": "User not found",
  "data": null
}
```

## API

### `success<T>(data, message?)`

Creates a successful API response.

```typescript
success(data, message?)
```

#### Parameters

| Parameter | Type     | Required | Description                               |
| --------- | -------- | -------- | ----------------------------------------- |
| `data`    | `T`      | Yes      | The response data                         |
| `message` | `string` | No       | Response message. Defaults to `"Success"` |

#### Example

```typescript
const response = success(
  { id: 1, name: "Abdelaziz" },
  "User fetched successfully",
);
```

---

### `error(message?)`

Creates an error API response.

```typescript
error(message?)
```

#### Parameters

| Parameter | Type     | Required | Description                                         |
| --------- | -------- | -------- | --------------------------------------------------- |
| `message` | `string` | No       | Error message. Defaults to `"Something went wrong"` |

#### Example

```typescript
const response = error("User not found");
```

## TypeScript Support

`response-helper-kit` includes TypeScript type declarations out of the box.

You can use the exported `ApiResponse<T>` interface in your TypeScript projects:

```typescript
import { success, error, type ApiResponse } from "response-helper-kit";

const response: ApiResponse<{ id: number }> = success(
  { id: 1 },
  "User fetched successfully",
);
```

## Response Structure

All responses follow the same structure:

```typescript
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
}
```

### Successful Response

```typescript
{
  success: true,
  message: "Success",
  data: ...
}
```

### Error Response

```typescript
{
  success: false,
  message: "Something went wrong",
  data: null
}
```

## Example with Express

You can use the package with an Express.js API:

```typescript
import express from "express";
import { success, error } from "response-helper-kit";

const app = express();

app.get("/users/:id", async (req, res) => {
  const user = {
    id: 1,
    name: "Abdelaziz",
  };

  if (!user) {
    return res.status(404).json(error("User not found"));
  }

  return res.status(200).json(success(user, "User fetched successfully"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Requirements

- Node.js 18+
- TypeScript 5+ for TypeScript projects

## License

MIT

## Author

**Abdelaziz Yasser**
