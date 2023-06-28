import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageSlider() {
  // s3 ㅑ
  const SLIDER_IMAGE = [
    {
      label: "1-30대 비전공자의 커리어 전환기",
      alt: "30대 비전공자의 커리어 전환기",
      url: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35427/43aa25a9-5574-4874-94f5-4c2bfdc3345e/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
      //   url: "/happyfolio/image01.png",
    },
    {
      label: "2-성장하는 주니어 일잘러는 어떻게 되나요?",
      alt: "성장하는 주니어 일잘러는 어떻게 되나요?",
      url: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35405/2480abbf-dfaf-4105-bdb9-4a9b62f2a051/%EC%95%8C%EC%9E%98%EB%94%B1%EA%B9%94%EC%84%BC-%EC%B7%A8%EC%97%85%EC%A4%80%EB%B9%84-%EC%8B%A0%EC%9E%85%EC%82%AC%EC%9B%90-%EB%85%B8%ED%95%98%EC%9A%B0-%EA%B3%B5%EC%9C%A0-cover.jpg",
    },
    {
      label: "3-3년차 제약회사 연구원이 알려주는 자소서_면접 노하우",
      alt: "3년차 제약회사 연구원이 알려주는 자소서_면접 노하우",
      url: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35108/4e4efa39-896d-4fa6-9dee-d5f243fe7b96/%EB%B6%99%EC%9E%844-%EB%8C%80%ED%91%9C%EC%9D%B4%EB%AF%B8%EC%A7%80.png",
    },
    {
      label: "4-지방대 문과생이 IT 취업에 이직까지 성공했다고?",
      alt: "지방대 문과생이 IT 취업에 이직까지 성공했다고?",
      url: "https://miniintern-upload.s3.ap-northeast-2.amazonaws.com/35132/fcb703d1-6104-4175-be4c-8982bed44e71/지방대-문과생이-IT-취업에-이직까지-성공했다고-cover.jpg",
    },
  ];
  const renderSlides = SLIDER_IMAGE.map((image) => (
    <div key={image.label} className="happyfolio-imageslide-img">
      <div
        src={image.url}
        alt={image.alt}
        // style={{ backgroundImage: `url("${image.url}")` }}
      />
    </div>
  ));

  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="happyfolio-imageslide-wrapper">
      <Carousel
        showArrows={true}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        interval={2000}
        dynamicHeight={true}
        showThumbs={false}
        selectedItem={SLIDER_IMAGE[currentIndex]}
        onChange={handleChange}
      >
        <div className="happyfolio-imageslide-img">
          <img src={SLIDER_IMAGE[0].url} alt="1" />
        </div>
        <div className="happyfolio-imageslide-img">
          <img src={SLIDER_IMAGE[1].url} alt="2" />
        </div>
        {/* {renderSlides} */}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
