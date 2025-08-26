import { useState } from "react";

export default function ImageSlider(props) {
  const images = props.images;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-full flex flex-col">
      <img src={images[currentIndex]} className="w-full flex-1 object-cover bg-gray-200" />

      <div className="w-full h-[100px] bg-red-200">
        {
            images.map(
                (image,index) => {
                    return (
                        <img key={index} className='w-[90px] h-[90px] m-2 rounded-2xl' src={image} />
                    )
                }
            )
            
        }
      </div>
    </div>
  );
}
