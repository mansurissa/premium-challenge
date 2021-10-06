import Logo2 from '../assets/logo2.PNG';
import PercentageCard from './shared/PercentageCard';

const Header = ({ setModalOpen }) => {
  return (
    <div className='flex flexDirection header' style={{ marginTop: '70px' }}>
      <div className='left'>
        <div className='flex p-2'>
          <img src={Logo2} alt='' style={{ marginRight: '20px' }} />
          <p>
            I costi chilometrici relativi alle auto provate dal 2016 ad oggi.
            <a href='#0'> Più info</a>
          </p>
        </div>
        {/* <div className='externalLink'>
          <div className='rounded'>
            <p>
              <span>
                <i class='fa fa-external-link' aria-hidden='true'></i>
              </span>
              Perezzi agrounati al 08/06/2021
            </p>
          </div>
        </div> */}
      </div>
      <div className='bg-gray300'>
        <h3 className='text-center'>
          Costi calcolati su queste percentuali di utilizzo
        </h3>
        <div className='flex'>
          <PercentageCard percentage='33' text='CITTA' color='orange' />
          <PercentageCard percentage='33' text='STATARE' color='blue' />
          <PercentageCard percentage='33' text='AUSTRIDA' color='green' />
        </div>
        <button
          className='openModal w-full'
          onClick={() => setModalOpen('block')}
        >
          Cambia percentuali
        </button>
      </div>
      <div className='mobOnly w-full flex'>
        <p>
          <span className='rounded'>
            <i class='fa fa-external-link' aria-hidden='true'></i>
          </span>
          Perezzi
        </p>
        <select>
          <option value='volvo'>Ordina per Costo</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
