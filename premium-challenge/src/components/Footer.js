const Footer = () => {
  return (
    <div className='footer'>
      <div className='flex flexDirection'>
        <div className='flex flexDirection'>
          <h1>QUATTROROUTE</h1>
          <p className='appendix'>Sitemap | Contatti | Redaziona</p>
        </div>
        <ul className='socials'>
          <li className='each-li'>
            <a
              href='https://github.com/mansurissa'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa fa-youtube-play' aria-hidden='true'></i>
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://www.linkedin.com/in/nsabimana-issa-1411ba1b3/'
              target='#blank'
              rel='noreferrer'
            >
              <i className='fa fa-facebook' aria-hidden='true'></i>
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://twitter.com/Rwesamihigo'
              target='#blank'
              rel='noreferrer'
            >
              <i className='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>{' '}
          <li className='each-li'>
            <a
              href='https://twitter.com/Rwesamihigo'
              target='#blank'
              rel='noreferrer'
            >
              <i className='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li className='each-li'>
            <a
              href='https://www.linkedin.com/in/nsabimana-issa-1411ba1b3/'
              target='#blank'
              rel='noreferrer'
            >
              <i class='fa fa-rss' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
      <p className='appendix text-center'>
        Editoriale Domus SpA Via G. Mazzocchi, 1/3 20089 Rozzano (Mi) - Codice
        fiscale, partita IVA e iscrizione al Registro delle Imprese di Milano n.
        07835550158 R.E.A. di Milano n. 1186124 - Capitale sociale versato €
        5.000.000,00 - Tutti i diritti riservati - All rights reserved -
        Informativa Privacy - Informativa Cookie completa - Lic. SIAE n.
        4653/I/908
      </p>
    </div>
  );
};

export default Footer;
