import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'eCommerceProject';
let db;
async function initConnection() {
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);
}

export const connection = initConnection;
export const database = db;
