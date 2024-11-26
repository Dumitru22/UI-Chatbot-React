import { useLocation, useNavigate } from 'react-router-dom';
import './StockValue.css';

function StockValue() {
   const navigate = useNavigate();
   const location = useLocation();
   const value = location.state || {}; 
   const path = "/stock";

   const goBack = () => {
      navigate(path, { state: value[2]}); // Pass state to stock list page
   };

   const goToMainMenu = () => {
      navigate('/'); // To Main Menu
   };

   return (
      <div className="container">
      <ul className="stockExchanges">
         <div className="select">
            <b>Stock Price of 
               <span className='name'> {value[0]}</span> is 
               <span  className='price'> {value[1] ? value[1] : 
                  <span className='error'>No Price</span>}
               </span>
            </b>
         </div>
         <div>
            <li onClick={() => goBack()}>Go Back</li>
            <li onClick={() => goToMainMenu()}>Main Menu</li>
         </div>
      </ul>
   </div>
   );
 }

export default StockValue;
