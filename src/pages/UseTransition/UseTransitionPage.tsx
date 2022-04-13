import { TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import Products from '../../components/Products';
import { ProductData } from '../../components/ProductsData';
import AutorenewIcon from '@mui/icons-material/Autorenew';

interface UsePageTransitionPageProps {
  filteredProductData: ProductData[];
  filterUpdate: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
}

const UsePageTransitionPage = ({
  filteredProductData,
  filterUpdate,
  isPending,
}: UsePageTransitionPageProps) => {
  return (
    <Box>
      <Box mb={8}>The transition page</Box>
      <TextField
        label="Search Product Number"
        onChange={filterUpdate}
        type="number"
      />

      <Box>
        {isPending ? (
          <>
            Loading ... &nbsp;
            <AutorenewIcon rotate={360} />
          </>
        ) : (
          <>
            <Box>
              <Typography>{filteredProductData.length} Results</Typography>
            </Box>
            <Products data={filteredProductData} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default UsePageTransitionPage;
