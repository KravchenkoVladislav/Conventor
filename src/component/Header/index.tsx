import { useSelector } from 'react-redux';
import { selectList } from 'store/news/selector';

import './index.scss';

function Header() {
  const exchangeList = useSelector(selectList);
  
  return (
    <div className="header">
      <h1>Exchange Rates</h1>
      <ul className='rate'>
        <li>USD: {exchangeList.length != 0 ? (exchangeList[25].rate).toFixed(2):0}</li>
        <li>EUR: {exchangeList.length != 0 ? (exchangeList[32].rate).toFixed(2): 0}</li>
      </ul>
    </div>
  );
}

export default Header;
