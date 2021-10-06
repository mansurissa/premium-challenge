import CarCard from './CarCard';
import Car from '../assets/car.PNG';
import Ford from '../assets/fordFiesta.PNG';
import Hyundai from '../assets/hyundai.PNG';
import ToyotaPius from '../assets/toyotaPius.PNG';
import ToyotaPius4 from '../assets/toyotaPius4.PNG';
import ToyotaAygo from '../assets/toyotaAygo.PNG';

const CarsContainer = () => {
  return (
    <div className='carsConatiner'>
      <CarCard
        image={Car}
        title='VOLKSWAGEN ECO UP!'
        desc=' move 5 porte'
        color='blue'
        btnText='GPL'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[
          { number: 34.7, text: ' per le tue abitudini', color: 'blue' }
        ]}
      />
      <CarCard
        image={Ford}
        title='FORD FIESTA '
        desc=' 1.1 75 CV Gpl 5p.!'
        color='blue'
        btnText='GPL'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[{ number: 49.5, text: ' ', color: 'blue' }]}
      />
      <CarCard
        image={Hyundai}
        title='HYUNDAY IONIQ '
        desc=' ELECTRIC EV 38.3 kWh'
        color='#009ee3'
        btnText='ELECTTRICA'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[
          { number: 34.0, text: '  - ricarica domestica', color: '#009ee3' },
          { number: 85.4, text: '  - col. cor. continua ', color: '#95cfed' }
        ]}
      />
      <CarCard
        image={ToyotaPius}
        title='TOYOTA PRIUS  '
        desc=' Plug-in Hybrid'
        color='green'
        btnText='PLUGIN-IN-HYBRID'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[
          { number: 51.1, text: '  - ricarica domestica', color: 'green' },
          { number: 68.1, text: '  - col. cor. alternata ', color: '#88b31a' }
        ]}
      />
      <CarCard
        image={ToyotaPius4}
        title='TOYOTA Prius 4ª serie '
        desc='  1.8 AWD Lounge'
        color='green'
        btnText='FULL-HYBRID'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[
          { number: 69.7, text: '  - ricarica domestica', color: 'green' }
        ]}
      />
      <CarCard
        image={ToyotaAygo}
        title='TOYOTA AYGO  '
        desc=' 1.0 VVT-i 72 CV 5p.'
        color='red'
        btnText='FULL-HYBRID'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[
          { number: 69.7, text: '  - ricarica domestica', color: 'red' }
        ]}
      />
      <button className='more'>CARICA ALTRE AUTO CARICA</button>
    </div>
  );
};

export default CarsContainer;
