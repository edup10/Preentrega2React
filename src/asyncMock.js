const products = [
    {
      id: "1",
      name: "iphone 12",
      price: 1000,
      category: "celular",
      img: "https://media.solotodo.com/media/products/1248927_picture_1602788725.png",
      stock: 25,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "samsung s24",
      price: 1500,
      category: "celular",
      img: "https://images.samsung.com/is/image/samsung/p6pim/cl/2401/gallery/cl-galaxy-s24-s928-sm-s928bztkltl-539308363?$650_519_PNG$",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Ipad 8va generacion",
      price: 1200,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 0,
      description: "Descripcion de Ipad",
    },
    {
        id: "4",
        name: "Computadora Gamer",
        price: 1200,
        category: "computer",
        img: "https://http2.mlstatic.com/D_NQ_NP_665031-MLC74109416456_012024-O.webp",
        stock: 0,
        description: "Descripcion de Computadora Gamer",
      },
      {
        id: "5",
        name: "iphone 15",
        price: 1500,
        category: "celular",
        img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/16907155_01/w=800,h=800,fit=pad",
        stock: 15,
        description: "Descripcion de Iphone 15",
      },
      {
        id: "6",
        name: "Samsung Galaxy Tab S6",
        price: 1000,
        category: "tablet",
        img: "https://img.global.news.samsung.com/cl/wp-content/uploads/2019/07/Product-Image-Galaxy-Tab-S6-2.jpg",
        stock: 22,
        description: "Descripcion de Galaxy Tab 6",
      },
      {
        id: "7",
        name: "Xiaomi Tablet Pad 6",
        price: 800,
        category: "tablet",
        img: "https://vantek.vtexassets.com/arquivos/ids/168044-800-800?v=638253784438430000&width=800&height=800&aspect=true",
        stock: 10,
        description: "Descripcion de Xiaomi Tablet Pad 6",
      },
      {
        id: "8",
        name: "Notebook Gamer MSI",
        price: 1500,
        category: "computer",
        img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/131472240_01/w=800,h=800,fit=pad",
        stock: 2,
        description: "Descripcion de Notebook Gamer Msi",
      },
      {
        id: "9",
        name: "Notebook Lenovo Thinkpad E15",
        price: 500,
        category: "computer",
        img: "https://todoclick.cl/6738162-large_default/notebook-lenovo-thinkpad-e15-gen-4-i7-1255u.jpg",
        stock: 8,
        description: "Descripcion de Notebook Lenovo Thinkpad E15",
      },
      
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };