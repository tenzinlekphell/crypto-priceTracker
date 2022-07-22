import React from 'react';
import './Coin.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Coin = ({ name, image, symbol, price, volume, priceChange }) => {
  const rows = [{ name, image, symbol, price, volume, priceChange }];
  return (
    <div>
      {/* <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Crypto/Token Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Volume</TableCell>
              <TableCell align="right">Price Change</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {name} ({symbol})
                </TableCell>
                <TableCell align="right" className="coin">
                  <img src={image}></img>
                </TableCell>
                <TableCell align="right" className="coin-price">
                  ${price}
                </TableCell>
                <TableCell align="right" className="coin-volume">
                  {volume.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {priceChange < 0 ? (
                    <p className="coin-percent red">
                      {priceChange.toFixed(2)}%
                    </p>
                  ) : (
                    <p className="coin-percent green">
                      {priceChange.toFixed(2)}%
                    </p>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};

export default Coin;
