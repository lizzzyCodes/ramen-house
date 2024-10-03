export const menuData = [
  {
    id: 1, // Unique identifier for the ramen item
    bowlPrice: 18,
    title: "Tonkotsu Bowl",
    description:
      "Our most traditional ramen. Rich and hearty pork broth with Tokyo wavy noodles, green onion, pork belly, wakame seaweed, molten egg, bamboo shoots, fried garlic, and sesame seeds.",
    imageUrl: "/images/TonkotsuBowl.jpg",
    meats: [
      { label: "Beef Cha Shu", price: 3 },
      { label: "Prime", price: 5 },
      { label: "Wagyu Misuji", price: 1.5, isPopular: true },
    ],
    soupBase: [
      { label: "Substitute to Gyukotsu Broth", price: 3 },
      { label: "Substitute to Shoyu Prime Broth", price: 3 },
    ],
    spice: [
      { label: "No Spice" },
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
    ],
  },
  {
    id: 2, // Unique identifier for the ramen item
    title: "Curry Ramen - Tofu",
    bowlPrice: 16,
    description:
      "Homemade noodles, light shoyu broth with Japanese curry, topped with corn, red onions, wakame, narutomaki, onsen tamago, and scallions.",
    imageUrl: "/images/SumoBowl.jpg",
    meats: [
      { label: "Beef Cha Shu", price: 3 },
      { label: "Prime", price: 5 },
      { label: "Wagyu Misuji", price: 1.5, isPopular: true },
    ],
    soupBase: [
      { label: "Substitute to Gyukotsu Broth", price: 3 },
      { label: "Substitute to Shoyu Prime Broth", price: 3 },
    ],
    spice: [
      { label: "No Spice" },
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
    ],
  },
  {
    id: 3, // Unique identifier for the ramen item
    bowlPrice: 17.95,
    title: "Shoyu Ramen - Prime",
    description:
      "Clear Beef Bone Broth. Contains Shellfish - Could be removed, please write in special instructions. Topped w. Filet Mignon (medium rare), onsen tamago, scallions, red onion, menma.",
    imageUrl: "/images/CochinitaPibilRamen.jpg",
    meats: [
      { label: "Beef Cha Shu", price: 3 },
      { label: "Prime", price: 5 },
      { label: "Wagyu Misuji", price: 1.5, isPopular: true },
    ],
    soupBase: [
      { label: "Substitute to Yasai Broth", price: 3 },
      { label: "Substitute to to Curry Broth" },
    ],
    spice: [
      { label: "No Spice" },
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
    ],
  },
  {
    id: 4, // Unique identifier for the ramen item
    bowlPrice: 15.95,
    title: "Gyukotsu Ramen - Wagyu Misuji",
    description:
      "Creamy Beef Bone Broth. Contains Shellfish - Could be removed, please write in special instructions. Topped w. Braised Domestic Wagyu, Truffle Wagyu Wonton, Menma, Scallions and Tamago.",
    imageUrl: "/images/TonkotsuBowl.jpg",
    meats: [
      { label: "Beef Cha Shu", price: 3 },
      { label: "Prime", price: 5 },
      { label: "Wagyu Misuji", price: 1.5, isPopular: true },
    ],
    soupBase: [
      { label: "Substitute to Kamo Shio Broth", price: 3 },
      { label: "Substitute to Shoyu Kinoko Broth", price: 3 },
      { label: "Substitute to Curry Broth" },
    ],
    spice: [
      { label: "No Spice" },
      { label: "Level 1" },
      { label: "Level 2" },
      { label: "Level 3" },
    ],
  },
];


export const meats = [
  { label: "Beef Cha Shu", price: 3 },
  { label: "Prime", price: 5 },
  { label: "Wagyu Misuji", price: 1.5, isPopular: true },
];

export const soupBase = [
  { label: "Substitute to Gyukotsu Broth", price: 3 },
  { label: "Substitute to Shoyu Prime Broth", price: 3 },
];

export const spice = [
  { label: "No Spice" },
  { label: "Level 1" },
  { label: "Level 2" },
  { label: "Level 3" },
];
