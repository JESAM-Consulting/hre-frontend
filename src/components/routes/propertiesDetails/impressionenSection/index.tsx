import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "./impressionenSection.scss";
import Slider from "react-slick";
import SliderImage from "../../../../assets/images/slider-first.svg";
import LeftIcon from "../../../../assets/icons/left-black.svg";
import RightIcon from "../../../../assets/icons/right-black.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";

import { useParams } from "react-router-dom";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="right-slider-icon-alignment" onClick={onClick}>
      <img src={RightIcon} alt="RightIcon" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="left-slider-icon-alignment" onClick={onClick}>
      <img src={LeftIcon} alt="LeftIcon" />
    </div>
  );
}
export default function ImpressionenSection() {
  const [cardsData, setCardsData] = useState<any>([]);
  const [mapdata, setMapData] = useState<any>([]);

  const [slidersImg, setSlidersImg] = useState<any>([]);

  const propImage: any = [];
  const ids  = useParams<any>();
  const imagepreview  = useParams<any>();
  const [sliderModalOpen, setSliderModalOpen] = useState( ids?.imagepreview === "imagepreview" ? true : false);


  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect(() => {
    propertyCardSlider();
  }, []);

  const propertyCardSlider = async () => {
    await axios
      .get(
        `https://api.hre.rejoicehub.com/api/v1/dataSchema/getDataSchema?id=${ids?.id}`
      )
      .then((res) => {
        setCardsData(res?.data?.payload?.getData);

        setMapData(
          res?.data?.payload?.getData.map(
            (data1: any) =>
              data1.data?.openimmo?.anbieter?.[0].immobilie?.[0].anhaenge?.[0].anhang
          )
        );
        // setMapData(aaaaa);
        // let bbbbb = aaaaa.map((data2: any) => {
        //   return (
        //     data2?.daten[0]?.pfad[0]
        //     )
        // })
      })
      .catch((error) => console.log(error));
  };
  console.log("imagepreview",ids?.imagepreview);

  return (
    <div>
      <div className="impression-section-all-content-alignment">
        <div className="container-sm">
          <h1>Impressionen</h1>

          <div className="image-slider-section-top-alignment">
            <Slider {...settings}>
              {mapdata &&
                mapdata[0]?.filter((itm:any)=> itm?.daten?.[0]?.pfad?.[0].split(".")[1] !== "pdf").map((item: any) => {
                  propImage.push({
                    original: `https://api.hre.rejoicehub.com/api/v1/image/${cardsData?.[0]?.projectName}/${item?.daten?.[0]?.pfad[0]}`,
                    thumbnail: `https://api.hre.rejoicehub.com/api/v1/image/${cardsData?.[0]?.projectName}/${item?.daten?.[0]?.pfad[0]}`,
                  });
                  console.log(
                    "ccdatatata",
                    cardsData?.[0]?.projectName,
                    item?.daten?.[0]?.pfad?.[0]
                  );
                  return (
                    <div>
                      {/* {data.data.openimmo.anbieter[0].immobilie[0].anhaenge[0].anhang.map(
                    (item: any) => {
                      {
                        console.log("item", item?.daten[0]?.pfad[0]);
                      }
                      return ( */}

                      <div>
                        <div
                          className="slider-image-style"
                          onClick={() => setSliderModalOpen(!sliderModalOpen)}
                        >
                          <img
                            src={`https://api.hre.rejoicehub.com/api/v1/image/${cardsData?.[0]?.projectName}/${item?.daten?.[0]?.pfad?.[0]}`}
                            alt="hreimage"
                          />
                        </div>
                      </div>
                      {/* );
                    }
                  )} */}
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
      {sliderModalOpen && (
        <div className="slider-modal">
          <div style={{ position: "relative" }}>
          {
              ids?.imagepreview === "imagepreview" ? 
              <>
              
              <NavLink to ="/properties-page">                

            <div
              className="modal-close-alignment"
              onClick={() => setSliderModalOpen(false)}
            >
              <svg
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current w-1-1/4 h-1-1/4 sm:w-2 sm:h-2"
              >
                <path fill="none" d="M1 1l12 12M13 1L1 13"></path>
              </svg>
            </div>
              </NavLink>
              </>
             :
              <div
              className="modal-close-alignment"
              onClick={() => setSliderModalOpen(false)}
            >
              <svg
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current w-1-1/4 h-1-1/4 sm:w-2 sm:h-2"
              >
                <path fill="none" d="M1 1l12 12M13 1L1 13"></path>
              </svg>
            </div> 
            }

               <ImageGallery items={propImage} />
          
            
          </div>
        </div>
      )}
    </div>
  );
}
