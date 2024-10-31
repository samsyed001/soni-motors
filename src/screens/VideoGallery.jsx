import InstagramCard from "../components/Cards";    
<<<<<<< HEAD
import Footer from "../components/Footer";  
import AutoPlaySlider from "../components/SliderCard";
import "./Video.css"    
=======
import Footer from "../components/Footer";      
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4


const VideoGallery = () => {

  const posts = [
    {
<<<<<<< HEAD
      imgSrc: "/assets/post2.jpg.png", 
=======
      imgSrc: "/assets/post2.jpg.png", // Replace with actual image path
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
      likes: "573",
      description: "SoniAutoMarket AUDI S6 KEEPING CALM IN THE STORM! 😎",
    },
    {
<<<<<<< HEAD
      imgSrc: "/assets/post3.jpg.png", 
=======
      imgSrc: "/assets/post3.jpg.png", // Replace with actual image path
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
      likes: "1084",
      description:
        "SoniAutoMarket M550i Landed in stock✅ #soniautomarket #weselldreams #bmw #m550i",
    },
    {
<<<<<<< HEAD
      imgSrc: "/assets/post4.jpg.png", 
=======
      imgSrc: "/assets/post4.jpg.png", // Replace with actual image path
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
      likes: "1510",
      description:
        "SoniAutoMarket Can you guess what car it is? #soniautomarket #weselldreams #viral #carreels",
    },
    {
<<<<<<< HEAD
      imgSrc: "/assets/post5.jpg.png", 
=======
      imgSrc: "/assets/post5.jpg.png", // Replace with actual image path
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
      likes: "2872",
      description: "SoniAutoMarket BOSS WHIP FOR WINTERS❄️ #soniautomarket #weselldreams",
    },
  ];
  
  return (
    <>
<<<<<<< HEAD
               <section className="px-5 py-20 ">
=======
               <section className="px-5 py-20">
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            SONI AUTO MARKETS ON <span className="text-red-500">INSTAGRAM</span>
          </h2>
          <p className="text-gray-600">We are committed to making you a long-lasting customer and friend</p>
        </div>
<<<<<<< HEAD
        <AutoPlaySlider/>
      </section>

        <section  className="video-foter">
=======
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
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
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
          <Footer/>
        </section>

    </>
  )
}

export default VideoGallery
