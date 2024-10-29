import "../screens/Home.css"
import BackImgSection  from "../components/BackImgSection";
import InstagramCard from "../components/Cards";              
import Comparison from "../components/Comparison";
import Comparison2 from "../components/Comparison2";
import Footer from "../components/Footer";
import LastImg from "../components/LastImg";

const posts = [
  {
    imgSrc: "./assets/post2.jpg.png", 
    likes: "573",
    description: "SoniAutoMarket AUDI S6 KEEPING CALM IN THE STORM! 😎",
  },
  {
    imgSrc: "./assets/post3.jpg.png", 
    likes: "1084",
    description:
      "SoniAutoMarket M550i Landed in stock✅ #soniautomarket #weselldreams #bmw #m550i",
  },
  {
    imgSrc: "./assets/post4.jpg.png", 
    likes: "1510",
    description:
      "SoniAutoMarket Can you guess what car it is? #soniautomarket #weselldreams #viral #carreels",
  },
  {
    imgSrc: "./assets/post5.jpg.png",
    likes: "2872",
    description: "SoniAutoMarket BOSS WHIP FOR WINTERS❄️ #soniautomarket #weselldreams",
  },
];

const Home = () => {
  return (
    <>
      <div style={{ backgroundImage:"url(./assets/back.png)",backgroundSize: "cover" ,backgroundPosition: "center" ,maxWidth: "100%" ,height: "auto"}} className='home-sec'>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <div style={{ width: "96%" , marginTop:"20px" }} className="bg-black bg-opacity-50 text-white text-center p-8 w-full rounded-lg">
            <h1 className="text-2xl text-center md:text-4xl font-bold mb-6">
              WELCOME TO <span style={{color:'#F40000'}}>SONI AUTO MARKET</span>
            </h1>

            {/* Input Row */}
            <div className="flex flex-col items-center gap-4 w-full drop-home-wala">
              <input
                type="text"
                placeholder="Find Your Car (Year Make Model)"
                className="w-full p-2 bg-transparent rounded border border-gray-300 text-white placeholder-white"
              />

              {/* Dropdowns and Search Button Row */}
              <div className="drop-down-menu w-full">
                <select className="w-36 md:w-48 p-1 rounded border border-gray-300 text-black">
                  <option>Make</option>
                  <option>Body</option>
                  <option>Make</option>
                  {/* Add options for car makes */}
                </select>
                <select className="w-36 md:w-48 p-1 rounded border border-gray-300 text-black">
                  <option>Model</option>
                  <option>AC</option>
                  <option>Milage</option>
                  {/* Add options for car models */}
                </select>
                <select className="w-36 md:w-48 p-1 rounded border border-gray-300 text-black">
                  <option>Min Year</option>
                  <option>Max Year</option>
                  <option>Fuel Type</option>
                  {/* Add options for years */}
                </select>
                <select className="w-36 md:w-48 p-1 rounded border border-gray-300 text-black">
                  <option>Max Year</option>
                  <option>Transmission</option>
                  <option>Average</option>
                  {/* Add options for years */}
                </select>
                <button style={{padding: '4px 20px' }} className="text-white rounded w-36 md:w-48  search-wala-button hover-btn-sary ">
                  Search
                </button>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button  className="text-white py-2 px-5 rounded hover-btn-sary home-k-btn">
                Cars less than $5000
              </button>
              <button className="text-white py-2 px-5 rounded hover-btn-sary home-k-btn">
                Cars less than $10000
              </button>
              <button  className="text-white py-2 px-5 rounded hover-btn-sary home-k-btn">
                Cars above $10000
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className='mt-8 '>
        <div className='text-center '>
          <h1 style={{marginBottom:'50px'}} className="text-2xl text-center md:text-3xl font-bold ">
            QUICK SEARCH BY<span style={{color:'#F40000'}}> MAKE</span>
          </h1>
        </div>
        <div className="mt-10 flex justify-center flex-wrap ">
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/Link (5).png" alt="" />
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/link7.png" alt="" />
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/Link (1).png" alt="" />
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/Link (2).png" alt="" />
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/Link (3).png" alt="" />
          <img className="w-full max-w-[220px] h-auto mx-2 mb-4" src="./assets/Link (4).png" alt="" />
        </div>
      </section>

      <section>
        <BackImgSection/>
      </section>

      <section>
        <Comparison />
        <Comparison2 />
      </section>

      <section className='mt-5 home-background-imgs '>
        <div className='text-center'>
          <h1 className="text-2xl text-center md:text-3xl font-bold mb-16">
            QUICK SEARCH BY<span className="text-red-500"> BODY TYPE</span>
          </h1>
        </div>
        <div className="mt-10 flex justify-center flex-wrap gap-12 py-6">
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/convertible.png.png" alt="Convertible" />
            <span className="mt-2 text-center">Convertible</span>
          </div>
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/coupe.png.png" alt="Coupe" />
            <span className="mt-2 text-center">Coupe</span>
          </div>
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/HATCHBACK.png.png" alt="Hatchback" />
            <span className="mt-2 text-center">Hatchback</span>
          </div>
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/sedan.png.png" alt="Sedan" />
            <span className="mt-2 text-center">Sedan</span>
          </div>
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/suv.png.png" alt="SUV" />
            <span className="mt-2 text-center">SUV</span>
          </div>
          <div className="flex flex-col items-center mx-2 mb-4">
            <img className="w-auto max-w-[140px] h-[47px] object-contain" src="./assets/pickup.png.png" alt="Pickup" />
            <span className="mt-2 text-center">Pickup</span>
          </div>
        </div>
      </section>

      <section>
        <LastImg />
      </section>

               <section className="px-4 py-8 ">
        <div className="text-center mb-14 mt-6">
          <h2 className="text-3xl font-bold mb-4">
            SONI AUTO MARKETS ON <span className="text-red-500">INSTAGRAM</span>
          </h2>
          <p className="text-gray-600">We are committed to making you a long-lasting customer and friend</p>
        </div>
        <div className="grid gap-6  md:grid-cols-3 lg:grid-cols-4 ">
          {posts.map((post, index) => (
            <InstagramCard
              key={index}
              imgSrc={post.imgSrc}
              likes={post.likes}
              description={post.description}
            />
          ))}
        </div>
      </section>
      <section>
      <Footer/>
    </section>
    </>
  );
};

export default Home;

