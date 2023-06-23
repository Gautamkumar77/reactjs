const foodItems = [
          {
            "id": 1,
            "foodname": "Apple",
            "calorie": 95,
            "category": "Fruit",
            "protiens": 0.3,
            "cab": 25
          },
          {
            "id": 2,
            "foodname": "Banana",
            "calorie": 105,
            "category": "Fruit",
            "protiens": 1.3,
            "cab": 27
          },
          // ... rest of the food items
        ];
        
        // List all the food items
        function listAllFoodItems(data) {
          return data.map(item => item.foodname);
        }
        
        // List all the food items with category vegetables
        function listVegetableFoodItems(data) {
          return data.filter(item => item.category === "Vegetable").map(item => item.foodname);
        }
        
        // List all the food items with category fruit
        function listFruitFoodItems(data) {
          return data.filter(item => item.category === "Fruit").map(item => item.foodname);
        }
        
        // List all the food items with category protein
        function listProteinFoodItems(data) {
          return data.filter(item => item.category === "Protein").map(item => item.foodname);
        }
        
        // List all the food items with category nuts
        function listNutsFoodItems(data) {
          return data.filter(item => item.category === "Nuts").map(item => item.foodname);
        }
        
        // List all the food items with category grains
        function listGrainFoodItems(data) {
          return data.filter(item => item.category === "Grain").map(item => item.foodname);
        }
        
        // List all the food items with category dairy
        function listDairyFoodItems(data) {
          return data.filter(item => item.category === "Dairy").map(item => item.foodname);
        }
        
        // List all the food items with calorie above 100
        function listFoodItemsAboveCalorie(data, calorie) {
          return data.filter(item => item.calorie > calorie).map(item => item.foodname);
        }
        
        // List all the food items with calorie below 100
        function listFoodItemsBelowCalorie(data, calorie) {
          return data.filter(item => item.calorie < calorie).map(item => item.foodname);
        }
        
        // List all the food items with highest protein content to lowest
        function listFoodItemsByProteinContent(data) {
          return data.sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
        }
        
        // List all the food items with lowest carb content to highest
        function listFoodItemsByCarbContent(data) {
          return data.sort((a, b) => a.cab - b.cab).map(item => item.foodname);
        }
        
        // Usage example:
        console.log(listAllFoodItems(foodItems));
        console.log(listVegetableFoodItems(foodItems));
        console.log(listFruitFoodItems(foodItems));
        console.log(listProteinFoodItems(foodItems));
        console.log(listNutsFoodItems(foodItems));
        console.log(listGrainFoodItems(foodItems));
        console.log(listDairyFoodItems(foodItems));
        console.log(listFoodItemsAboveCalorie(foodItems, 100));
        console.log(listFoodItemsBelowCalorie(foodItems, 100));
        console.log(listFoodItemsByProteinContent(foodItems));
        console.log(listFoodItemsByCarbContent(foodItems));
        