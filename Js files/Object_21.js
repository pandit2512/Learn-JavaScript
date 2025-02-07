const category = {
  _embedded: {
    categories: [
      {
        categoryName: "Electronics",
        _embedded: {
          products: [
            {
              _links: {
                orders: {
                  href: "http://localhost:8080/products/1/orders{?projection}",
                  templated: true,
                },
                category: {
                  href: "http://localhost:8080/products/1/category",
                },
                self: {
                  href: "http://localhost:8080/products/1{?projection}",
                  templated: true,
                },
              },
              productPrice: 60000,
              productName: "Laptop",
              productId: 1,
              discount: 48000,
              productDescription: "Best Laptop",
            },
            {
              _links: {
                orders: {
                  href: "http://localhost:8080/products/2/orders{?projection}",
                  templated: true,
                },
                category: {
                  href: "http://localhost:8080/products/2/category",
                },
                self: {
                  href: "http://localhost:8080/products/2{?projection}",
                  templated: true,
                },
              },
              productPrice: 41000,
              productName: "Mobile",
              productId: 2,
              discount: 32800,
              productDescription: "Best Mobile",
            },
          ],
        },
        _links: {
          self: {
            href: "http://localhost:8080/category/1",
          },
          category: {
            href: "http://localhost:8080/category/1",
          },
          products: {
            href: "http://localhost:8080/category/1/products{?projection}",
            templated: true,
          },
        },
      },
      {
        categoryName: "Groceries",
        _links: {
          self: {
            href: "http://localhost:8080/category/2",
          },
          category: {
            href: "http://localhost:8080/category/2",
          },
          products: {
            href: "http://localhost:8080/category/2/products{?projection}",
            templated: true,
          },
        },
      },
      {
        categoryName: "Furniture",
        _links: {
          self: {
            href: "http://localhost:8080/category/3",
          },
          category: {
            href: "http://localhost:8080/category/3",
          },
          products: {
            href: "http://localhost:8080/category/3/products{?projection}",
            templated: true,
          },
        },
      },
    ],
  },
  _links: {
    self: {
      href: "http://localhost:8080/category?page=0&size=20",
    },
    profile: {
      href: "http://localhost:8080/profile/category",
    },
  },
  page: {
    size: 20,
    totalElements: 3,
    totalPages: 1,
    number: 0,
  },
};

console.log(category["_embedded"]["categories"].length);

console.log(category["_embedded"]["categories"][0]["categoryName"]);
console.log(category["_embedded"]["categories"][1]["categoryName"]);
console.log("============");

category["_embedded"]["categories"].forEach((n) => console.log(n.categoryName));
console.log("============");
//return in each category how many products are present
console.log(
  category["_embedded"]["categories"][0]["_embedded"]["products"].length
);
//=> 2 products present in Electronic category
console.log("=============");
//return link of each category
category["_embedded"]["categories"].forEach((n) => {
  console.log(n.categoryName);
  console.log(n["_links"]["self"]["href"]);
});
