import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: unknown;
  value: unknown;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '62%',
      height: '24em',
    },
  })
);

const App: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      className={classes.root}
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box height="24em" clone>
          {children}
        </Box>
      )}
    </div>
  );
};

export default App;
