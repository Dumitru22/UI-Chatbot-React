import data from '../../../assets/Chatbot - stock data.json';
import { useNavigate } from 'react-router-dom';
import './HomeMenu.css';
import ErrorPage from '../../ui-components/ErrorPage/ErrorPage';

function HomeMenu() {

   const path = "/stock";
   const navigate = useNavigate();

   const goToPage = (value: any) => {
      navigate(path, { state: value}); // Pass state to stock list page
   };

   return (
      <div className="container">
         <ul className="stockExchanges">
            <div className="select"><b>Please select a Stock Exchange</b></div>
            {data.length ? data.map((data: any, index: number) => (
               <div>
                  <li key={index} onClick={() => goToPage(data.stockExchange)}>{data.stockExchange}</li>
               </div>
            )) : <ErrorPage errorName="Error" status="No Data"></ErrorPage>}
         </ul>
      </div>
   );
 }

export default HomeMenu;

