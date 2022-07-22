import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Coin.css';

function PriceTracker() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            className="coin-input"
            placeholder="Search..."
            onChange={handleChange}
          />
        </form>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>CRYPTO/TOKEN NAME</TableCell>
              <TableCell align="right">SYMBOL</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">PRICE/CHANGE</TableCell>
              <TableCell align="right">VOLUME</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCoins.map((coin) => {
              return (
                <TableRow
                  key={coin.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {coin.name} ({coin.symbol})
                  </TableCell>
                  <TableCell align="right" className="coin">
                    <img src={coin.image}></img>
                  </TableCell>
                  <TableCell align="right" className="coin-price">
                    ${coin.current_price}
                  </TableCell>
                  <TableCell align="right">
                    {coin.price_change_percentage_24h < 0 ? (
                      <p className="coin-percent-red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    ) : (
                      <p className="coin-percent-green">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    )}
                  </TableCell>
                  <TableCell align="right" className="coin-volume">
                    {coin.total_volume.toLocaleString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PriceTracker;
