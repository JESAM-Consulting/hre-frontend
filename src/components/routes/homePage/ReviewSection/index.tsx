import React, { useState } from "react";
import "./ReviewSection.scss";
import Slider from "react-slick";
import StarIcon from "../../../../assets/icons/star.svg";
import SliderArrow from "../../../../assets/icons/new-slider-animation.svg";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="right-new-slider-section-alignment" onClick={onClick}>
      <img src={SliderArrow} alt="SliderArrow" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="left-new-slider-section-alignment" onClick={onClick}>
      <img src={SliderArrow} alt="SliderArrow" />
    </div>
  );
}

export default function ReviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (oldIndex:number, newIndex:number) => setCurrentSlide(newIndex),
    customPaging: function(i:number) {
      
    const isActive = i === (currentSlide);
    const className = `slick-dot${isActive ? ' active' : ''}`;
    
      return (
          <div className={className}></div>
      );
  },
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
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 240,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="review-section-all-content-alignment">
        <div className="container">
          <div className="review-all-text">
            <p>reviews</p>
          </div>
          <Slider {...settings}>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">S</div>
                <div>
                  <p>Swetlana Stranz</p>
                  <span>1 Rezension</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor 4 Wochen</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Vom ersten Kontakt bis zum Abschluss des Kaufvertrages bestens
                  aufgehoben. Sehr kompetente und unkomplizierte Betreuung.
                  Immer erreichbar und zur Seite. Sowohl der Kontakt mit Herrn
                  Czehowsky als auch mit Herrn Gröne ist direkt sehr offen und
                  ungezwungen. Man fühlt sich verstanden und sicher. Alles auf
                  Augenhöhe. Kurzgefasst „Ein Träumchen"! Vielen Dank!!!
                </p>
              </div>
            </div>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">A</div>
                <div>
                  <p>André Käting</p>
                  <span>8 Rezensionen</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor 3 Wochen</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Herr Gröne und Herr Czehowsky kümmerten sich zügig und
                  hochprofessionell um mein Anliegen. Die beiden Herren sind
                  sehr kompetent auf Ihrem Gebiet, antworten zuverlässig und
                  wahren dabei Freundlichkeit und Anstand!
                </p>
              </div>
            </div>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">T</div>
                <div>
                  <p>Tanja Mayer</p>
                  <span>4 Rezensionen</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor 2 Wochen</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Besten Dank für die hervorragende und wirklich sehr schnelle
                  Abwicklung beim Anmieten meiner Wohnung. Fachliche Kompetenz,
                  gute Beratung, Rund-Um-Service und absolute Freundlichkeit
                  sind nur einige der positiven Aspekte, welche ich hier
                  erwähnen möchte. Es ist mir auch ein Anliegen, Ihnen von
                  ganzem Herzen für die ausgezeichnete, liebevolle und auf meine
                  Umstände rücksichtnehmende Beratung und Vertragsabwicklung zu
                  danken. Vielen lieben Dank!
                </p>
              </div>
            </div>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">W</div>
                <div>
                  <p>Wolfgang</p>
                  <span>1 Rezensionen</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor einem Monat</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Bei HRE hatte ich vom ersten Kontakt bis zur Beurkundung das
                  Gefühl, vertrauensvoll in besten Händen zu sein! Was Herrn
                  Gröne auszeichnet, ist eine seltene Mischung aus Kompetenz,
                  Zuverlässigkeit, Erreichbarkeit, Reaktionsschnelligkeit und
                  höflicher, humorvoller Freundlichkeit, ohne dabei - wie so
                  viele alle Klischees bedienenden Makler - schmierig oder
                  aufdringlich zu erscheinen. Seine zuvorkommende Aufmerksamkeit
                  geht weit über das zu erwartende Maß hinaus.
                </p>
                <p>Non plus ultra - herzlichen Dank!</p>
              </div>
            </div>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">L</div>
                <div>
                  <p>Larissa Schumann</p>
                  <span>1 Rezensionen</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor einem Monat</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Sehr kompetente und zuverlässig Begleitung beim Hauskauf wie
                  beim Hausverkauf! Top Erreichbarkeit! Vielen Dank für die
                  Unterstützung!
                </p>
              </div>
            </div>
            <div className="review-main-box-design">
              <div className="review-profile">
                <div className="profile-image">L</div>
                <div>
                  <p>Local Guide</p>
                  <span>57 Rezensionen</span>
                </div>
              </div>
              <div className="rating-text-star-alignment">
                <div className="rating">
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                  <img src={StarIcon} alt="StarIcon" />
                </div>
                <div className="text">
                  <span>vor 2 Monaten</span>
                </div>
              </div>
              <div className="text-style">
                <p>
                  Herr Gröne von der HRE hat meine Immobilie für mich verkauft -
                  ich bin sehr zufrieden und beeindruckt von der
                  Professionalität. Herr Gröne war immer zu erreichen,
                  Rückfragen wurden zügig und vor allem sachkundig (!)
                  beantwortet und die Sache schnell abgewickelt. Entscheidener
                  Punkt war für mich, dass die Mitarbeiter hier über Fachwissen
                  verfügen und gelernte Leute sind, keine Schnacker. Vielen Dank
                  und bis bald!
                </p>
              </div>
            </div>
           
          </Slider>
        </div>
      </div>
    </div>
  );
}
