import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("entend");
    const { intentions, date } = req.body; // might want to verify that reflection is not too long?

    const post = await db.collection("intentions").updateOne({
        date: date,
        userID: ""
      }, {
        $set: { intentions: intentions }
      }, {
        upsert: true
      }
    );

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};