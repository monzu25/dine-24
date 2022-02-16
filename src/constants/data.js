import images from './images';

 
const foodItems = [
  {
    id:101,
    title: 'Creamy Broccoli Salad ',
    imgUrl:images.BroccoliSaladRecipe,
    price:'$10.99'
  },
  {
    id:102,
    title: 'Cauliflower Tacos',
    imgUrl:images.CauliflowerTacos,
    price:'$12.99'
  },
  {
    id:103,
    title: 'Lentil Soup ',
    imgUrl:images.EasyLentilSoupRecipe,
    price:'$11.99'
  },
  {
    id:104,
    title: 'Ground Pork Tacos',
    imgUrl:images.EasyGroundPorkTacosRecipe,
    price:'$11.99'
  },
  {
    id:105,
    title: 'Mushroom Pasta',
    imgUrl:images.MushroomPastaRecipe,
    price:'$10.99'
  },
  {
    id:106,
    title: 'Veggie Spaghetti',
    imgUrl:images.VegetableSpaghettiRecipe,
    price:'$13.99'
  },
  {
    id:107,
    title: 'Cauliflower Salad ',
    imgUrl:images.CauliflowerSaladRecipe,
    price:'$11.99'
  },
  {
    id:108,
    title: 'Chicken Noodle Soup',
    imgUrl:images.CreamyChickenNoodleSoup,
    price:'$14.99'
  },
  {
    id:109,
    title: 'Creamy Potato Soup',
    imgUrl:images.CreamyHomemadePotatoSoupRecipe,
    price:'$13.99'
  },
  {
    id:110,
    title: 'Creamy Mac & Cheese',
    imgUrl:images.EasyCreamyStovetopMacandCheese,
    price:'$10.99'
  },
]

const wines = [
  {
    id:111,
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    id:112,
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    id:113,
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    id:114,
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    id:115,
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];



const cocktails = [
  {
    id:116,
    title: 'Dry Martini',
    imgUrl:images.DryMartini,
    price: '$20',
    tags: 'Dry vermouth | Gin | Lemon twist ',
  },
  {
    id:117,
    title: "French 75",
    imgUrl:images.French75,
    price: '$16',
    tags: 'London dry gin | Superfine sugar | Lemon juice |Brut champagne',
  },
  {
    id:118,
    title: 'Boulevardier',
    imgUrl:images.Boulevardier,
    price: '$10',
    tags: 'Rye whiskey | Campari | Sweet vermouth',
  },
  {
    id:119,
    title: 'Bloody Mary',
    imgUrl:images.BloodyMary,
    price: '$31',
    tags: 'Tomato juice | Worcestershire sauce | Black pepper',
  },
  {
    id:120,
    title: 'Gimlet',
    imgUrl:images.Gimlet,
    price: '$26',
    tags: 'London dry gin | Roses lime juice | Orange garnish',
  },
  {
    id:121,
    title: 'Moscow Mule',
    imgUrl:images.MoscowMule,
    price: '$21',
    tags: 'Vodka | Ginger beer| Lime juice ',
  },
  {
    id:122,
    title: 'Aperol Spritz',
    imgUrl:images.AperolSpritz,
    price: '$19',
    tags: 'Aperol | Prosecco | Rrange slices ',
  },
  {
    id:123,
    title: 'Mojito',
    imgUrl:images.Mojito,
    price: '$20',
    tags: 'White rum | Lime juice  | Superfine sugar |  Club soda',
  },
  {
    id:124,
    title: 'Margarita',
    imgUrl:images.Margarita,
    price: '$24',
    tags: 'Silver tequila | Cointreau | Lime juice | Coarse salt',
  },
  {
    id:125,
    title: 'Whiskey Sour',
    imgUrl:images.WhiskeySour,
    price: '$22',
    tags: 'Bourbon | Lemon juice | Uperfine sugar |  Egg white',
  },
];

const awards = [
  {
    id:126,
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id:127,
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id:128,
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id:129,
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards ,foodItems};
