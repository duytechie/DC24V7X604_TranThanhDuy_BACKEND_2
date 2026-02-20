// import { ObjectId } from "mongodb"; // Uncomment if ObjectId is needed later
class ContactService {
  constructor(client) {
    this.Contact = client.db().collection("contacts");
  }
}
export default ContactService;
