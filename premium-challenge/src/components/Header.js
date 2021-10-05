import Logo2 from '../assets/logo2.PNG';
import PercentageCard from './shared/PercentageCard';

const Header = () => {
  return (
    <div className='flex flexDirection header' style={{ marginTop: '60px' }}>
      <div className='left'>
        <img src={Logo2} alt='' />
        <p>
          I costi chilometrici relativi alle auto provate dal 2016 ad oggi.
          <a href='#0'> Più info</a>
        </p>
        <div>
          <div className='rounded'>
            <p>
              <span>
                <i class='fa fa-external-link' aria-hidden='true'></i>
              </span>
              Perezzi agrounati al 08/06/2021
            </p>
          </div>
        </div>
      </div>
      <div className='bg-gray300'>
        <h2>Got something to say</h2>
        <div className='flex'>
          <PercentageCard percentage='33' text='CITTA' color='orange' />
          <PercentageCard percentage='33' text='STATARE' color='blue' />
          <PercentageCard percentage='33' text='AUSTRIDA' color='green' />
        </div>
      </div>
    </div>
  );
};

export default Header;
