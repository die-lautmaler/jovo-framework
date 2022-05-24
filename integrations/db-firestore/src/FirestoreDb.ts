import {
  DbItem,
  DbPlugin,
  DbPluginConfig,
  HandleRequest,
  Jovo,
  JovoError,
  Logger,
  OmitIndex,
  RequiredOnlyWhere,
} from '@jovotech/framework';
import {
  CollectionReference,
  DocumentSnapshot,
  Firestore,
  Settings,
} from '@google-cloud/firestore';
import { JovoFirestoreDb } from './JovoFirestoreDb';

export interface FirestoreDbConfig
  extends DbPluginConfig,
    Omit<OmitIndex<Settings>, 'credentials'> {
  collection: string;
  credentials?: {
    clientEmail: string;
    privateKey: string;
  };
}

export type FirestoreDbInitConfig = RequiredOnlyWhere<FirestoreDbConfig, 'collection'>;

export const JOVO_DEFAULT_COLLECTION_NAME = 'jovoUsers';

export class FirestoreDb extends DbPlugin<FirestoreDbConfig> {
  readonly firestore: Firestore;
  readonly collection: CollectionReference;

  constructor(config: FirestoreDbInitConfig) {
    super(config);
    this.firestore = new Firestore({
      ...config,
      credentials: this.config.credentials
        ? {
            client_email: this.config.credentials.clientEmail,
            private_key: this.config.credentials.privateKey,
          }
        : undefined,
    });
    this.collection = this.firestore.collection(this.config.collection);
  }

  /**
   * Checks for the presence of credentials to use for connecting
   * to the Firestore database
   */
  private checkForCredentials(): void {
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !this.config.keyFileName) {
      if (this.config.credentials) {
        if (!this.config.credentials.privateKey) {
          throw new JovoError({
            message: 'Credentials provided, but private key is missing',
            hint: 'Provide privateKey in your database configuration',
            package: '@lautmaler/db-firestore',
          });
        }

        if (!this.config.credentials.clientEmail) {
          throw new JovoError({
            message: 'Credentials provided, but client email is missing',
            hint: 'Provide clientEmail in your database configuration',
            package: '@lautmaler/db-firestore',
          });
        }
      } else {
        throw new JovoError({
          message: 'Credentials missing',
          hint: 'Provide them through ...',
          package: '@lautmaler/db-firestore',
        });
      }
    }
  }

  getDefaultConfig(): FirestoreDbConfig {
    return {
      ...super.getDefaultConfig(),
      collection: JOVO_DEFAULT_COLLECTION_NAME,
    };
  }

  getInitConfig(): FirestoreDbInitConfig {
    return { collection: '<YOUR-FIRESTOREB-COLLECTION-NAME>' };
  }

  mount(parent: HandleRequest): Promise<void> | void {
    super.mount(parent);
    parent.middlewareCollection.use('before.request.start', (jovo: Jovo) => {
      this.checkForCredentials();
      jovo.$firestoreDb = new JovoFirestoreDb(this);
    });
  }

  async initialize(): Promise<void> {
    if (this.config.collection === JOVO_DEFAULT_COLLECTION_NAME) {
      Logger.warn(
        `[FirestoreDb] Warning: The default collection "${JOVO_DEFAULT_COLLECTION_NAME}" name is being used.`,
      );
    }
  }

  async loadData(userId: string, jovo: Jovo): Promise<void> {
    const document: DocumentSnapshot = await this.collection.doc(userId).get();
    if (document.exists) {
      jovo.$user.isNew = false;
      // Use non-null assertion since we checked if the document exists already
      jovo.setPersistableData(document.data()!, this.config.storedElements);
    }
  }

  async saveData(userId: string, jovo: Jovo): Promise<void> {
    const item: DbItem = { _id: userId };
    await this.applyPersistableData(jovo, item);
    await this.collection.doc(userId).set(item);
  }
}
