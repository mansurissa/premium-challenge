const CarCard = ({
  image,
  color,
  title,
  desc,
  btnText,
  tipo,
  potenza,
  cilindrata,
  details
}) => {
  return (
    <div className='flex flexDirection p-2 carCard'>
      <div className='w-full'>
        <img src={image} alt='' className='w-full' />
      </div>
      <div className='w-full p-2'>
        <h2>
          {title}
          <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{desc}</span>
        </h2>
        <div className='flex'>
          <div>
            <p>
              Tipo:<span className='detailText'>{tipo}</span>
            </p>
            <p>
              Potenza:<span className='detailText'>{potenza}</span>
            </p>
            <p>
              Cilindrata:<span className='detailText'>{cilindrata} cm3</span>
            </p>
          </div>
          <button
            className='btn'
            style={{
              color,
              border: `2px solid ${color}`
            }}
          >
            {btnText}
          </button>
        </div>
        <div>
          {details &&
            details.map((item, i) => (
              <>
                key={i}
                <div className='flex'>
                  <h2 style={{ color }}>
                    {item.number}
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        color: 'gray'
                      }}
                    >
                      £100km {item.text}
                    </span>
                  </h2>
                  <i class='fa fa-info-circle' aria-hidden='true'></i>
                </div>
                <div
                  className='w-full '
                  style={{
                    background: 'gray',
                    height: '6px',
                    marginTop: '10px'
                  }}
                >
                  <div
                    style={{
                      background: color,
                      height: '6px',
                      width: item.number
                    }}
                  ></div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
