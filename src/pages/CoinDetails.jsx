import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCoinDetails } from '../hooks/useCrypto';
import { Card, CardContent, Chip, CircularProgress } from '@mui/material';

export default function CoinDetails() {
  const { id } = useParams();
  const { data: coin, isLoading } = useCoinDetails(id);

  if (isLoading) return <div className="text-center mt-10"><CircularProgress /></div>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Назад към списъка</Link>
      
      <Card className="shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <img src={coin.image.large} alt={coin.name} className="w-16 h-16" />
            <div>
              <h1 className="text-4xl font-bold">{coin.name}</h1>
              <Chip label={`Rank #${coin.market_cap_rank}`} color="primary" variant="outlined" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-lg">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-500 text-sm">Текуща цена</p>
              <p className="font-bold text-2xl">${coin.market_data.current_price.usd.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-gray-500 text-sm">Пазарна капитализация</p>
              <p className="font-bold">${coin.market_data.market_cap.usd.toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-xl mb-2">Описание</h3>
            <p 
              className="text-gray-600 leading-relaxed text-sm h-40 overflow-y-auto border p-2 rounded"
              dangerouslySetInnerHTML={{ __html: coin.description.en || "Няма описание." }} 
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}