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
        <h2 className='c-black'>
          {title}
          <span style={{ fontSize: '18px', fontWeight: 'normal' }}>{desc}</span>
        </h2>
        <div className='flex'>
          <div>
            <p>
              Tipo:<span className='detailText c-black bold'>{tipo}</span>
            </p>
            <p>
              Potenza:<span className='detailText c-black bold'>{potenza}</span>
            </p>
            <p>
              Cilindrata:
              <span className='detailText c-black bold'>{cilindrata} cm3</span>
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
                <div className='flex mt-1' key={i}>
                  <h2 style={{ color: item.color }}>
                    {item.number}
                    <span
                      style={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        color: 'gray'
                      }}
                    >
                      €100km {item.text}
                    </span>
                  </h2>
                  <i
                    class='fa fa-info-circle'
                    aria-hidden='true'
                    style={{ color: 'gray' }}
                  ></i>
                </div>
                <div
                  className='w-full '
                  style={{
                    background: '#eeee',
                    height: '8px',
                    marginTop: '10px',
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      display: 'flex',
                      justifyContent: 'space-around',
                      width: '100%'
                    }}
                  >
                    <div
                      style={{
                        background: '#fff',
                        height: '8px',
                        width: '4px'
                      }}
                    ></div>
                    <div
                      style={{
                        background: '#fff',
                        height: '8px',
                        width: '4px'
                      }}
                    ></div>
                    <div
                      style={{
                        background: '#fff',
                        height: '8px',
                        width: '4px'
                      }}
                    ></div>

                    <div
                      style={{
                        background: '#fff',
                        height: '8px',
                        width: '4px'
                      }}
                    ></div>
                    <div
                      style={{
                        background: '#fff',
                        height: '8px',
                        width: '4px'
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      background: item.color,
                      height: '8px',
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
