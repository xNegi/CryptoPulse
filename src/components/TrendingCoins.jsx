import React from 'react'
import ApiLoading from './ApiLoading';
import { useEffect, useState } from 'react';

export default function  TrendingCoins(){
    const [coins, setCoins] = useState([])
    const [loading , setLoading] = useState(true)


useEffect(() => {
  fetch("https://corsproxy.io/?https://api.coingecko.com/api/v3/search/trending")
    .then(res => res.json())
    .then(trendingData => {
      const ids = trendingData.coins.map(c => c.item.id).join(",");

      return fetch(
        `https://corsproxy.io/?https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&price_change_percentage=24h`
      );
    })
    .then(res => res.json())
    .then(marketData => {
      setCoins(marketData);
      setLoading(false);
    })
    .catch(err => console.error(err));
}, []);


if (loading) return <ApiLoading /> 


  return (
    <main className='p-3'>
        <div className='overflow-x-auto'>
            <table className='w-full border border-gray-200 h-12'>
                <thead className='bg-gray-200 BBlack'>
                    <tr>
                        <th className='p-2 text-left'>#</th>
                        <th className='p-2 text-center'>Coin</th>
                        <th className='p-2 text-right'>Price</th>
                        <th className='p-2 text-right'>24h%</th>
                        <th className='p-2 text-right'>Market Cap</th>
                        <th className='p-2 text-right'>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin,index)=> (
                        <tr key={coin.id} className='border-t hover hover:bg-gray-400 transition'>
                            <td className="p-2">{index+1}</td> 
                            <td className="p-2">
                                  <div className="flex items-center justify-center gap-2 ">
                                    <img
                                    src={coin.image}
                                    alt={coin.name}
                                    className="h-6 w-6"
                                    />
                                    <span>{coin.name}</span>
                                    </div>
                            </td>
                            <td className='p-2 text-right'>${coin.current_price}</td>
                            <td className= {coin.price_change_percentage_24h > 0 ? "text-green-500 text-right": "text-red-500 text-right"}>
                                {coin.price_change_percentage_24h !== null
                                ? coin.price_change_percentage_24h.toFixed(2)
                                : "N/A"}%
                            </td>  
                            <td className="p-2 text-right ">${coin.market_cap.toLocaleString()}</td>
                            <td className="p-2 text-right ">${coin.total_volume.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>

  );
}
