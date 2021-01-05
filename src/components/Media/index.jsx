import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TextField
} from '@material-ui/core';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [type, setType] = React.useState('');
  const [proporcao, setProporcao] = React.useState(50);

  function editData(type) {
    setType(type);
    setOpen(true);
  }
  function handleChange(e) {
    setProporcao(e.target.value);
  }
  function handleClick(e) {
    if(e.key==='Enter' || e.key===undefined) {
      console.log("{\n type: '" + type + "'\n proporcao: " + proporcao + "\n}");
      setType('');
      setOpen(false);
    }
  }
  function showContent() {
    if (show)
      setShow(false);
    else
      setShow(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={showContent} >{show ? 'Minimizar' : 'Ver proporção das médias'}</Button>
      {show ?
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tipo</StyledTableCell>
                <StyledTableCell align="right">Proporção equivalente a média total %</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  Lista
              </StyledTableCell>
                <StyledTableCell id="number" align="right">
                  <Tooltip disableFocusListener disableTouchListener title="Edit">
                    <Button onClick={() => editData('Lista')}>{proporcao}</Button>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                  Prova
              </StyledTableCell>
                <StyledTableCell align="right">
                  <Tooltip disableFocusListener disableTouchListener title="Edit">
                    <Button onClick={() => editData('Prova')}>50</Button>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
        : ''}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h2>{type}</h2>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          onKeyPress={handleClick}
        />
        <Button onClick={handleClick}>Save</Button>
      </Modal>
    </>
  );
}
