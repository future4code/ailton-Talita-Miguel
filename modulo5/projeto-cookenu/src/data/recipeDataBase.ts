import RecipeModel from "../model/RecipeModel";
import { BaseDatabase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDatabase {
  public async createRecipe(recipe: RecipeModel) {
    await this.getConnection()
      .insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        recipe_description: recipe.getRecipeDescription(),
        preparation_mode: recipe.getPreparationMode(),
        recipe_date: recipe.getRecipeDate(),
      })
      .into("cookenu_recipes");
    return `Receita ${recipe.getTitle()} criada com sucesso`;
  }

  public async getRecipeById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_recipes")
      .where("id", id);

    if (!result.length) {
      return undefined;
    }
    const newRecipe = new RecipeModel(
      result[0].id,
      result[0].title,
      result[0].recipe_description,
      result[0].preparation_mode,
      result[0].recipe_date
    );
    return newRecipe;
  }
}
