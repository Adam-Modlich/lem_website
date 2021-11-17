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
          <li className="iconsMobile">
            <a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook"></a>
            <a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram"></a>
            <a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play"></a>
            <a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok"></a>
          </li>
        </ul>
      </div>
      <ul className="icons">
        <li ><a href="https://www.facebook.com/LEMWroclaw" className="fa fa-facebook"></a></li>
        <li ><a href="https://www.instagram.com/lemwroclaw/" className="fa fa-instagram"></a></li>
        <li ><a href="https://www.youtube.com/channel/UCKeV5Mi90jYVxipqL6RhEyg" className="fa fa-youtube-play"></a></li>
        <li ><a href="https://www.facebook.com/LEMWroclaw" className="fab fa-tiktok"></a></li>
      </ul>
      <style jsx>{`
          
          .optionList{
            height: ${ isOpen ? '400px' : '0'};
          }

          .optionList li{
            display: ${ isOpen ? 'block' : 'none'};
          }

        `}</style>
      </>

    
    )
}