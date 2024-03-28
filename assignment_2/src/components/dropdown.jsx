import Season from './season.jsx';
import { useState } from 'react';



const dropdown = (props) => {
  const [seasons, setSeasons] = useState([]);
  const [isOpen , setIsOpen] = useState(false);
 

  
  const displaySeasons = ()=> {
    //take the data from api
  }

  const toggleDropdown = () => {

  console.log(isOpen);

  if (!isOpen){
    setIsOpen(true);
  }
  else if (isOpen){
    setIsOpen(false);

  }

  }


const initialDropdown = () => {
  return(
    // https://flowbite.com/docs/components/dropdowns/
  
    <div>
      <button id="dropdownHoverButton"  onClick = {toggleDropdown} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>
  
      <div id="dropdownHover" className="z-10 hidden bg-whpropsite divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
  
        
      </div>
  
    </div>
  
  );
}

const renderDropdownValues = () => {
  return(
    // https://flowbite.com/docs/components/dropdowns/
  
    <div>
      <button id="dropdownHoverButton" onClick = {toggleDropdown} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>
  
      <div id="dropdownHover" className="z-10 bg-whpropsite divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
        
      </div>
  
    </div>
  
  );

}


if (!isOpen){
  return initialDropdown();
}
else if (isOpen){
  return renderDropdownValues();
}


}

export default dropdown