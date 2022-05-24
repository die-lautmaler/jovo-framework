import { FirestoreDb, FirestoreDbConfig } from './FirestoreDb';
import { JovoFirestoreDb } from './JovoFirestoreDb';
// import { JovoFirestoreDb } from './JovoFirestoreDb';

declare module '@jovotech/framework/dist/types/Extensible' {
  interface ExtensiblePluginConfig {
    FirestoreDb?: FirestoreDbConfig;
  }

  interface ExtensiblePlugins {
    FirestoreDb?: FirestoreDb;
  }
}

declare module '@jovotech/framework/dist/types/Jovo' {
  interface Jovo {
    $firestoreDb: JovoFirestoreDb;
  }
}

export { FirestoreDb, FirestoreDbConfig };
