import logo from './logo.svg';
import './App.css';

function App() {
    var videoArr = [{
        "id": "1",
        "title": "Croissants | Flour and Stone",
        "thumbnail": "https://i.vimeocdn.com/video/600595198_390x220.webp"
    },
    {
        "id": "2",
        "title": "Perfect Mashed Potatoes and Gravy",
        "thumbnail": "https://i.vimeocdn.com/video/604150056_390x220.webp"
    },
    {
        "id": "3",
        "title": "The Heart of Soba",
        "thumbnail": "https://i.vimeocdn.com/video/726986673_390x220.webp"
    },
    {
        "id": "4",
        "title": "Grilled Cheese 9 Ways",
        "thumbnail": "https://i.vimeocdn.com/video/570486309_390x220.webp"
    },
    {
        "id": "5",
        "title": "Pineapple Cheesecake",
        "thumbnail": "https://i.vimeocdn.com/video/602705517_390x220.webp"
    },
    {
        "id": "6",
        "title": "Lemony Chicken Noodle Soup",
        "thumbnail": "https://i.vimeocdn.com/video/537261616_390x220.jpg"
    }];
  const card= [{           
    "id": "7",
  "title": "Pumpkin Roll",
  "thumbnail": "https://i.vimeocdn.com/video/608805594_590x332.jpg"
},
{
  "id": "8",
  "title": "How to Brine a Turkey",
  "thumbnail": "https://i.vimeocdn.com/video/601730519_590x332.jpg"
},
{
  "id": "9",
  "title": "Stop Motion Dry-Brined Turkey Recipe",
  "thumbnail": "https://i.vimeocdn.com/video/456852083_590x332.jpg"
},
{
  "id": "10",
  "title": "Butternut Squash Ravioli",
  "thumbnail": "https://i.vimeocdn.com/video/600328152_590x332.jpg"
}];


    const videoCards = videoArr.map(item=>{
         return   (<div className="card">
         <img src={item.thumbnail} alt="pinapple" className="img-grid"/>
         <h3 className="text"> {item.title} </h3>
         </div>)

    });

    const Card=(car)=> <div className="card">
    <img src={car.thumbnail} alt="pinapple" className="img-grid"/>
    <h3 className="text"> {car.title} </h3>
    </div>

    

    return ( 
    <div className = "App" >
                <nav>
            <div className="leftmenu">
                <a className="logo" href="" className="logo">Traveller</a>
                <a href="" className="menu">Trips</a>
                <a href="" className="menu">About</a>
                <a href="" className="menu">Contact</a>

            </div>
        </nav>
        <div className="container">        {videoCards}
       </div>
   <div className="cardgrid">
       {card.map((item)=>Card(item))}
   </div>

        </div>
    );
}

export default App;