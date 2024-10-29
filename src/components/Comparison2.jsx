

const Comparison2 = () => {
    return (
      <>
            <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl compar-text md:text-3xl font-bold mb-12 sm:xl">Why sell your car online to <span style={{color:'#F40000'}}>Soni Auto Market ?</span></h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full comparison-gp">
          {/* Dealer Ship */}
          <div className="bg-white shadow-lg text-center transform transition-transform hover:scale-105 card-pr-hover">
            <div style={{cursor:"pointer"}} className="bg-gray-200 hover-bg-red  text-gray-700 font-semibold text-lg py-2">
              Dealer Ship
            </div>
            <ul style={{cursor:"pointer"}} className="mt-4 space-y-3 text-gray-600 text-start py-3 px-3">
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Higher Prices
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Limited Inventory
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                No inspection report
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Mostly former rental cars
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Limited Inventory
              </li>
            </ul>
          </div>
  
          {/* Soni Auto Market */}
          <div className="bg-white shadow-lg text-center transform transition-transform hover:scale-105 card-pr-hover">
            <div style={{cursor:"pointer"}} className="bg-gray-200 text-gray-700 hover-bg-red    font-semibold text-lg py-2 ">
              Soni Auto Market
            </div>
            <ul style={{cursor:"pointer"}} className="mt-4 space-y-3 text-gray-600 py-3 px-3">
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                Pay less than marketplace
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                Pre-book cars of your choice
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                RV boats
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                Hundreds of cars to pick from
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                Certified inspection report
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/Mask group.png" alt="Check Mark" className="mr-2" />
                No former rental cars or taxis
              </li>
            </ul>
          </div>
  
          {/* Private Seller */}
          <div className="bg-white shadow-lg text-center transform transition-transform hover:scale-105 card-pr-hover">
          <div style={{cursor:"pointer"}} className="bg-gray-200 text-gray-700 hover-bg-red   font-semibold text-lg py-2 ">
              Private Seller
            </div>
            <ul style={{cursor:"pointer"}} className="mt-4 space-y-3 text-gray-600 py-3 px-3">
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Haggle with strangers
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Potentially stolen car
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Limited Inventory
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                No inspection report
              </li>
              <li className="flex items-center">
                <img width={20} src="./assets/sad-face 5.png" alt="Sad Face" className="mr-2" />
                Unclear vehicle history
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Comparison2