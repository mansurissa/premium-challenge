const PercentageCard = ({ percentage, text, color }) => {
  return (
    <div className='w-full '>
      <div className='whiteCard '>
        <h1 style={{ color }}>
          {percentage}
          <span className='sign'>%</span>
        </h1>
        <p>{text}</p>
      </div>
      <div
        style={{ height: '10px', width: '100%', backgroundColor: color }}
      ></div>
    </div>
  );
};

export default PercentageCard;
