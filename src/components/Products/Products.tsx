import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';

type ProductData = {
  title: string;
  image: string;
  description: string;
};

export interface ProductsProps {
  data: ProductData[];
}

const Products: React.FC<ProductsProps> = ({ data }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      {data &&
        data.map((product, idx) => (
          <Card
            sx={{ maxWidth: 345 }}
            className={styles.card}
            key={`product_${idx + 1}`}
          >
            <CardMedia component="img" height="140" image={product.image} />
            <CardContent>
              <Box>
                <Typography variant="h6">{product.title}</Typography>
              </Box>
              <Typography>{product.description}</Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};

export default Products;
