import {React,useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios"


function Freebook() {
  const [book,setBook] = useState([])
  
  useEffect(() => {
   const getBook = async () =>{
    try {
      const res = await axios.get("http://localhost:4001/book");

      setBook(res.data.filter((data) => data.category === "free"))
      console.log(res.data)
      
    } catch (error) {
      console.log(error);
    }

   }
   getBook();

  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h2 className="font-semibold text-xl pb-2">Free Offered Courses</h2>
          <p>
            Discover a diverse range of courses designed to cater to your
            learning needs and aspirations. Whether you're looking to develop
            new skills, advance your career, or simply explore new interests,
            our free courses provide high-quality education accessible to
            everyone.
          </p>
        </div>

        <div>
          <Slider {...settings}>
           {book.map((item) => {return <Cards item={item} key={item.id}/>})}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
