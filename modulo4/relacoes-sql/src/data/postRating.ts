import { connection } from "./baseData";

export default async function postRating(
  id: string,
  comment: string,
  rate: number,
  Movies_id: string
) {
  const result = await connection
    .insert({ id, comment, rate, Movies_id })
    .into("Rating");
  
  return result[0]
}
