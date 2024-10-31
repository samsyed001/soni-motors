import Footer from "../components/Footer";
import "../screens/JeepWrangular.css"

function JeepWrangular() {
    return (
        <>
              <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full px-5">
          
<<<<<<< HEAD
       
=======
          {/* Top Section - Main and Small Images */}
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Full Image */}
            <div className="md:w-1/2">
              <img
                src="./assets/jeep2.png"
                alt="Main Jeep Image"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Side - Four Small Images */}
            <div className="md:w-1/2 grid grid-cols-2">
              <img src="./assets/jeep1.jpg" alt="Car back" className="w-full h-full object-cover"/>
              <img src="./assets/jeep1.jpg" alt="Car side" className="w-full h-full object-cover"/>
              <img src="./assets/jeep1.jpg" alt="Car rear" className="w-full h-full object-cover"/>
              <img src="./assets/jeep1.jpg" alt="Car interior" className="w-full h-full object-cover"/>
            </div>
          </div>
  
<<<<<<< HEAD
       
=======
          {/* Bottom Section - Car Details, Price, and Actions */}
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
          <div className="flex justify-center">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-4 w-full">
    
    {/* Left Column - Car Details */}
    <div className="md:w-2/3 p-4">
      <h2 style={{borderBottom: '4px solid black'}} className="text-3xl py-3 font-semibold mb-2">
        2023 Jeep Wrangler HIGH ALTITUDE | 4x4 | LEATHER HEATED <br /> SEATS | UCONNECT | ALLOYS
      </h2>
      <div className="flex-wrap items-center text-gray-600 mb-4">
        <h2 className="text-3xl py-3 font-semibold mb-2">About Vehicle</h2>
        <div className="flex gap-5 flex-wrap same-to">
          <span className="same-to-same" style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Odometer: <br /> 9,600 KM</span>
<<<<<<< HEAD
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' ,cursor:"pointer" }}>Body Style: <br /> Wagon</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center'  ,cursor:"pointer" }}>Engine Size: <br /> Electric</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center'  ,cursor:"pointer" }}>Engine Cylinders: <br /> Electric</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center'  ,cursor:"pointer" }}>Exterior Color: <br /> White</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center'  ,cursor:"pointer" }}>Transmission: <br /> Automatic</span>
=======
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Body Style: <br /> Wagon</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Engine Size: <br /> Electric</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Engine Cylinders: <br /> Electric</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Exterior Color: <br /> White</span>
          <span style={{ border: '1px solid gray', padding: '25px 20px',textAlign:'center' }}>Transmission: <br /> Automatic</span>
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
        </div>
      </div>
    </div>

    {/* Right Column - Price and Actions */}
    <div className="md:w-1/3 flex flex-col space-y-4 border-l pl-4">
      <span className="text-4xl text-center font-bold">$59,698</span>
      <p style={{fontSize:'20px'}} className="text-center"><span className="text-red-500 text-center">Taxes and fees</span></p>
<<<<<<< HEAD
      <button style={{fontWeight:'900' }} className="text-white text-center  py-2 px-4   w-full jepp-btn">
        Request Information
      </button>
      <button style={{fontWeight:'900'}} className="bg-white text-red-500 py-2 px-4 hover:bg-black hover:text-white  w-full gepp-black">
        Contact Us Now
      </button>
      <button style={{fontWeight:'900'}} className="bg-white text-red-500 py-2 px-4 hover:bg-black  hover:text-white  w-full gepp-black">
=======
      <button style={{border:'2px solid red',fontWeight:'900'}} className="bg-white text-red-500 text-center py-2 px-4 hover:bg-red-600 hover:text-white w-full">
        Request Information
      </button>
      <button style={{border:'2px solid red',fontWeight:'900'}} className="bg-white text-red-500 py-2 px-4 hover:bg-red-600 hover:text-white  w-full">
        Contact Us Now
      </button>
      <button style={{border:'2px solid red',fontWeight:'900'}} className="bg-white text-red-500 py-2 px-4 hover:bg-red-600  hover:text-white  w-full">
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
        Apply for Financing
      </button>
    </div>
  </div>
</div>


        </div>
      </div>

      <section>
        <Footer/>
      </section>
        </>
    );
}

export default JeepWrangular;

  