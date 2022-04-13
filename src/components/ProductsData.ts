export type ProductData = {
  title: string;
  image: string;
  description: string;
};

interface ProductsDataProps {
  productsData: ProductData[];
}

const ProductsData = (): ProductsDataProps => {
  let productsData: ProductData[] = [];
  let images = [
    'https://place-puppy.com/300x200',
    'https://place-puppy.com/400x300',
    'https://place-puppy.com/500x400',
    'https://place-puppy.com/600x500',
  ];

  for (let i = 0; i < 10000; i++) {
    let random = Math.floor(Math.random() * images.length);
    const product = {
      title: `Product #${i + 1}`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit`,
      image: images[random],
    };
    productsData.push(product);
  }

  return {
    productsData,
  };
};

export default ProductsData;
