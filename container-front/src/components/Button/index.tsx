import React from 'react';
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { Button, ButtonProps } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const ColorButton = withStyles(() => ({
  root: {
    color: '#FAFAFA',
    backgroundColor: '#094682',
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);
const App: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        {...rest}
      >
        {children}
      </ColorButton>
    </div>
  );
};

export default App;
