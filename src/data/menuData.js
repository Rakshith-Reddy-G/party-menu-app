const menuData = [
{
  id: 1,
  category: "Starter",
  name: "Tandoori Chicken",
  type: "nonveg",
  image:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
   description:
      "Tandoori chicken is a dish made from chicken marinated with spices.",
  ingredients: [
    { name: "Chicken", quantity: "500 gm" },
    { name: "Curd", quantity: "200 gm" },
    { name: "Masala", quantity: "100 gm" }
  ]
},

{
  id: 2,
  category: "Main Course",
  name: "Dak Makhni",
  type: "veg",
  image:
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d",
  description:
    "Dal makhani is an Indian dish originating from Punjab.",
  ingredients: [
    { name: "Black Lentils", quantity: "250 gm" },
    { name: "Butter", quantity: "50 gm" }
  ]
},
{
  id: 3,
  category: "Dessert",
  name: "Gulab Jamun",
  type: "veg",
  image:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
  description:
    "Soft milk-solid balls soaked in sugar syrup.",
  ingredients: [
    { name: "Milk Powder", quantity: "200 gm" },
    { name: "Sugar Syrup", quantity: "500 ml" }
  ]
},
{
  id: 4,
  category: "Sides",
  name: "French Fries",
  type: "veg",
  image:
    "https://images.unsplash.com/photo-1576107232684-1279f390859f",
  description:
    "Crispy potato fries served with sauces.",
  ingredients: [
    { name: "Potato", quantity: "300 gm" },
    { name: "Oil", quantity: "100 ml" }
  ]
},
{
  id: 5,
  category: "Starter",
  name: "Paneer Tikka",
  type: "veg",
  image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
  description: "Marinated paneer cubes grilled to perfection with spices and vegetables.",
  ingredients: [
    { name: "Paneer", quantity: "200 gm" },
    { name: "Curd", quantity: "100 gm" },
    { name: "Bell Peppers", quantity: "100 gm" },
    { name: "Onion", quantity: "50 gm" },
    { name: "Ginger Garlic Paste", quantity: "2 tsp" },
    { name: "Garam Masala", quantity: "1 tsp" }
  ]
},
{
  id: 6,
  category: "Starter",
  name: "Hara Bhara Kebab",
  type: "veg",
  image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
  description: "Healthy and delicious green kebabs made with spinach, peas, and potatoes.",
  ingredients: [
    { name: "Spinach", quantity: "250 gm" },
    { name: "Green Peas", quantity: "100 gm" },
    { name: "Boiled Potatoes", quantity: "200 gm" },
    { name: "Green Chilies", quantity: "2" },
    { name: "Bread Crumbs", quantity: "50 gm" },
    { name: "Corn Flour", quantity: "2 tbsp" }
  ]
},
{
  id: 7,
  category: "Starter",
  name: "Chicken 65",
  type: "nonveg",
  image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91",
  description: "Spicy, deep-fried chicken dish originating from Chennai.",
  ingredients: [
    { name: "Chicken Boneless", quantity: "500 gm" },
    { name: "Rice Flour", quantity: "2 tbsp" },
    { name: "Corn Starch", quantity: "2 tbsp" },
    { name: "Curry Leaves", quantity: "10-12" },
    { name: "Red Chili Powder", quantity: "1 tbsp" },
    { name: "Lemon Juice", quantity: "1 tbsp" }
  ]
},
{
  id: 8,
  category: "Starter",
  name: "Crispy Corn",
  type: "veg",
  image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
  description: "Crunchy fried sweet corn tossed with onions and spices.",
  ingredients: [
    { name: "Sweet Corn", quantity: "200 gm" },
    { name: "Corn Flour", quantity: "3 tbsp" },
    { name: "Rice Flour", quantity: "1 tbsp" },
    { name: "Black Pepper", quantity: "1/2 tsp" },
    { name: "Onion", quantity: "1 medium" },
    { name: "Lemon Juice", quantity: "1 tsp" }
  ]
},
{
  id: 9,
  category: "Starter",
  name: "Veg Spring Rolls",
  type: "veg",
  image: "https://images.unsplash.com/photo-1544025162-d76694265947",
  description: "Crispy rolls filled with stir-fried vegetables and spices.",
  ingredients: [
    { name: "Spring Roll Sheets", quantity: "10" },
    { name: "Cabbage", quantity: "100 gm" },
    { name: "Carrot", quantity: "100 gm" },
    { name: "Capsicum", quantity: "50 gm" },
    { name: "Soy Sauce", quantity: "1 tbsp" },
    { name: "Vinegar", quantity: "1 tsp" }
  ]
},
// Main Course
{
  id: 10,
  category: "Main Course",
  name: "Butter Chicken",
  type: "nonveg",
  image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db",
  description: "Creamy and rich tomato-based curry with tender chicken pieces.",
  ingredients: [
    { name: "Chicken", quantity: "500 gm" },
    { name: "Butter", quantity: "50 gm" },
    { name: "Tomato Puree", quantity: "200 ml" },
    { name: "Cream", quantity: "100 ml" },
    { name: "Cashew Paste", quantity: "50 gm" },
    { name: "Kasuri Methi", quantity: "1 tsp" }
  ]
},
{
  id: 11,
  category: "Main Course",
  name: "Paneer Butter Masala",
  type: "veg",
  image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Soft paneer cubes in a rich and creamy tomato-butter gravy.",
  ingredients: [
    { name: "Paneer", quantity: "250 gm" },
    { name: "Butter", quantity: "30 gm" },
    { name: "Onion", quantity: "2 large" },
    { name: "Tomato", quantity: "3 large" },
    { name: "Cashews", quantity: "10-12" },
    { name: "Cream", quantity: "2 tbsp" }
  ]
},
{
  id: 12,
  category: "Main Course",
  name: "Veg Biryani",
  type: "veg",
  image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
  description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
  ingredients: [
    { name: "Basmati Rice", quantity: "250 gm" },
    { name: "Mixed Vegetables", quantity: "200 gm" },
    { name: "Curd", quantity: "100 gm" },
    { name: "Onion", quantity: "2 large" },
    { name: "Biryani Masala", quantity: "2 tbsp" },
    { name: "Ghee", quantity: "2 tbsp" }
  ]
},
{
  id: 13,
  category: "Main Course",
  name: "Chicken Biryani",
  type: "nonveg",
  image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
  description: "Classic Indian rice dish made with marinated chicken and long-grain rice.",
  ingredients: [
    { name: "Chicken", quantity: "500 gm" },
    { name: "Basmati Rice", quantity: "500 gm" },
    { name: "Onion", quantity: "3 large" },
    { name: "Curd", quantity: "200 gm" },
    { name: "Biryani Masala", quantity: "3 tbsp" },
    { name: "Mint Leaves", quantity: "1 cup" }
  ]
},
{
  id: 14,
  category: "Main Course",
  name: "Palak Paneer",
  type: "veg",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  description: "Paneer cubes cooked in a smooth and spiced spinach gravy.",
  ingredients: [
    { name: "Spinach", quantity: "500 gm" },
    { name: "Paneer", quantity: "200 gm" },
    { name: "Onion", quantity: "1 large" },
    { name: "Ginger", quantity: "1 inch" },
    { name: "Garlic", quantity: "5 cloves" },
    { name: "Cream", quantity: "2 tbsp" }
  ]
},
{
  id: 15,
  category: "Main Course",
  name: "Kadai Chicken",
  type: "nonveg",
  image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  description: "Spicy chicken curry cooked with bell peppers and freshly ground kadai masala.",
  ingredients: [
    { name: "Chicken", quantity: "500 gm" },
    { name: "Capsicum", quantity: "1 large" },
    { name: "Onion", quantity: "2 medium" },
    { name: "Tomato", quantity: "2 medium" },
    { name: "Kadai Masala", quantity: "2 tbsp" },
    { name: "Ghee", quantity: "2 tbsp" }
  ]
},
// Desserts
{
  id: 16,
  category: "Dessert",
  name: "Rasmalai",
  type: "veg",
  image: "https://images.unsplash.com/photo-1630953899906-d16511a72558",
  description: "Soft cottage cheese dumplings soaked in sweetened, thickened milk.",
  ingredients: [
    { name: "Milk", quantity: "1 liter" },
    { name: "Sugar", quantity: "200 gm" },
    { name: "Lemon Juice", quantity: "2 tbsp" },
    { name: "Saffron", quantity: "a pinch" },
    { name: "Cardamom Powder", quantity: "1 tsp" },
    { name: "Pistachios", quantity: "10-12" }
  ]
},
{
  id: 17,
  category: "Dessert",
  name: "Jalebi",
  type: "veg",
  image: "https://images.unsplash.com/photo-1778448806852-db6a837fa98f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SmFsZWJpfGVufDB8fDB8fHww",
  description: "Crispy, syrup-filled pretzels made from fermented batter.",
  ingredients: [
    { name: "All-purpose Flour", quantity: "200 gm" },
    { name: "Curd", quantity: "50 gm" },
    { name: "Sugar", quantity: "500 gm" },
    { name: "Saffron", quantity: "a pinch" },
    { name: "Cardamom Powder", quantity: "1 tsp" },
    { name: "Ghee", quantity: "for frying" }
  ]
},
{
  id: 18,
  category: "Dessert",
  name: "Ice Cream Sundae",
  type: "veg",
  image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  description: "Delightful dessert with vanilla ice cream, chocolate sauce, and nuts.",
  ingredients: [
    { name: "Vanilla Ice Cream", quantity: "2 scoops" },
    { name: "Chocolate Sauce", quantity: "2 tbsp" },
    { name: "Nuts", quantity: "1 tbsp" },
    { name: "Cherries", quantity: "2" },
    { name: "Whipped Cream", quantity: "2 tbsp" },
    { name: "Sprinkles", quantity: "1 tsp" }
  ]
},
{
  id: 19,
  category: "Dessert",
  name: "Chocolate Brownie",
  type: "veg",
  image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
  description: "Rich, fudgy chocolate brownies with walnuts.",
  ingredients: [
    { name: "Dark Chocolate", quantity: "150 gm" },
    { name: "Butter", quantity: "100 gm" },
    { name: "Sugar", quantity: "150 gm" },
    { name: "All-purpose Flour", quantity: "100 gm" },
    { name: "Cocoa Powder", quantity: "25 gm" },
    { name: "Walnuts", quantity: "50 gm" }
  ]
},
{
  id: 20,
  category: "Dessert",
  name: "Kheer",
  type: "veg",
  image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
  description: "Traditional Indian rice pudding made with milk, sugar, and dry fruits.",
  ingredients: [
    { name: "Milk", quantity: "1 liter" },
    { name: "Basmati Rice", quantity: "50 gm" },
    { name: "Sugar", quantity: "100 gm" },
    { name: "Cardamom Powder", quantity: "1 tsp" },
    { name: "Cashews", quantity: "10-12" },
    { name: "Raisins", quantity: "10-12" }
  ]
},
// Sides
{
  id: 21,
  category: "Sides",
  name: "Garlic Naan",
  type: "veg",
  image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
  description: "Soft and fluffy leavened bread flavored with garlic and butter.",
  ingredients: [
    { name: "All-purpose Flour", quantity: "250 gm" },
    { name: "Yogurt", quantity: "50 gm" },
    { name: "Garlic", quantity: "6 cloves" },
    { name: "Butter", quantity: "20 gm" },
    { name: "Yeast", quantity: "1 tsp" },
    { name: "Sugar", quantity: "1 tsp" }
  ]
},
{
  id: 22,
  category: "Sides",
  name: "Butter Naan",
  type: "veg",
  image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
  description: "Classic Indian flatbread glazed with melted butter.",
  ingredients: [
    { name: "All-purpose Flour", quantity: "250 gm" },
    { name: "Yogurt", quantity: "50 gm" },
    { name: "Butter", quantity: "30 gm" },
    { name: "Yeast", quantity: "1 tsp" },
    { name: "Sugar", quantity: "1 tsp" },
    { name: "Milk", quantity: "1/2 cup" }
  ]
},
{
  id: 23,
  category: "Sides",
  name: "Green Salad",
  type: "veg",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  description: "Fresh and crunchy salad with cucumbers, tomatoes, and onions.",
  ingredients: [
    { name: "Cucumber", quantity: "1" },
    { name: "Tomato", quantity: "1" },
    { name: "Onion", quantity: "1" },
    { name: "Carrot", quantity: "1" },
    { name: "Lemon", quantity: "1" },
    { name: "Green Chilies", quantity: "2" }
  ]
},
{
  id: 24,
  category: "Sides",
  name: "Raita",
  type: "veg",
  image: "https://images.unsplash.com/photo-1630409346699-79481a79db52?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Refreshing yogurt-based side dish with vegetables and spices.",
  ingredients: [
    { name: "Curd", quantity: "250 gm" },
    { name: "Cucumber", quantity: "1/2 cup" },
    { name: "Onion", quantity: "1/4 cup" },
    { name: "Tomato", quantity: "1/4 cup" },
    { name: "Cumin Powder", quantity: "1/2 tsp" },
    { name: "Coriander Leaves", quantity: "1 tbsp" }
  ]
},
{
  id: 25,
  category: "Sides",
  name: "Masala Papad",
  type: "veg",
  image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e",
  description: "Crispy papad topped with a spicy onion-tomato mixture.",
  ingredients: [
    { name: "Roasted Papad", quantity: "2" },
    { name: "Onion", quantity: "1/4 cup" },
    { name: "Tomato", quantity: "1/4 cup" },
    { name: "Green Chilies", quantity: "1" },
    { name: "Coriander Leaves", quantity: "1 tbsp" },
    { name: "Lemon Juice", quantity: "1 tsp" }
  ]
}
];
export default menuData;