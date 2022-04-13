// import { createStyles, makeStyles } from '@mui/material/styles';

import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: '30px auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    card: {
      maxWidth: 345,
      marginBottom: 30,
    },
  })
);

export default useStyles;
