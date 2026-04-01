import React from 'react'
import ApiLoading from './ApiLoading';
import { useEffect, useState } from 'react';

export default function  TopCoins(){
    const [coins, setCoins] = useState([])
    const [loading , setLoading] = useState(true)


useEffect(()=>{
    fetch("https://cryptopulse-backend-465t.onrender.com/api/crypto")
    .then((res)=> res.json())
    .then((data)=> {
        setCoins(data);
        setLoading(false);
    })
    .catch((err)=> {console.error(err)
    });
},[]);

if (loading) return <ApiLoading /> 


  return (
    <main className='p-3'>
        <div className='overflow-x-auto'>
            <table className='w-full border border-gray-200 h-12 Bgray'>
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
                    {Array.isArray(coins) && coins.map((coin)=> (
                        <tr key={coin.id} className='border hover hover:bg-gray-400 transition Bgray'>
                            <td className="p-2">{coin.market_cap_rank}</td> 
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

