import { connection } from "./baseData";

export default async function postMovieCast(movie_id: string, actor_id: string):Promise<number> {
  const result = await connection
    .insert({ movie_id, actor_id })
    .into("MovieCast");

  return result[0];
}
