import React, { useState, useEffect } from "react";
import * as S from "./style";
import slider01 from "../../assets/slider01.png";
import slider02 from "../../assets/slider02.png";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <S.ImgArea>
      {/* <S.Image src={currentImageIndex === 0 ? slider01 : slider02}/>
      <S.Image src={currentImageIndex === 0 ? slider02 : slider01}/> */}
    </S.ImgArea>
  );
};

export default Slider;
