# github-webhooks-fixtures

A helper library to access typed GitHub webhook event payload fixtures for testing.

**Usage**:

```ts
import { getFixture } from "github-webhooks-fixtures";

const installationPayload = getFixture('installation.created');
```
