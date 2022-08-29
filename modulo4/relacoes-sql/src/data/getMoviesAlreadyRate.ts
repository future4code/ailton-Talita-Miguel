import { connection } from "./baseData";

export default async function getMoviesAlreadyRate() {
  const result = await connection.raw(`
  SELECT Movies.id, name, rate FROM Movies
  JOIN Rating
  ON Movies.id = Rating.Movies_id 
  WHERE Rating.rate IS NOT NULL;
 `);

  return result[0];
}