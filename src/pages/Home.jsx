import React from 'react';
import { useCryptoList } from '../hooks/useCrypto';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Alert } from '@mui/material';

export default function Home() {
  const { data: coins, isLoading, isError } = useCryptoList();

  if (isLoading) return <div className="text-center mt-10"><CircularProgress /></div>;
  if (isError) return <Alert severity="error">Грешка при зареждане на данните!</Alert>;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Топ 10 Криптовалути</h1>
      
      <TableContainer component={Paper} className="shadow-lg">
        <Table>
          <TableHead className="bg-gray-200">
            <TableRow>
              <TableCell><b>Име</b></TableCell>
              <TableCell><b>Цена (USD)</b></TableCell>
              <TableCell><b>Промяна (24ч)</b></TableCell>
              <TableCell><b>Информация</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map((coin) => (
              <TableRow key={coin.id} hover>
                <TableCell className="flex items-center gap-2">
                  <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                  <span className="font-bold">{coin.name}</span>
                  <span className="text-gray-500 uppercase">({coin.symbol})</span>
                </TableCell>
                <TableCell>${coin.current_price.toLocaleString()}</TableCell>
                <TableCell style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableCell>
                <TableCell>
                  <Link 
                    to={`/coin/${coin.id}`} 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Виж Детайли
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}