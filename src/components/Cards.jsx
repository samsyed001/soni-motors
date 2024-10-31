


import { BsEmojiSurpriseFill } from "react-icons/bs";
import { LiaComments } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";

const InstagramCard = ({ imgSrc, likes, description }) => {
  return (
    <a href="https://www.facebook.com/p/Soni-Auto-Market-100088960650309/" target="_blank">
    <div className="bg-white shadow-md overflow-hidden  mx-auto card-ki-width">
      {/* Header */}
      <div className="flex items-center p-2 ">
        <img
          src="./assets/soni_auto_1 3.png" 
          alt="Soni Auto Market"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold">Soni Auto Market</p>
          <p className="text-sm text-gray-500">80 Manitoba St E, Canada</p>
        </div>
        <span className="ml-auto three-dots text-gray-400">•••</span>
      </div>

      {/* Image */}
      <img src={imgSrc} alt="Car" className="w-full h-60 p-3 object-cover" />

      {/* Footer */}
      <div className="p-4">
        <div className="">
          <div className="flex space-x-2 text-gray-600 icons-card" style={{justifyContent:'space-between', alignItems:'center'}}>
          <div className="flex text-gray-600 icons-card">
          <i className="fa-regular fa-thumbs-up" style={{color:'#fff', background:'#577FFA', padding:'5px', borderRadius:'100px', fontSize:'18px', height:'30px', width:'30px', display:'flex', alignItems:'center', justifyContent:'center'}}></i> 
          <BsEmojiSurpriseFill  style={{color:'#F5D675',background:'black',border:'2px solid #F5D675',  borderRadius:'100px', fontSize:'55px', height:'30px', width:'30px', display:'flex', alignItems:'center', justifyContent:'center'}} />
          {/* <i className="fa-regular fa-smile-o" style={{color:'#fff', background:'#F5D675', padding:'5px', borderRadius:'100px', fontSize:'15px'}}></i> */}
          <i className="fa-regular fa-heart" style={{color:'#fff', background:'#D14D61', padding:'5px', borderRadius:'100px', fontSize:'18px', height:'30px', width:'30px', display:'flex', alignItems:'center', justifyContent:'center'}}></i>
          </div>
          <div>
            <p>
              75 Comments
            </p>
          </div>
          </div>
          <hr/>
          <div className="flex space-x-2 text-gray-600 icons-card py-4" style={{justifyContent:'space-between', alignItems:'center'}}>
          <button style={{display:'flex', width:'50%', alignItems:'center', margin:'auto', fontSize:'17px', gap:'5px'}}>
          <AiOutlineLike style={{fontSize:'20px', marginBottom:'0px'}}  /> Like
          </button>
          <button style={{display:'flex', width:'50%', alignItems:'center', margin:'auto', fontSize:'17px',gap:'5px', justifyContent:'end'}}>
          <LiaComments style={{fontSize:'20px', marginBottom:'0px'}} />Comments
          </button>
         {/* <p className="text-sm font-semibold">{likes} likes</p> */}
         </div>
        </div>
        {/* <p className="text-gray-800 text-sm">{description}</p> */}
      </div>
    </div>
    </a>
  );
};

export default InstagramCard

