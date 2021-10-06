import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import CarsContainer from '../components/CarsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Logo2 from '../assets/logo2.PNG';

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState('hidden');

  return (
    <div>
      <div className={`${modalOpen} modal`}>
        <div className='flex p-2'>
          <img src={Logo2} alt='' />
          <button className='closeModal' onClick={() => setModalOpen('hidden')}>
            X
          </button>
        </div>
      </div>
      <NavBar />
      <Header setModalOpen={setModalOpen} />

      <CarsContainer />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default LandingPage;
