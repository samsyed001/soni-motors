import Footer from "../components/Footer"
import "./Finance.css"

const Finance = () => {
  return (
    <>
    <section>
    <div className="form1-back">
      <img src="./assets/back-Img.png" alt="" />
    </div> 
  </section>
  <section>
    <div className="main">
      <div className="aside1">
        <div className="text" style={{ padding: 10 }}>
          <h1 style={{fontSize:"34px" , fontWeight:"bold"}}>Financing</h1>
          <br />
          <h2 className="F-depart" >
            <b>Welcome to Our Financing Department</b>
          </h2>
          <br />
          <p>
            At SONI AUTO MARKET, we are here to make purchasing your vehicle as
            easy as possible. We partnered with some of the leading financing
            institutions to make it happen.
          </p>
          <br />
          <p>Please, apply directly with the following institutions.</p>
          <br />
          <p>
            Of course, if you need further help, do not hesitate to contact us
            and we will do everything we can to get you approved.
          </p>
          <br />
<<<<<<< HEAD
          <button className="calculate-but all-btn">Calculate Now <i className="fa-solid fa-angle-right"></i></button>
=======
          <button className="calculate-but">Calculate Now <i class="fa-solid fa-angle-right"></i></button>
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
        </div>
      </div>
      <div className="aside2">
        <div className="text" style={{ padding: "10px 0px", width: "30rem" }}>
<<<<<<< HEAD
          <button className="applyonline all-btn">Apply online Today</button>
=======
          <button className="applyonline">Apply online Today</button>
>>>>>>> 11a30d3e84a801f3a0d9db239b0dccc8500baaf4
        </div>
      </div>
    </div>
  </section>

  <section>
    <Footer/>
  </section>
    </>
  )
}

export default Finance
