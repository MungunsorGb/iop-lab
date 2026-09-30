const products = [
    { name: "Дэвтэр", price: 3500, inStock: true },
    { name: "Үзэг", price: 800, inStock: false },
    { name: "Цүнх", price: 45000, inStock: true },
  ];
    const outOfStock = products.find((product) => !product.inStock);
  console.log("Nuutsgui baraa:", outOfStock);
  
    const hasExpensiveProduct = products.some(
    (product) => product.price > 40000
  );  
  console.log("40,000+:", hasExpensiveProduct);

  const allInStock = products.every((product) => product.inStock);
  
  console.log("Buh baraanii nuuts:", allInStock);
  products.forEach((product) => {console.log(product.name);});  