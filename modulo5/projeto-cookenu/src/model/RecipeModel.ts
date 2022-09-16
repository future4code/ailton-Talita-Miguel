class RecipeModel {
  constructor(
    private id: string,
    private title: string,
    private recipe_description: string,
    private preparation_mode: string,
    private recipe_date: Date
  ) {}

  public getId() {
    return this.id;
  }

  public getTitle() {
    return this.title;
  }

  public getRecipeDescription() {
    return this.recipe_description;
  }

  public getPreparationMode() {
    return this.preparation_mode;
  }

  public getRecipeDate() {
    return this.recipe_date;
  }
}

export default RecipeModel;
