import Logo from '../assets/logo.PNG';

const NavBar = () => {
  return (
    <div className='flex navbar'>
      <div>
        <img src={Logo} alt='' />
      </div>
      <div className='c-gay'>
        <i class='fa fa-bars'></i>
      </div>
    </div>
  );
};

export default NavBar;
