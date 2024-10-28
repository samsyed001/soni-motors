        
import Footer from "../components/Footer";
import "./CarFinder.css"
const CarFinder = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen p-6" >
        <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6" >
          {/* Form Section */}
          <div className="flex flex-col space-y-6 lg:w-3/5  p-6 border border-gray-300 rounded-lg shadow-md" style={{background: "#F3F3F3"}} >
            <h2 className="text-2xl font-semibold">Card Finder</h2>
            <form className="space-y-4">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" placeholder="First Name" className="input border border-gray-300  w-full p-1 " />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" placeholder="Last Name" className="input border border-gray-300 w-full p-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Email" className="input border border-gray-300  w-full p-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" placeholder="Phone" className="input border border-gray-300  w-full p-1" />
                  </div>
                </div>
              </div>

              <div>
  <h3 className="text-lg font-medium">Vehicle Information</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="text-sm font-medium text-gray-700">Make</label>
      <input type="text" placeholder="Make" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Model</label>
      <input type="text" placeholder="Model" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Year</label>
      <input type="text" placeholder="Year" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Trim</label>
      <input type="text" placeholder="Trim" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Kilometer</label>
      <select className="input border border-gray-300  w-full p-1">
        <option>Body Style</option>
        <option>Coupe</option>
        <option>Sedan</option>
      </select>
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Body style</label>
      <select className="input border border-gray-300  w-full p-1">
        <option>Body Styles</option>
        <option>Automatic</option>
        <option>Manual</option>
      </select>
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Transmission</label>
      <select className="input border border-gray-300  w-full p-1">
        <option>Transmission</option>
        <option>AWD</option>
        <option>FWD</option>
        <option>RWD</option>
      </select>
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Drivetrain</label>
      <select className="input border border-gray-300  w-full p-1">
        <option>Drivetrain</option>
        <option>New</option>
        <option>Used</option>
      </select>
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Fuel Type</label>
      <input type="text" placeholder=" Fuel Type" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Condition</label>
      <input type="text" placeholder=" Condition" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Vin</label>
      <input type="text" className="input border border-gray-300  w-full p-1" />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Exterior Color</label>
      <select className="input border border-gray-300  w-full p-1">
        <option>Exterior Color</option>
        <option>New</option>
        <option>Used</option>
      </select>
    </div>
  </div>
  <div className="grid grid-cols-1 gap-4 mt-4">
    <div>
      <select className="input border border-gray-300  w-full p-1">
        <option>Search (Year make Model)</option>
      </select>
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Additional Info</label>
      <textarea placeholder="Additional Info" className="input h-24 border border-gray-300  w-full p-1"></textarea>
    </div>
  </div>
</div>

<button type="submit" className="p-3 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 mt-4">
  Submit
</button>

            </form>
          </div>

          {/* Contact Information */}
          <div style={{background: "#F3F3F3"}}  className=" card-bhai p-6 shadow-lg rounded-md w-full lg:w-1/4 h-max"> {/* Set height to max-content */}
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="flex items-center gap-2 mb-4"> 
        <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain"}} src="./assets/p3.png" alt="" />
          </div>
        <p className="text-lg "> <strong>Phone:</strong> +1 639-525-1669</p>
        </div>

        <div className="flex items-start gap-2 mb-4">
        <div>
          <img style={{width:"25px" , height:"25px", objectFit:"contain" , marginTop:"4px"}} src="./assets/p2.png" alt="" />
          </div>
        <p className="text-lg "><strong>Address:</strong> 80 Manitoba St E, Moose Jaw, SK S6H 0A2, Canada</p>

        </div>

        <div className="mb-4">
          <div className="flex items-start gap-2 mb-4">
          <div>
          <img style={{width:"20px" , height:"20px", objectFit:"contain" , marginTop:"4px"}} src="./assets/p1.png" alt="" />
          </div>
          <h3 className="text-lg font-semibold">Business Hours</h3>
          </div>
          <p className="info-text">Monday-Friday <span style={{marginLeft:'20px'}}>11:00 AM - 07:00 PM</span> </p>
          <p className="info-text">Saturday <span style={{marginLeft:'65px'}}>11:00 AM - 07:00 PM</span></p>
          <p className="info-text">Sunday <span style={{marginLeft:'75px'}}>Closed</span></p>
        </div>
        <button className="bg-black text-white p-3 w-30">Get Directions</button>
      </div>
      
        </div>
      </div>

      <section>
        <Footer/>
      </section>
    </>
  )
}

export default CarFinder
