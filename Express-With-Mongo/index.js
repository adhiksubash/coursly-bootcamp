import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'demoProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const insertResult = await collection.insertMany([{
      name:"New Doc1",
      extension:'.docx'
  },
  {
    name:"New Doc2",
    extension:'.pdf'
  }]);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
