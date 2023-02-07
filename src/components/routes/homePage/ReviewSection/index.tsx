import React from 'react'
import './ReviewSection.scss';
import Slider from "react-slick";
import StarIcon from '../../../../assets/icons/star.svg';
import SliderArrow from '../../../../assets/icons/new-slider-animation.svg';

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className='right-new-slider-section-alignment'
        onClick={onClick}
      >
        <img src={SliderArrow} alt="SliderArrow"/>

    </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className='left-new-slider-section-alignment'
      
        onClick={onClick}
      >
        <img src={SliderArrow} alt="SliderArrow"/>
    </div>
    );
  }
  

export default function ReviewSection() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 240,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };
    return (
        <div>
            <div className="review-section-all-content-alignment">
                <div className='container'>
                    <div className='review-all-text'>
                        <p>reviews</p>
                    </div>
                    <Slider {...settings}>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7].map(() => {
                                return (
                                    <div className="review-main-box-design">
                                        <div className='review-profile'>
                                            <div className='profile-image'>S</div>
                                            <div>
                                                <p>Swetlana Stranz</p>
                                                <span>1 Rezension</span>
                                            </div>
                                        </div>
                                        <div className='rating-text-star-alignment'>
                                            <div className='rating'>
                                                <img src={StarIcon} alt="StarIcon" />
                                                <img src={StarIcon} alt="StarIcon" />
                                                <img src={StarIcon} alt="StarIcon" />
                                                <img src={StarIcon} alt="StarIcon" />
                                                <img src={StarIcon} alt="StarIcon" />
                                            </div>
                                            <div className='text'>
                                                <span>vor 4 Wochen</span>
                                            </div>
                                        </div>
                                        <div className='text-style'>
                                            <p>
                                                Vom ersten Kontakt bis zum Abschluss des Kaufvertrages bestens aufgehoben. Sehr kompetente und unkomplizierte Betreuung. Immer erreichbar und zur Seite. Sowohl der Kontakt mit Herrn Czehowsky als auch mit Herrn Gröne ist direkt sehr offen und ungezwungen.
                                                Man fühlt sich verstanden und sicher. Alles auf Augenhöhe. Kurzgefasst „Ein Träumchen"! Vielen Dank!!!
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}
