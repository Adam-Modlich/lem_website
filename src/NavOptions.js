import './Nav.scss';

export default function NavOptions({isOpen}){
    return(
      <>
      <div className="optionList">
        <ul>
          <li>O Nas</li>
          <li>Osiągnięcia</li>
          <li>Projekty</li>
          <li>Zaufali nam</li>
          <li>Kontakt</li>
          <li className="icons"><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook"></a></li>
          <li className="icons"><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram"></a></li>
          <li className="icons"><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play"></a></li>
          <li className="icons"><a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok"></a></li>
        </ul>
      </div>
      <style jsx>{`

          .navbar{
            grid-template-rows: ${ isOpen ? '13vh' : '13vh'};
          }
          
          .optionList{
            height: ${ isOpen ? '35vh' : '0'};
          }

          li{
            display: ${ isOpen ? 'block' : 'none'};
          }

        `}</style>
      </>

    
    )
}