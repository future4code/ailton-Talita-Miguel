import { connection } from "./connection";

export const createProduct = async(
  name: string,
  price: number,
  image_url: string
): Promise<void> => {
    return await connection("labecommerce_products").insert({
    name,
    price,
    image_url,
  });
}