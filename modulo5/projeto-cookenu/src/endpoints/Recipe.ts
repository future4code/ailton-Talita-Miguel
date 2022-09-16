import { Request, Response } from "express";
import { RecipeDataBase } from "../data/recipeDataBase";
import { InvalidCredential } from "../error/InvalidCredential";
import { PermissionDenied } from "../error/PermissionDenied";
import RecipeModel from "../model/RecipeModel";
import { USER_ROLES } from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class RecipeEndpoint {
  public async createRecipe(req: Request, res: Response) {
    try {
      const { title, description, preparation } = req.body;
      const token = req.headers.authorization!;

      if (!title || !description || !preparation) {
        throw new InvalidCredential();
      }

      const isOk = new Authenticator().verifyToken(token);

      if (!isOk) {
        throw new PermissionDenied();
      }

      const userDataBase = new RecipeDataBase();

      const id = new GenerateId().createId();
      const date = new Date();

      const newRecipe = new RecipeModel(
        id,
        title,
        description,
        preparation,
        date
      );

      const result = await userDataBase.createRecipe(newRecipe);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  public async getRecipeById(req: Request, res: Response) {
    try {
      const recipeId = req.params.recipeId;
      const token = req.headers.authorization!;

      if (!recipeId) {
        throw new InvalidCredential();
      }

      const isOk = new Authenticator().verifyToken(token);

      const recipeData = new RecipeDataBase();

      const recipe: RecipeModel = await recipeData.getRecipeById(recipeId);

      if (!isOk) {
        throw new PermissionDenied();
      }

      res.status(200).send({
        message: {
          id: recipe.getId(),
          title: recipe.getTitle(),
          description: recipe.getRecipeDescription(),
          preparation: recipe.getPreparationMode(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}

export default RecipeEndpoint;
