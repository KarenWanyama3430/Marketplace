import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "./button";

export function Articles(props) {
  //Note: destructure properties
  const { id, company, slogan, image_1, image_2, image_3, image_4, image_5 } = props.article;
  const images = [image_1, image_2, image_3, image_4, image_5];
  const [image, setImage] = useState(image_1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id={`article${id}`} className="h-full">
      <div
        className="text-darkblue hidden md:block bg-gray-100 shadow  border border-black/25 shadow-gray-950/50 mx-auto 
                rounded w-[99%]  h-full mb-2 pt-5 pb-6"
      >
        <div className="bg-gray-100  mx-auto grid grid-cols-12">
          <div className="col-span-4 mx-5">
            <img
              className=" rounded-sm h-[4rem]"
              // concatenate url
              src={`https://global.mcarfix.com/AdvertImages/${image}`}
            />
          </div>
          <div className="col-span-8">
            <p className=" text-left font-bold ">{company.toUpperCase()}</p>
            <p className="">{slogan}</p>
            <Button className="bg-darkorange h-[2.4rem]  w-[46%] text-white my-3">
              View
            </Button>
          </div>
        </div>
      </div>
      <div
        className="text-darkblue md:hidden bg-gray-100 shadow  border border-black/25 shadow-gray-950/50 mx-auto 
            rounded w-[99%]  h-fit mb-2 pt-5 pb-6"
      >
        <div className="h[50%] mx-2">
          <img
            className=" rounded-sm h-50 w-full"
            // concatenate url
            src={`https://global.mcarfix.com/AdvertImages/${image}`}
          />
        </div>
        <div className="bg-gray-100  mx-auto ">
          <div className="mx-2">
            <p className=" text-left font-bold ">{company.toUpperCase()}</p>
            <p className="">{slogan}</p>
            <Button className="bg-darkorange h-7 w-full text-white my-3">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

//give prop defintions for autocomlpete support
Articles.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    company: PropTypes.string,
    website: PropTypes.string,
    phone_no: PropTypes.string,
    video: PropTypes.string,
    image_1: PropTypes.string,
    image_2: PropTypes.string,
    image_3: PropTypes.string,
    image_4: PropTypes.string,
    image_5: PropTypes.string,
    description: PropTypes.string,
    uploadcountry: PropTypes.string,
    availability_countries: PropTypes.arrayOf(PropTypes.string),
    amount: PropTypes.number,
    tokens: PropTypes.number,
    clicks: PropTypes.number,
    active: PropTypes.number,
    useractive: PropTypes.number,
    slogan: PropTypes.string,
    type: PropTypes.string,
    expiry_date: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    advert_category_id: PropTypes.number,
  }),
};
