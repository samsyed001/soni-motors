import "../components/Footer.css"

const Footer = () => {
  return (
    <>
<div className="footer-back-img mt-5 py-5">
  <div className="mb-10 f-logo">
    <img src="./assets/soni_auto_1 1.png" alt="" />
  </div>
  <div className="footerr  text-white">
    <div style={{marginRight:'70px'}} >
      <h4 className="heading text-lg " style={{fontWeight:'bold'}}>
        Dealership
      </h4>
      <p style={{fontSize:"14px"}} className="footer-p">
      Welcome to Soni Auto Market, your premier destination for quality vehicles and <br /> exceptional service. With over 17 years of experience in the automotive industry, <br /> Soni Auto Market has established itself as a trusted name in the market.
      </p>
      <div className=" mt-5 social-icons">
      <i className="fa-brands fa-tiktok"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook-f"></i>
      </div>

    </div>




  <div className="f-all-text " style={{lineHeight:"30px"}}>

  <div>
      <h4 className="heading text-lg" style={{fontWeight:'bold'}}>
        Dealership
      </h4>
      <p>Monday</p>
      <p>Tuesday</p>
      <p>Wednesday</p>
      <p>Thursday</p>
      <p>Friday</p>
      <p>Saturday</p>
      <p>Sunday</p>
    </div>
    <div className="mt-12">
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
      <p>11:00 AM - 07:00 PM</p>
    </div>
    <div>
      <h4 className="heading text-lg" style={{fontWeight:'bold'}}>
      Our Contacts
      </h4>
      <h6 style={{color:'red'}}>Call us +1 93843-34934-32</h6>
      <p>456 New Place, Moose Jaw, SK S6H 2B2, Canada</p>

     <div className="f-sell">
     

          
          {/* Google Maps Embed */}
          <div className="w-[310px] h-[150px] rounded-lg overflow-hidden shadow-lg border"  style={{backgroundColor:"#F3F3F3"}}>
            <iframe className=" iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2339370100154!2d-105.55868822353861!3d50.39324857147378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c51cb7e380dff%3A0x6f8c257d3428d9c3!2s80%20Manitoba%20St%20E%2C%20Moose%20Jaw%2C%20SK%20S6H%200A2%2C%20Canada!5e0!3m2!1sen!2sus!4v1698420000000!5m2!1sen!2sus"
              width="310px"
              height="150px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

      
      
     </div>
    </div>

  </div>





  </div>
</div>



    </>
  )
}

export default Footer
