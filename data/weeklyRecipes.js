import WeeklyRecipe from "../models/weeklyRecipe";

const WEEKLYRECIPES = [
  new WeeklyRecipe(
    1,
    "Tarte au poireaux",
    "https://assets.afcdn.com/recipe/20160325/58176_w600.jpg",
    ["Couper le poireau en dés", "Cuire", "Mettre dans un moule "],
    ["Pate", "Poireau", "Crème", "Oeufs", "Fromage"],
    40,
    10,
    30,
    "Débutant",
    4.5
  ),
  new WeeklyRecipe(
    2,
    "Patate douche au four",
    "https://assets.afcdn.com/recipe/20170201/44390_w600.jpg",
    ["Couper les patates", "Cuire", "Servir"],
    ["Patate douce"],
    65,
    5,
    60,
    "Débutant",
    4.5,
    false
  ),
  new WeeklyRecipe(
    3,
    "Patate 2",
    "https://assets.afcdn.com/recipe/20170201/44390_w600.jpg",
    ["Couper les patates", "Cuire", "Servir"],
    ["Patate douce"],
    65,
    5,
    60,
    "Débutant",
    4.5,
    false
  ),
  new WeeklyRecipe(
    4,
    "Patate 3",
    "https://assets.afcdn.com/recipe/20170201/44390_w600.jpg",
    ["Couper les patates", "Cuire", "Servir"],
    ["Patate douce"],
    65,
    5,
    60,
    "Débutant",
    4.5,
    true
  ),
  new WeeklyRecipe(
    5,
    "Patate32",
    "https://assets.afcdn.com/recipe/20170201/44390_w600.jpg",
    ["Couper les patates", "Cuire", "Servir"],
    ["Patate douce"],
    65,
    5,
    60,
    "Débutant",
    4.5,
    true
  ),
];

export default WEEKLYRECIPES;
