import { MongoClient } from "mongodb";

class MongoDB {
  static client = null;

  static async connect(uri) {
    if (this.client) return this.client;
    this.client = await MongoClient.connect(uri);
    return this.client;
  }
}
export default MongoDB;
