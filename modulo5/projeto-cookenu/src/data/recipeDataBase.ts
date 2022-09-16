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
}
