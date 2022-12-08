import Slider from "react-slick";
import "./sliderSection.scss";
import SliderImage from "../../../../assets/images/slider-image.png";
import LeftIcon from "../../../../assets/icons/slider-left.svg";
import RightIcon from "../../../../assets/icons/slider-right.svg";
import react , {useState , useEffect} from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

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
export default function SliderSection() {
  const [cardData, setCardData] = useState<any>([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };


  useEffect(() => {
    propertyCardData();
  }, []);

  const propertyCardData = async () => {
    await axios
      .get(
        `https://api.hre.rejoicehub.com/api/v1/banner/getAllBanner?isActive=true`
      )
      .then((res) => {
        setCardData(res?.data?.payload?.contact);
        
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="slider-section-all-content-alignment">
        <div className="container">
          <Slider {...settings}>
            {cardData && cardData?.map((data : any) => {
              console.log("data",data)
              return (
                <div>
                  <div className="flex-box">
                    <div className="flex-items">
                      <div className="image-style">
                        <img src={data?.image} alt="SliderImage" />
                      </div>
                    </div>
                    <div className="flex-items">
                      <div className="text-style">
                        <span>{data?.field1}</span>
                        <h5>
                          {data?.field2}
                        </h5>
                      </div>
                      <div className="child-text-style">
                        <p>
                       {/* {ReactHtmlParser(data?.field3)} */}
                       {ReactHtmlParser(`${data?.field3}`)}
                        </p>
                        {/* <p>
                          Bei der zuletzt genannten Transaktion in
                          Hamburg-Schnelsen waren Sie vermittelnd tätig und
                          stehen seitdem mit unserem Unternehmen vertrauensvoll
                          in Kontakt.
                        </p>
                        <p>
                          Sie haben uns bereits vor dem Erwerb mit einer
                          fundierten Markt- und Standortanalyse umfassend
                          informiert und dies sehr professionell präsentiert.
                          Vor- und Nachteile hinsichtlich der Planung wurden
                          nicht verschwiegen und konnten entsprechend in
                          Abstimmung mit unserem Architekturbüro
                          Berücksichtigung finden.
                        </p>
                        <p>
                          Die Verhandlungen zwischen uns und der Verkäuferseite
                          haben Sie zielführend konstruktiv aufgebaut, uns stets
                          über neue Sachverhalte informiert und uns final den
                          Zuschlag mit dieser Herangehensweise sichern können.
                          Durch diesen professionellen Einstieg sind wir der
                          festen Überzeugung, in Ihnen einen guten
                          Vertriebspartner gefunden zu haben. Sie sind unser
                          erster Ansprechpartner bei dem Verkauf unseres
                          Bauvorhabens HC 191 mit 64 Wohneinheiten und einem
                          Volumen von ca. 18 Mio. Euro.
                        </p> */}
                      </div>
                      <div className="divider-line"></div>
                      <div className="all-text-content-alignment">
                        <div>
                          <p>{data?.field4}</p>
                          <span>HRE – Hansa Real Estate</span>
                        </div>
                        <div>
                          <p>{data?.field5}</p>
                          <span>{data?.field6}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
