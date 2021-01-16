class WeeklyRecipe {
  constructor(
    _id,
    title,
    imageUrl,
    prep,
    ingredients,
    total_time,
    prep_time,
    baking_time,
    difficulty,
    rate
  ) {
    this._id = _id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.prep = prep;
    this.ingredients = ingredients;
    this.total_time = total_time;
    this.prep_time = prep_time;
    this.baking_time = baking_time;
    this.difficulty = difficulty;
    this.rate = rate;
  }
}

export default WeeklyRecipe;
