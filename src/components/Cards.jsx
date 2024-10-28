



const InstagramCard = ({ imgSrc, likes, description }) => {
  return (
    <div className="bg-white  shadow-md overflow-hidden w-full max-w-sm mx-auto">
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
        <span className="ml-auto text-gray-400">•••</span>
      </div>

      {/* Image */}
      <img src={imgSrc} alt="Car" className="w-full h-60 p-3 object-cover" />

      {/* Footer */}
      <div className="p-4">
        <div className="">
          <div className="flex space-x-2 text-gray-600">
          <img src="./assets/d1bd.png.png" alt="" /> 
            <img src="./assets/h5ft.png.png" alt="" />{/* Replace with heart SVG if needed */}
            <img src="./assets/9y56.png.png" alt="" />
          </div>
         <div>
         <p className="text-sm font-semibold">{likes} likes</p>
         </div>
        </div>
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InstagramCard

