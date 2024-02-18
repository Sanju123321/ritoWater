import "./home.css";

export const Home = () => {
  return (
    <div className="col-md-12 p-4 main-page-background">
      <h2 className="text-center">Our Services</h2>
      <div className="row">
        <div class="row mt-5">
                   <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images/flood.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Home Filtration Systems</h2>
                           <p>A home filtration system ensures clean and safe drinking water by eliminating pollutants and impurities from the water. They come in several varieties, like whole-house systems and point-of-use filters, and by decreasing the need for bottled water and cutting down on plastic waste, they offer convenience, health advantages, and environmental sustainability. </p>
                       </div>
                   </div>
                   <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images//002-drink-water.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Drinking Water Systems</h2>
                           <p>By eliminating pollutants and impurities, a drinking water system guarantees the quality of water for human use. These technologies, which offer clean, safe drinking water through whole-house systems or point-of-use filters, minimize environmental impact, encourage health and well-being, and lessen the need for bottled water. </p>
                       </div>
                   </div>
                    <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images/water-heater.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Problem Water Solution</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                       </div>
                   </div>
                   <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images/water-tap.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Tap Water Filter</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                       </div>
                   </div>
                   <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images/001-save-water.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Shower Water Filter</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                       </div>
                   </div>
                   <div class="col-lg-4 mb-4 col-md-6">
                       <div class="cover text-center p-4 shadow-md bg-white">
                           <img class="w-125" src={process.env.PUBLIC_URL + "/images/ph.png"} alt="" />
                           <h2 class="fs-4 fw-bolder mt-4">Home Water Test</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh. </p>
                       </div>
                   </div>
                   
               </div>
      </div>
    </div>
  );
};
