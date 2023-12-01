import './App.css';
import Bar from "./components/left/bar";
import Navbar from "./components/right/Navbar/navbar"
import Profile from './components/right/Profiles/profile';
import SearchBar from "./components/right/SearchBar/searchbar"
import Footer from './components/footer/footer';
function App() {
  return (
   <>
   <div className='main-content'>
    <div className='leftGrid'><Bar/></div>
    <div className="rightGrid">
      <Navbar/>
      <SearchBar/>
      <Profile/>
      <Footer/>
    </div>
    
   </div>
   {/* <div className='last'><Footer/></div> */}
   </>
  );
}

export default App;
