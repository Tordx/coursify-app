import PouchDB from 'pouchdb-react-native';
import 'pouchdb-core';
import { USERTOKEN } from '@env';

export const dbtoken = new PouchDB(USERTOKEN);