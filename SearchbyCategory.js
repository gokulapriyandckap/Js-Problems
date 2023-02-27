
// 3. Write a function named "searchByCategory" which takes two paramater - "string" as first parameter(categoryName) and "arrayOfObjects" as second parameter(shopping list) and returns the formatted string based on the category provided in first parameter.

// const products = [
//   { product_name: "Black Jeans", price: "$50", addedToCart: false,category: "clothing" },
//   { product_name: "Air conditioner", price: "$500", addedToCart: false, category:"appliances" },
//   { product_name: "Ford", price: "$5000", addedToCart: false, category:"car" },
//   { product_name: "Sofa", price: "$200", addedToCart: false, category:"furniture" },
//   { product_name: "Screw driver", price: "$20", addedToCart: false, category:"tools" },
// ]

// formatted string output - In *categoryname*, we have *product_name* with price of *price" 

// ("clothing", products)=> "In clothing category, we have Black Jeans with price of $50"
// ("furniture", products)=> "In furniture category, we have Sofa with price of $200"
// ("appliances", products)=> "In appliances category, we have Air conditioner with price of $500"
const products = [
    { product_name: "Black Jeans", price: "$50", addedToCart: false,category: "clothing" },
    { product_name: "Air conditioner", price: "$500", addedToCart: false, category:"appliances" },
    { product_name: "Ford", price: "$5000", addedToCart: false, category:"car" },
    { product_name: "Sofa", price: "$200", addedToCart: false, category:"furniture" },
    { product_name: "Screw driver", price: "$20", addedToCart: false, category:"tools" },
  ]
  
function searchByCategory(categoryName,shopping_list) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].category == categoryName) {
            return "In" +" "+ products[i].category + " "+"category,"+ "we have"+" "+products[i].product_name + " "+"with price of"+" "+products[i].price
        }
    }
}
console.log(searchByCategory("furniture",products))