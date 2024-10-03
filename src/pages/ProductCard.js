import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

// Custom Previous Arrow
function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} left-[-40px]`} onClick={onClick}>
      <FaArrowLeft className="text-4xl text-white hover:text-indigo-500 cursor-pointer" />
    </div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} right-[-40px]`} onClick={onClick}>
      <FaArrowRight className="text-4xl text-white hover:text-indigo-500 cursor-pointer" />
    </div>
  );
}

function ProductCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className='w-full bg-image'>
      <div className="mt-20">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={product.img} alt={product.name} className="h-44 w-44 rounded-full"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{product.name}</p>
                <p className="text-center">{product.description}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const products = [
  {
    name: `Apple iPhone 13`,
    img: `/products/iphone13.jpg`,
    description: `The latest iPhone with A15 Bionic chip, 5G, and a sleek design.`
  },
  {
    name: `Samsung Galaxy S21`,
    img: `/products/galaxyS21.jpg`,
    description: `Experience the powerful performance of the Samsung Galaxy S21 with its dynamic AMOLED display.`
  },
  {
    name: `Sony WH-1000XM4`,
    img: `/products/sonyHeadphones.jpg`,
    description: `Industry-leading noise-canceling headphones with crystal clear sound.`
  },
  {
    name: `Dell XPS 13`,
    img: `/products/dellXPS13.jpg`,
    description: `Ultralight and powerful laptop with a stunning InfinityEdge display.`
  },
  {
    name: `Apple Watch Series 7`,
    img: `/products/appleWatch7.jpg`,
    description: `Stay connected, active, and healthy with the advanced Apple Watch Series 7.`
  },
  {
    name: `Google Pixel 6`,
    img: `/products/pixel6.jpg`,
    description: `Google's newest Pixel phone with a powerful camera and unique design.`
  },
  {
    name: `Bose SoundLink`,
    img: `/products/boseSoundlink.jpg`,
    description: `Wireless speaker delivering deep bass and immersive sound.`
  },
  {
    name: `Lenovo ThinkPad X1`,
    img: `/products/lenovoThinkpadX1.jpg`,
    description: `Durable, high-performance laptop for professionals on the go.`
  },
];

export default ProductCard;
