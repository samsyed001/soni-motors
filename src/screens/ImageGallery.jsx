 import '../screens/ImageGallery.css'
 import InstagramCard from "../components/Cards";    
import Footer from "../components/Footer";      

const ImageGallery = () => {

  const posts = [
    {
      imgSrc: "/assets/post2.jpg.png", // Replace with actual image path
      likes: "573",
      description: "SoniAutoMarket AUDI S6 KEEPING CALM IN THE STORM! 😎",
    },
    {
      imgSrc: "/assets/post3.jpg.png", // Replace with actual image path
      likes: "1084",
      description:
        "SoniAutoMarket M550i Landed in stock✅ #soniautomarket #weselldreams #bmw #m550i",
    },
    {
      imgSrc: "/assets/post4.jpg.png", // Replace with actual image path
      likes: "1510",
      description:
        "SoniAutoMarket Can you guess what car it is? #soniautomarket #weselldreams #viral #carreels",
    },
    {
      imgSrc: "/assets/post5.jpg.png", // Replace with actual image path
      likes: "2872",
      description: "SoniAutoMarket BOSS WHIP FOR WINTERS❄️ #soniautomarket #weselldreams",
    },
  ];
  return (
    <>

  <h1 style={{ textAlign: "center" , padding:"10px 0px" , fontSize:"34px" , fontWeight:"bold"}}>
    Our <span style={{ color: "red" }}>Media</span> Gallery
  </h1>
  
  {/* <div className="container mx-auto">

  <div
    className="main1"
    style={{
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: 6,
      flexWrap: "wrap"
    }}
  >
    <img
      src="./assets/gallery1.png"
      alt=""
      style={{ height: 364, marginLeft: 3 }}
      className="responsive"
    />
    <img
      src="./assets/gallery2.png"
      alt=""
      style={{ height: 364 }}
      className="responsive"
    />
    <img
      src="./assets/gallery3.png"
      alt=""
      style={{ height: 364 }}
      className="responsive"
    />
    <img
      src="./assets/gallery4.png"
      alt=""
      style={{ height: 364 }}
      className="responsive"
    />
    <img
      src="./assets/gallery5.png"
      alt=""
      style={{ height: 368 }}
      className="responsive"
    />
    <div
      className="inner"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "18rem"
      }}
    >
      <img src="./assets/gallery6.png" alt="" className="responsive5" />
      <img src="./assets/gallery7.png" alt="" className="responsive6" />
    </div>
    <img
      src="./assets/gallery8.png"
      alt=""
      style={{ height: 368 }}
      className="responsive"
    />
    <img
      src="./assets/gallery9.png"
      alt=""
      style={{ height: 368 }}
      className="responsive"
    />
    <img
      src="./assets/gallery10.png"
      alt=""
      style={{ height: 375 }}
      className="responsive"
    />
    <img
      src="./assets/gallery11.png"
      alt=""
      style={{ height: 375 }}
      className="responsive"
    />
    <img src="./assets/gallery12.png" alt="" className="responsive1" />
    <img src="./assets/gallery13.png" alt="" className="responsive2" />
    <img src="./assets/gallery14.png" alt="" className="responsive3" />
    <img
      src="./assets/gallery15.png"
      alt=""
      style={{ height: 537 }}
      className="responsive"
    />
    <img
      src="../assets/gallery16.png"
      alt=""
      style={{ height: 537 }}
      className="responsive"
    />
    <img
      src="./assets/gallery17.png"
      alt=""
      style={{ height: 537 }}
      className="responsive"
    />
  </div>


  </div> */}


 

 <div className="img-gallery-main">

    <div className="first-3-imgs">
     
     
     <img src="./assets/gallery1.png" alt="" />
     <img src="./assets/gallery2.png" alt="" />
   
     
     <img src="./assets/gallery3.png" alt="" />
     <img src="./assets/gallery4.png" alt="" />
     

    </div>

    

    <div className="sec-3-imgs">
     
 
      
   <img src="./assets/gallery5.png" alt="" />


    <img src="./assets/Screenshot 2024-10-28 144616.png" alt="" />


 
<img src="./assets/gallery8.png" alt="" />
<img src="./assets/gallery9.png" alt="" />
   
     

    </div>

    <div className="third-3-imgs">
     
     
     <img   src="./assets/gallery10.png" alt="" />
     <img  src="./assets/gallery11.png" alt="" />
   
     
     <img   src="./assets/gallery12.png" alt="" />
     

    </div>


    <div className="four-imgs">
    <img   src="./assets/gallery13.png" alt="" />
    <img  src="./assets/gallery14.png" alt="" />

    </div>

  </div>

  <div className="five-imgs">
  <img   src="./assets/gallery15.png" alt="" />
  <img  src="./assets/gallery16.png" alt="" />
  <img  src="./assets/gallery17.png" alt="" />
  </div>



  <section className="px-5 py-20">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            SONI AUTO MARKETS ON <span className="text-red-500">INSTAGRAM</span>
          </h2>
          <p className="text-gray-600">We are committed to making you a long-lasting customer and friend</p>
        </div>
        <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
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
  )
}

export default ImageGallery


