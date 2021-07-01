import {Recipe} from '../app/model/recipe.model';
import {Ingredient} from '../app/model/ingredient.model';
import {RecipeIngredient} from '../app/model/recipe-ingredient.model';


export const MOCK_RECIPES: Recipe[] = [
  {
    name: 'Daiquiri',
    picture:
      'https://cdn.liquor.com/wp-content/uploads/2016/07/29105024/DAIQUIRI-226x248-mosaic1.jpg',
    description:
      `The classic Daiquiri is a super simple rum cocktail that’s well-balanced and refreshing.
      The combination of sweet, sour and spirit is refreshingly tangy and perfect for any occasion.`,
    ingredients: [
      {
        ingredient: {name: 'Dark rum (Appleton Estate Reserve)'} as Ingredient,
        quantity: 2,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Fresh lime juice'} as Ingredient,
        quantity: 1,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Simple sirup'} as Ingredient,
        quantity: 1,
        unit: 'oz'
      }
    ] as RecipeIngredient[],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a chilled Martini glass.',
      'Garnish with a lime wheel.'
    ]
  },
  {
    name: 'Piña Colada',
    picture:
      'https://cdn.liquor.com/wp-content/uploads/2016/07/29124300/PINA-COLADA-226x248-mosaic1.jpg',
    description:
      `The Piña Colada is a classic tropical cocktail with rum, pineapple and coconut milk.
      This classic recipe will transport you to paradise. Getting caught in the rain is not required.`,
    ingredients: [
      {
        ingredient: {name: 'Light or gold rum'} as Ingredient,
        quantity: 1.5,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Coconut milk'} as Ingredient,
        quantity: 2,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Fresh pineapple juice'} as Ingredient,
        quantity: 2,
        unit: 'oz'
      }
    ] as RecipeIngredient[],
    instructions: [
      'Add all the ingredients to a shaker and fill with ice.',
      'Shake, and strain into a Hurricane glass filled with fresh ice.',
      'Garnish with a cherry and a pineapple wedge.'
    ]
  },
  {
    name: 'Mojito',
    picture:
      'https://cdn.liquor.com/wp-content/uploads/2016/07/29124230/MOJITO-226x248-mosaic1.jpg',
    description:
      `To many people, the Mojito represents the perfect rum cocktail. The origins of the drink can be traced back to
      Cuba and the 16th-century Cuban cocktail El Draque, named for Sir Francis Drake. `,
    ingredients: [
      {
        ingredient: {name: 'Mint leaves'} as Ingredient,
        quantity: 6
      },
      {
        ingredient: {name: 'Simple syrup'} as Ingredient,
        quantity: 0.75,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Fresh lime juice'} as Ingredient,
        quantity: 0.75,
        unit: 'oz'
      },
      {
        ingredient: {name: 'White rum'} as Ingredient,
        quantity: 1.5,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Club soda'} as Ingredient,
        quantity: 1.5,
        unit: 'oz'
      }
    ] as RecipeIngredient[],
    instructions: [
      'In a shaker, lightly muddle the mint.',
      'Add the simple syrup, lime juice and rum, and fill with ice.',
      'Shake well and pour (unstrained) into a highball glass.',
      'Top with the club soda and garnish with a mint sprig.'
    ]
  },
  {
    name: 'Dirty Martini',
    picture:
      'https://cdn.liquor.com/wp-content/uploads/2013/12/Dirty-Martini-mosiac.jpg',
    description:
      'A dash of olive brine brings a salty, savory note to the all-time classic.',
    ingredients: [
      {
        ingredient: {name: 'Gin or vodka'} as Ingredient,
        quantity: 2.5,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Dry vermouth'} as Ingredient,
        quantity: 0.5,
        unit: 'oz'
      },
      {
        ingredient: {name: 'Olive brine'} as Ingredient,
        quantity: 0.5,
        unit: 'oz'
      }
    ] as RecipeIngredient[],
    instructions: [
      'Add all the ingredients to a mixing glass filled with ice.',
      'Stir, and strain into a chilled cocktail glass.',
      'Garnish with 2 olives.'
    ]
  }
];
