# 🍽️ Party Menu Selection App

A ReactJS-based Party Menu Selection App that allows users to browse categorized dishes, search and filter menu items, select dishes for a party, view dish details, and explore ingredient information through a clean mobile-first interface.

## 🚀 Features

### Menu Categories
- Starter
- Main Course
- Dessert
- Sides

Each category displays:
- Selected dish count
- Active category highlighting
- Category-wise dish management

### Search Functionality
- Search dishes by name
- Case-insensitive search
- Works within the selected category

### Veg / Non-Veg Filters
- Veg filter
- Non-Veg filter
- Real-time filtering
- Compatible with search and category filters

### Dish Selection
- Add and remove dishes
- Visual selected state
- Category-wise selection count
- Total selected dish count

### Dish Detail Modal
- Click any dish card to view details
- Responsive bottom-sheet modal
- Add/Remove dish directly from modal
- Navigate to ingredient details

### Ingredient Details
- Dedicated ingredient page
- Dish image and description
- Ingredient list with quantities
- Back navigation support

###  Party Summary
- Displays all selected dishes
- Consolidated ingredient information
- Accessed through the Continue button

---

## Tech Stack

- ReactJS
- React Router DOM
- React Hooks
- Vite
- CSS3
- React Icons

---

## Project Structure

```text
src/
│
├── components/
│   ├── BottomSummary.jsx
│   ├── CategoryTabs.jsx
│   ├── DishCard.jsx
│   ├── DishModal.jsx
│   ├── FilterToggle.jsx
│   └── SearchBar.jsx
│
├── data/
│   └── menuData.js
│
├── pages/
│   ├── MenuPage.jsx
│   ├── IngredientPage.jsx
│   └── PartyIngredientsPage.jsx
│
├── styles/
│   └── app.css
│
├── App.jsx
├── routes.jsx
└── main.jsx
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/party-menu-app.git
```

### 2. Navigate to the Project

```bash
cd party-menu-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

```text
http://localhost:5173
```

---

## Screens Implemented

### Menu Screen
- Category tabs
- Search bar
- Veg/Non-Veg filters
- Dish listing
- Selection summary

### Dish Detail Modal
- Dish image
- Description
- Add/Remove functionality
- Ingredient navigation

### Ingredient Screen
- Detailed ingredient list
- Quantities
- Back navigation

### Party Summary Screen
- Selected dishes
- Combined ingredient information

---

## Data Structure

The application uses local mock JSON data.

Example:

```javascript
{
  id,
  category,
  name,
  type,
  image,
  description,
  ingredients
}
```

No backend or external APIs are used.

## Assignment Requirements Covered

- Category Tabs
- Search Functionality
- Veg / Non-Veg Filters
- Dish Selection
- Category-wise Selection Count
- Total Selected Count
- Ingredient Details Screen
- Navigation Between Screens
- Mock JSON Data Rendering
- Responsive Mobile UI
- React Functional Components
- React Hooks

---

## Future Enhancements

- Local Storage Persistence
- Quantity Selection Per Dish
- Ingredient Aggregation
- Dark Mode
- Favorites Feature
- Party Cost Estimation
- Drag & Drop Menu Builder
