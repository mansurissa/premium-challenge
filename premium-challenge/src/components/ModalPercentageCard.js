const ModalPercentageCard = ({ percentage, text, color }) => {
  return (
    <div className='w-full ' style={{ width: '100%' }}>
      <div
        style={{
          height: '10px',
          width: '100%',
          backgroundColor: color,
          marginTop: '0.5rem',
          marginBottom: '2rem'
        }}
      ></div>
      <div className='whiteCard'>
        <h3 style={{ color }}>
          {percentage}
          <span className='sign'>%</span>
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalPercentageCard;
