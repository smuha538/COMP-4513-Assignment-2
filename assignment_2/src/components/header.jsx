import About from './about.jsx';
import Dropdown from './dropdown.jsx'

const Header = (props) => {


    return (


<header>
    {/* https://flowbite.com/blocks/marketing/header/ */}
    <nav class="bg-slate-300 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
  <div class="flex flex-wrap justify-end  ">
  <Dropdown/>
  <About/>

    <div class="flex items-center lg:order-2">

    </div>
  </div>
</nav>

</header>
    )


}

export default Header;