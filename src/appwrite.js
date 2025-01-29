import { Client, Databases, ID, Query } from "appwrite";

// APP_WRITE ID's
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  // SET APP_WRITE ENDPOINT
  .setEndpoint("https://cloud.appwrite.io/v1")
  // CONNECT WITH OUR PROJECT
  .setProject(PROJECT_ID);

// TELL WHICH FUNCTIONALITY ARE WE USING
const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  // 1. use Appwrite SDK to check if the search term exists in DB
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    // 2. If it does, update it
    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
      // 3. If it doesn't , create a new document with the search term and set count to 1
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error(error, "Error from Appwrite");
  }
};

export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    return result.documents;
  } catch (error) {
    console.error(error, "Error from Server GET TRENDING MOVIES");
  }
};

//   console.log(DATABASE_ID, "database id");
//   console.log(COLLECTION_ID, "collection id");
//   console.log(PROJECT_ID, "project id");
