import { useEffect } from "react";

// destinations images
import colombia from "../../assets/colombia.jpg";
import tokio from "../../assets/tokio.jpg";
import turkey from "../../assets/turkey.jpg";
import paris from "../../assets/paris.jpg";

// travelers images
import traveler1 from "../../assets/traveler_1.jpg";
import traveler2 from "../../assets/traveler_2.jpg";
import traveler3 from "../../assets/traveler_3.jpg";
import traveler4 from "../../assets/traveler_4.jpg";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const travelers = [
  {
    id: 1,
    destinationImage: colombia,
    travelerImage: traveler1,
    travelerName: "Damian",
    socialLink: "@_damian",
  },
  {
    id: 2,
    destinationImage: tokio,
    travelerImage: traveler2,
    travelerName: "Sophie",
    socialLink: "@_sophie",
  },
  {
    id: 3,
    destinationImage: turkey,
    travelerImage: traveler4,
    travelerName: "Alex",
    socialLink: "@_alex",
  },
  {
    id: 4,
    destinationImage: paris,
    travelerImage: traveler3,
    travelerName: "Thania",
    socialLink: "@_thania",
  },
];

const Travelers = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos="fade-down" data-aos-duration="2500">
          Top travelers of this month!
        </h2>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="travelersContainer grid"
        >
          {/* single passanger card */}
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
            }) => {
              return (
                <div className="singleTraveler" key={id}>
                  <img
                    src={destinationImage}
                    alt="photo destination"
                    className="destinationImage"
                  />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img
                        src={travelerImage}
                        alt="photo traveler"
                        className="travelerImage"
                      />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
