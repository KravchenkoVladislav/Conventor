import {useEffect, useState}  from 'react';
import Input from 'component/Input';
import { TypedDispatch } from 'types/TypedDispatch';

import { useDispatch, useSelector } from 'react-redux';
import { loadExchangeRate } from 'store/news/actions';
import { selectList } from 'store/news/selector';

import './index.scss';

const Conventer = () => {

  const dispatch = useDispatch<TypedDispatch>();
  const exchangeList = useSelector(selectList);
  
  useEffect(() => {
    dispatch(loadExchangeRate());
  }, [dispatch])

  if(exchangeList.length < 63){
    exchangeList.push({r030: Math.random(), cc:'UAH', rate:1})
  }

  useEffect(() => {
    if (!!exchangeList) {
      function init() {
        handleAmountFirstInputChange(1); 
      }
      init();
    }
  }, [exchangeList]);

  const [amountFirstInput, setAmountFirstInput] = useState(0);
  const [amountSecondInput, setAmountSecondInput] = useState(0);

  const [currencyFirst, setCurrencyFirst] = useState('USD');
  const [currencySecond, setCurrencySecond] = useState('UAH');

  const foundRateFirst = () => {
    const foundFirst = exchangeList.find(elemet => elemet.cc == currencyFirst);
    return foundFirst ? foundFirst : {rate:1}; 
  }
  const foundRateScond = () => {
    const foundSecond = exchangeList.find(elemet => elemet.cc == currencySecond)
    return foundSecond?  foundSecond : {rate:1};
  }

  const handleAmountFirstInputChange = (amountFirstInput: number) => {
    setAmountSecondInput(+(amountFirstInput * foundRateFirst()!.rate / foundRateScond()!.rate).toFixed(3))
    setAmountFirstInput(amountFirstInput)
  }

  const handleAmountSecondInputChange = (amountFirstInput: number) => {
    setAmountSecondInput(amountFirstInput)
    setAmountFirstInput(+(amountFirstInput * foundRateScond()!.rate / foundRateFirst()!.rate).toFixed(3))
  }

  const handleCurrencyFirstChange = (currencyFirst: string) => { 
    setAmountSecondInput(+(amountFirstInput * foundRateScond()!.rate / foundRateFirst()!.rate).toFixed(3))
    setCurrencyFirst(currencyFirst)
  }

  const handleCurrencySecondChange = (currencySecond: string) => {
    setCurrencySecond(currencySecond)
    setAmountFirstInput(+(amountFirstInput * foundRateScond()!.rate / foundRateFirst()!.rate).toFixed(3))
  } 

  return (
    <div className="conventer"> 
      <Input 
      currencies={exchangeList}
      currency={currencyFirst} 
      amount={amountFirstInput}
      getExchangeInput={handleAmountFirstInputChange}
      getCurrency={handleCurrencyFirstChange}
      />
      <Input 
      currencies={exchangeList} 
      currency={currencySecond} 
      amount={amountSecondInput}
      getExchangeInput={handleAmountSecondInputChange}
      getCurrency={handleCurrencySecondChange}
      />
    </div>
  );
}

export default Conventer;