const ModalPercentageCard = ({ percentage, text, color }) => {
  return (
    <div className='w-full '>
      <div
        style={{
          height: '10px',
          width: '100%',
          backgroundColor: color,
          marginTop: '0.5rem',
          marginBottom: '2rem'
        }}
      ></div>
      <div className='whiteCard '>
        <h1 style={{ color }}>
          {percentage}
          <span className='sign'>%</span>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalPercentageCard;
