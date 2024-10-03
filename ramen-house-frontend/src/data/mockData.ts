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
];

export const CurryRamenTofu = [
  {
    id: 2, // Unique identifier for the ramen item
    title: "Curry Ramen - Tofu",
    description:
      "Homemade noodles, light shoyu broth with Japanese curry, topped with corn, shrimp, tofu, narutomaki, onsen tamago, and scallions.",
    image: "/images/SumoBowl.jpg",
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
