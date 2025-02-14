//Practicing on Ecommerce Project API
//Add @crossOrigin annotation on Repo of SpringBoot project
//Q.1Fetch all Product Name from product
const API = "http://localhost:8080/products";

fetch(API)
  .then((data) => data.json())
  .then((data) => {
    console.log(data["_embedded"]);
    const products = data["_embedded"]["products"];
    const productName = products.map((product) => {
      console.log(product.productName);
      //Now create and print to <p>
      const p = document.createElement("p");
      const text = `${product.productId} ${product.productName} ${product.productDescription}`;
      p.appendChild(document.createTextNode(text));
      document.body.appendChild(p);
    });
  });

//Q.2: Fetch all Categories from Category
const categoryAPI = "http://localhost:8080/category";

fetch(categoryAPI)
  .then((data) => data.json())
  .then((data) => {
    console.log(data["_embedded"]["categories"]);
    const category = data["_embedded"]["categories"];
    const categoryName = category.map((c) => {
      console.log(c.categoryName);

      //Now Perform above task to print in Html Element
    });
  });
