import React, {useState} from 'react';
import exchanges from "../mockData/exchanges";

function ExchangeTable(){
    const [currency,setCurrency] = useState(exchanges.currencies);

    return (
        <div>
            <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                <thead>
                <tr>
                    <th>Döviz Cinsi</th>
                    <th>Alış(TL)</th>
                    <th>Satış(TL)</th>
                    <th>Fark(%)</th>
                </tr>

                </thead>
                <tbody>
                {currency.map(element=> (
                    <tr>
                        <td>{element.exchangeType}</td>
                        <td>{element.buy}</td>
                        <td>{element.sell}</td>
                        <td>{element.diff}</td>
                    </tr>

                ))}
                </tbody>
            </table>

        </div>
    )
}
export default ExchangeTable