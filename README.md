# FreeUvIndex SDK

Real-time UV Index plus a 5-day hourly forecast for any latitude/longitude, no API key required

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Current UV Index API

[Current UV Index](https://currentuvindex.com) is a free public API that returns the current UV index and an hourly UV forecast for any point on Earth, served from `https://currentuvindex.com/api/v1`.

What you get from the API:
- Current UV index for a given latitude/longitude with an ISO 8601 UTC timestamp.
- Hourly forecast covering roughly the next 120 hours (5 days).
- Up to 24 hours of recent history (added February 2025).
- UV index values on the standard 0–11+ scale.

Operational notes: no signup or API key is needed. The published rate limit is 500 requests per IP per day, resetting at 00:00 UTC. Latitude must be between -90 and 90; longitude between -180 and 180.

## Try it

**TypeScript**
```bash
npm install free-uv-index
```

**Python**
```bash
pip install free-uv-index-sdk
```

**PHP**
```bash
composer require voxgig/free-uv-index-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/free-uv-index-sdk/go
```

**Ruby**
```bash
gem install free-uv-index-sdk
```

**Lua**
```bash
luarocks install free-uv-index-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreeUvIndexSDK } from 'free-uv-index'

const client = new FreeUvIndexSDK({})

// List all uvis
const uvis = await client.Uvi().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o free-uv-index-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "free-uv-index": {
      "command": "/abs/path/to/free-uv-index-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Uvi** | UV index readings for a given location, fetched from `GET /uvi?latitude={lat}&longitude={lon}`; the response includes the current value, an hourly forecast (~120 hours), and recent history. | `/uvi` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freeuvindex_sdk import FreeUvIndexSDK

client = FreeUvIndexSDK({})

# List all uvis
uvis, err = client.Uvi(None).list(None, None)
```

### PHP

```php
<?php
require_once 'freeuvindex_sdk.php';

$client = new FreeUvIndexSDK([]);

// List all uvis
[$uvis, $err] = $client->Uvi(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/free-uv-index-sdk/go"

client := sdk.NewFreeUvIndexSDK(map[string]any{})

// List all uvis
uvis, err := client.Uvi(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FreeUvIndex_sdk"

client = FreeUvIndexSDK.new({})

# List all uvis
uvis, err = client.Uvi(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("free-uv-index_sdk")

local client = sdk.new({})

-- List all uvis
local uvis, err = client:Uvi(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreeUvIndexSDK.test()
const result = await client.Uvi().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreeUvIndexSDK.test(None, None)
result, err = client.Uvi(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreeUvIndexSDK::test(null, null);
[$result, $err] = $client->Uvi(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Uvi(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreeUvIndexSDK.test(nil, nil)
result, err = client.Uvi(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Uvi(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Current UV Index API

- Upstream: [https://currentuvindex.com](https://currentuvindex.com)
- API docs: [https://currentuvindex.com/api](https://currentuvindex.com/api)

- Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
- Free to use for personal and commercial purposes.
- Attribution required: include a visible link back to [currentuvindex.com](https://currentuvindex.com).

---

Generated from the Current UV Index API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
