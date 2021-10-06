import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import CarsContainer from '../components/CarsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Logo2 from '../assets/logo2.PNG';
import ModalPercentageCard from '../components/ModalPercentageCard';

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState('hidden');

  return (
    <div>
      <div className={`${modalOpen} modal`}>
        <div className='flex p-2'>
          <img src={Logo2} alt='' />
          <button className='closeModal' onClick={() => setModalOpen('hidden')}>
            <i class='fa fa-times' aria-hidden='true'></i>
          </button>
        </div>
        <div className='modalBody'>
          <h2>Dove usi l’auto?</h2>
          <p>
            Utilizza i
            <span style={{ color: '#FF5D27', fontWeight: '500' }}>cursor</span>
            per modificare le percentuali relative al tipo di percorso che fai
            abitualmente, una volta impostati i valori clicca su
            <span style={{ color: 'black', fontWeight: '500' }}>Ricalcola</span>
          </p>
          <div className='whiteCardsContainer modalCardsContainer'>
            <div className='flex '>
              <ModalPercentageCard
                percentage='33'
                text='CITTA'
                color='#FFC31F'
              />
              <div className='icons'>
                <ModalPercentageCard
                  percentage='33'
                  text='STATARE'
                  color='#3E97FF'
                />
              </div>
              <ModalPercentageCard
                percentage='33'
                text='AUSTRIDA'
                color='#26BE0A'
              />
            </div>
            <button className=' w-full modalBtn'>Cambia percentuali</button>
          </div>
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
