# Jovo FirestoreDb Database Integration

[![Jovo Framework](https://www.jovo.tech/img/github-header.png)](https://www.jovo.tech)

<p>
<a href="https://www.jovo.tech" target="_blank">Website</a> -  <a href="https://www.jovo.tech/docs" target="_blank">Docs</a> - <a href="https://www.jovo.tech/marketplace" target="_blank">Marketplace</a> - <a href="https://github.com/jovotech/jovo-v4-template" target="_blank">Template</a>   
</p>

<p>
<a href="https://www.npmjs.com/package/@lautmaler/jovo-db-firestore" target="_blank"><img src="https://badge.fury.io/js/@lautmaler%2Fjovo-db-firestore.svg"></a>      
<a href="https://opencollective.com/jovo-framework" target="_blank"><img src="https://opencollective.com/jovo-framework/tiers/badge.svg"></a>
</p>

This package enables you to integrate your Jovo app with a Firestore database.

```bash
$ npm install @lautmaler/jovo-db-firestore
```

## Installation

You can install the plugin like this:

```sh
$ npm install @lautmaler/jovo-db-firestore
```

Add it as plugin to any [stage](https://www.jovo.tech/docs/staging) you like, e.g. `app.prod.ts`:

```typescript
import { FirestoreDb } from '@lautmaler/jovo-db-firestore';
// ...

app.configure({
  plugins: [
    new FirestoreDb({
      collection: '<YOUR-FIRESTOREB-COLLECTION-NAME>',
    }),
    // ...
  ],
});
```

## Configuration

The following configuration can be added:

```typescript
new FirestoreDb({
  collection: '<FIRESTOREDB-COLLECTION-NAME>',
  keyFileName: '<FILE-IDENTIFIER-FOR-SERVICE-ACCOUNT-CREDENTIALS>',
  credentials: {
    clientEmail: '<SERVICE-ACCOUNT-CLIENT_EMAIL>',
    privateKey: '<SERVICE-ACCOUNT-PRIVATE_KEY>',
  },
  projectId: '<GOOGLE-CLOUD-PROJECT-ID>',
});
```
