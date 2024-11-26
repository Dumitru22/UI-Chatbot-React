import data from '../../../assets/Chatbot - stock data.json';
import { useLocation, useNavigate } from 'react-router-dom';
import './StockMenu.css'
import ErrorPage from '../../ui-components/ErrorPage/ErrorPage';

function StockMenu() {
   const path = "/stockValue";
   const navigate = useNavigate();
   const location = useLocation();
   const value = location.state || {}; 

   const goToPage = (name: string, price:number, stockName: string) => {
      if(name) {
         navigate(path, { state: [name, price, stockName]}); // Pass state to stock value page
      }
    };

    const goToMainMenu = () => {
      navigate('/'); // To Main Menu
    };

   const topStocksfilter: any = data.filter((stock: any) => stock.stockExchange ? stock.stockExchange === value : '');
   
   return (
      <div className="container">
         <ul className="stockExchanges">
            <div className="select"><b>Please select a Stock</b></div>
            {topStocksfilter[0].topStocks.length ? topStocksfilter[0].topStocks.map((data: any, index: number) => (
               <div>
                  <li key={index} onClick={() => goToPage(data.stockName, data.price, value)}>{data.stockName ? data.stockName : <div className='error'>Empty Stock Name Value</div>}</li>
               </div>
            )) : <ErrorPage errorName="Error" status="topStocks is Empty"></ErrorPage>}
         </ul>
         <button className='toMainMenu' onClick={() => goToMainMenu()}>Main Menu</button>
      </div>
   );
 }

export default StockMenu;
