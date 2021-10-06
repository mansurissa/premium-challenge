import BottomNav from '../components/BottomNav';
import CarsContainer from '../components/CarsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CarsContainer />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default LandingPage;
