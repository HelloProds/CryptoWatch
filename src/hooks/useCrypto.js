import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Заявка за списъка с валути
const fetchCryptoList = async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  );
  return response.data;
};

// Заявка за детайли на конкретна валута
const fetchCoinDetails = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return response.data;
};

// Hook за списъка
export const useCryptoList = () => {
  return useQuery({
    queryKey: ['cryptoList'],
    queryFn: fetchCryptoList,
  });
};

// Hook за детайлите
export const useCoinDetails = (id) => {
  return useQuery({
    queryKey: ['coin', id],
    queryFn: () => fetchCoinDetails(id),
    enabled: !!id,
  });
};