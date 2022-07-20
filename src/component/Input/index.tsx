import { IExchangeRate } from 'types/IExchangeRate';

import './index.scss';

interface IInputParams {
  amount: number;
  currency: string;
  currencies: IExchangeRate[];
  getExchangeInput: any;
  getCurrency: any;
}

const Input: React.FC<IInputParams> = ({amount, currency, currencies, getExchangeInput, getCurrency}) => {
  return (
      <div className='exchangeRates'>
        <input type="number" onChange={(e) => getExchangeInput(e.target.value)} value={amount}></input>
        <select value={currency} onChange={(e) => getCurrency(e.target.value)}>
          {currencies.map((element) => (
            <option key={element.r030} value={element.cc}>{element.cc}</option>
          ))}
        </select>
      </div>
  );
}

export default Input;