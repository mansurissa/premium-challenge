import CarCard from './CarCard';
import Car from '../assets/car.PNG';

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
        details={[{ number: 34.7, text: ' per le tue abitudini' }]}
      />
      <CarCard
        image={Car}
        title='VOLKSWAGEN ECO UP!'
        desc=' move 5 porte'
        color='green'
        btnText='GPL'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[{ number: 34.7, text: ' per le tue abitudini' }]}
      />
      <CarCard
        image={Car}
        title='VOLKSWAGEN ECO UP!'
        desc=' move 5 porte'
        color='orange'
        btnText='GPL'
        tipo='Berlina'
        potenza='150CV | 110kW'
        cilindrata='1395'
        details={[{ number: 34.7, text: ' per le tue abitudini' }]}
      />
    </div>
  );
};

export default CarsContainer;
