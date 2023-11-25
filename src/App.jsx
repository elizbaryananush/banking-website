import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Careers from './Pages/Careers';
import About from './Pages/About';
import Security from './Pages/Security';

function App() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(window.innerWidth);
  const [buttons, setButtons] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      setButtons(window.innerWidth > 450);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Router >
        <div style={buttons ? { backdropFilter: 'blur(8px)', position: 'fixed' } : null} className='Navbar'>
          <div className="Logo">
            <div className="logo">
              <svg className='icon' width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="shape-30">
                  <g id="shape-30_2">
                    <path d="M7.5 15.125L15 7.625L22.5 15.125L15 22.625L7.5 15.125Z" fill="#CAFF33" />
                    <path d="M27.5 10.125L22.5 15.125V7.625H15L20 2.625H27.5V10.125Z" fill="#CAFF33" />
                    <path d="M27.5 20.125L22.5 15.125V22.625H15L20 27.625H27.5V20.125Z" fill="#CAFF33" />
                    <path d="M2.5 20.125L7.5 15.125V22.625H15L10 27.625H2.5L2.5 20.125Z" fill="#CAFF33" />
                    <path d="M2.5 10.125L7.5 15.125V7.625H15L10 2.625H2.5L2.5 10.125Z" fill="#CAFF33" />
                  </g>
                </g>
              </svg>
              <svg className='text' width="84" height="15" viewBox="0 0 84 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="YourBanK">
                  <path d="M11.515 0.625L6.90612 8.76315V14.1243H4.73389V8.76315L0.125 0.625H2.59945L5.82945 6.60326L9.04056 0.625H11.515Z" fill="white" />
                  <path d="M15.381 14.375C13.9958 14.375 12.8184 13.8865 11.8488 12.9094C10.8792 11.9323 10.3944 10.7302 10.3944 9.30312C10.3944 7.87605 10.8792 6.67397 11.8488 5.69688C12.8184 4.71979 13.9958 4.23124 15.381 4.23124C16.7788 4.23124 17.9562 4.71979 18.9133 5.69688C19.8829 6.67397 20.3677 7.87605 20.3677 9.30312C20.3677 10.7302 19.8829 11.9323 18.9133 12.9094C17.9562 13.8865 16.7788 14.375 15.381 14.375ZM13.2844 11.4823C13.851 12.0608 14.5499 12.3501 15.381 12.3501C16.2121 12.3501 16.911 12.0608 17.4777 11.4823C18.0444 10.9038 18.3277 10.1774 18.3277 9.30312C18.3277 8.42888 18.0444 7.70249 17.4777 7.12395C16.911 6.54541 16.2121 6.25614 15.381 6.25614C14.5499 6.25614 13.851 6.54541 13.2844 7.12395C12.7177 7.70249 12.4344 8.42888 12.4344 9.30312C12.4344 10.1774 12.7177 10.9038 13.2844 11.4823Z" fill="white" />
                  <path d="M28.5779 4.48194H30.6179V14.1243H28.5779V12.8901C27.9608 13.88 26.9849 14.375 25.6501 14.375C24.5671 14.375 23.692 14.0214 23.0245 13.3143C22.3571 12.6072 22.0234 11.6366 22.0234 10.4024V4.48194H24.0634V10.1902C24.0634 10.9102 24.2523 11.463 24.6301 11.8487C25.0079 12.2344 25.5242 12.4272 26.179 12.4272C26.8968 12.4272 27.476 12.2023 27.9168 11.7523C28.3575 11.2894 28.5779 10.5888 28.5779 9.65025V4.48194Z" fill="white" />
                  <path d="M35.0433 6.10186C35.5596 4.90621 36.5293 4.30838 37.9522 4.30838V6.56469C37.1715 6.51327 36.4915 6.70611 35.9122 7.14323C35.333 7.5675 35.0433 8.2746 35.0433 9.26455V14.1243H33.0033V4.48194H35.0433V6.10186Z" fill="white" />
                  <path d="M47.374 7.12395C47.9532 7.4325 48.4066 7.85677 48.734 8.39674C49.0614 8.93671 49.2251 9.56025 49.2251 10.2674C49.2251 11.373 48.841 12.2923 48.0729 13.0251C47.3047 13.7579 46.3666 14.1243 45.2584 14.1243H39.5917V0.625H44.8428C45.9258 0.625 46.8388 0.984982 47.5817 1.70494C48.3373 2.41205 48.7151 3.29915 48.7151 4.36624C48.7151 5.53617 48.268 6.45541 47.374 7.12395ZM44.8428 2.70775H41.764V6.25614H44.8428C45.3214 6.25614 45.7243 6.089 46.0517 5.75473C46.3791 5.40761 46.5429 4.98335 46.5429 4.48194C46.5429 3.98054 46.3791 3.56271 46.0517 3.22844C45.7243 2.88131 45.3214 2.70775 44.8428 2.70775ZM45.2584 12.0416C45.7621 12.0416 46.184 11.8616 46.524 11.5016C46.8766 11.1287 47.0529 10.6788 47.0529 10.1516C47.0529 9.62453 46.8766 9.18098 46.524 8.821C46.184 8.44817 45.7621 8.26175 45.2584 8.26175H41.764V12.0416H45.2584Z" fill="white" />
                  <path d="M58.5606 4.48194H60.6006V14.1243H58.5606V12.7358C57.7925 13.8286 56.6906 14.375 55.2551 14.375C53.958 14.375 52.8499 13.8865 51.9306 12.9094C51.0114 11.9194 50.5517 10.7173 50.5517 9.30312C50.5517 7.87605 51.0114 6.67397 51.9306 5.69688C52.8499 4.71979 53.958 4.23124 55.2551 4.23124C56.6906 4.23124 57.7925 4.77121 58.5606 5.85116V4.48194ZM53.4417 11.5209C54.0084 12.0994 54.7199 12.3887 55.5762 12.3887C56.4325 12.3887 57.144 12.0994 57.7106 11.5209C58.2773 10.9295 58.5606 10.1902 58.5606 9.30312C58.5606 8.41602 58.2773 7.68321 57.7106 7.10466C57.144 6.51327 56.4325 6.21757 55.5762 6.21757C54.7199 6.21757 54.0084 6.51327 53.4417 7.10466C52.8751 7.68321 52.5917 8.41602 52.5917 9.30312C52.5917 10.1902 52.8751 10.9295 53.4417 11.5209Z" fill="white" />
                  <path d="M67.9462 4.23124C69.0292 4.23124 69.9043 4.58479 70.5717 5.2919C71.2392 5.99901 71.5729 6.96967 71.5729 8.20389V14.1243H69.5329V8.41602C69.5329 7.69606 69.344 7.14323 68.9662 6.75754C68.5884 6.37184 68.0721 6.179 67.4173 6.179C66.6995 6.179 66.1203 6.41041 65.6795 6.87325C65.2388 7.32322 65.0184 8.01747 65.0184 8.956V14.1243H62.9784V4.48194H65.0184V5.71616C65.6355 4.72622 66.6114 4.23124 67.9462 4.23124Z" fill="white" />
                  <path d="M83.875 14.1243H81.2872L76.0739 7.70249V14.1243H73.9017V0.625H76.0739V6.6804L81.0983 0.625H83.6861L78.3405 7.20109L83.875 14.1243Z" fill="white" />
                </g>
              </svg>
            </div>
            <button onClick={() => {
              setSize(!size)
              setButtons(!buttons)
            }} style={size ? { display: 'none' } : null} className="phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="#333333" />
              </svg>
            </button>
          </div>
          <ul style={size > 450 ? null : !buttons ? {display : 'none'} : null} className="list">
            <li
              onClick={() => {
                setPage(1)
                window.scrollTo({
                  top: 0,
                  // behavior: 'smooth', // Use smooth scrolling for a nicer effect
                });
              }}
              className={page === 1 ? 'Active' : ''}
            >Home</li>
            <li
              onClick={() => {
                setPage(2)
                window.scrollTo({
                  top: 0,
                  // behavior: 'smooth', // Use smooth scrolling for a nicer effect
                });
              }}
              className={page === 2 ? 'Active' : ''}
            >Careers</li>
            <li
              onClick={() => {
                setPage(3)
                window.scrollTo({
                  top: 0,
                  // behavior: 'smooth', // Use smooth scrolling for a nicer effect
                });
              }}
              className={page === 3 ? 'Active' : ''}
            >About</li>
            <li
              onClick={() => {
                setPage(4)
                window.scrollTo({
                  top: 0,
                  // behavior: 'smooth', // Use smooth scrolling for a nicer effect
                });
              }}
              className={page === 4 ? 'Active' : ''}
            >Security</li>
          </ul>
          <div style={buttons ? null : { display: 'none' }} className="buttons">
            <p>Sign Up</p>
            <button>Login</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={
            page === 4 ? <Home size={size} /> :
              page === 2 ? <Careers /> :
                page === 3 ? <About /> :
                  page === 1 ? <Security /> : null} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
