import './Nav.scss';

export default function Hamburger({isOpen}){
    return(
      <>
        <div className="One"></div>
        <div className="Two"></div>
        <div className="Three"></div>
      <style jsx>{`

          .One{
            transform: ${ isOpen ? 'translateY(8px) translateX(-5px) rotate(45deg)' : 'rotate(0deg)'};
            width: ${ isOpen ? '41px' : '30px'}
          }
          .Two{
            opacity: ${ isOpen ? 0 : 1};
          }
          .Three{
            transform: ${ isOpen ? 'translateY(-8px) translateX(-5px) rotate(-45deg)' : 'rotate(0deg)'};
            width: ${ isOpen ? '41px' : '30px'}
          }

        `}</style>
      </>

    
    )
}