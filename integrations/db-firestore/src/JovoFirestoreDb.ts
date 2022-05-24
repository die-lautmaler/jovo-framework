import { CollectionReference, Firestore } from '@google-cloud/firestore';
import { FirestoreDb, FirestoreDbConfig } from './FirestoreDb';

export class JovoFirestoreDb {
  constructor(readonly firestoreDb: FirestoreDb) {}

  get config(): FirestoreDbConfig {
    return this.firestoreDb.config;
  }

  get firestore(): Firestore {
    return this.firestoreDb.firestore;
  }

  get collection(): CollectionReference {
    return this.firestoreDb.collection;
  }
}
