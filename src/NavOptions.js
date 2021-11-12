import './Nav.scss';

export default function NavOptions({isOpen}){
    return(
      <>
      <ul>
        <li>About</li>
        <li>Contact us</li>
        <li>Cos</li>
        <li>Cos</li>
        </ul>
      <style jsx>{`

          .navbar{
            grid-template-rows: ${ isOpen ? '10vh 10vh 10vh 10vh' : '10vh 0 0 0'};
          }

          li{
            display: ${ isOpen ? 'block' : 'none'};
          }

        `}</style>
      </>

    
    )
}