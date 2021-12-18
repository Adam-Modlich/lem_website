import '../Projects/Projects.scss';
import CountUp from 'react-countup';
import $ from 'jquery';


export default function Projects(){
    const switchPicture = () => {
        let activeVisible;
        let i = 1;
        for(i; i<4; i++){
            if($(`.parent${(i)}`).css("visibility") == "visible"){
                activeVisible = i;
            }
        }
        
        $(`.parent${(activeVisible)}`).css("visibility", "hidden");
        if(activeVisible == 2){
            $(`.parent3`).css({visibility: "visible"});
            $(`.parent3`).animate({left:0+"px"});
            $(`.parent1`).css({visibility: "hidden"});
        }
        else{
            $(`.parent${((activeVisible+1)%3)}`).css({visibility: "visible"});
            $(`.parent${((activeVisible+1)%3)}`).animate({left:0+"px"});
        }

        for(i=1; i<4; i++){
            let $parentLeft = $(`.parent${(i)}`);
            if($parentLeft.css("visibility") == "hidden"){
                $parentLeft.css({left: $(window).width()})
                console.log($parentLeft);
            }
        }

        
                      
        
        // $(".parent"+ toString((activeVisible+2)%3).css("visibility", "hidden"));
    }


    return(
        <>
        <div className="parent1 parent">
            <div className='text'>
                <h1 className="projectTitle">LEM SSV</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                    <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5}/>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={100} duration={2.5}/>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5}/>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5}/>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
        </div>
        <div className="parent2 parent">
            <div className='text'>
                <h1 className="projectTitle">Photon</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                    <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5}/>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5}/>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5}/>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5}/>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
        </div>
        <div className="parent3 parent">
            <div className=' text'>
                <h1 className="projectTitle">Thunder</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam? Vitae eos incidunt dolorum culpa suscipit tenetur eius, inventore fuga quis, praesentium laborum in mollitia maxime fugit ut, dignissimos officia.</p>
                <div className="iconsContainer">
                    <div className='icons'>
                        <h1 className="value"><CountUp end={3} duration={2.5}/>s</h1>
                        <h4 className="valueIs">Przyspieszenie 0-100 km/h</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={300} duration={2.5}/>W</h1>
                        <h4 className="valueIs">Moc</h4>
                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={200} duration={2.5}/>km/h</h1>
                        <h4 className="valueIs">Prędkość Maksymalna</h4>

                    </div>
                    <div className='icons'>
                        <h1 className="value"><CountUp end={140} duration={2.5}/>kg</h1>
                        <h4 className="valueIs">Masa</h4>

                    </div>
                    
                </div>
            </div>
        </div>
        <div className='switchButton'>
            <button onClick={switchPicture}>cos cos</button>
        </div>
        </> 
    )
}