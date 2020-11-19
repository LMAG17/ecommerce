import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardHeader } from "reactstrap";
import { getRequest } from "../controlllers/services/ServiceInteractor";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ArticlesCarousel(props) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    console.log(props.url);
    getRequest(props.url).then((res) => {
      res.articles.length > 0 ? setArticles(res.articles) : setArticles(null);
    
    });
  }, [props.url]);

  return (

    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {articles.map((article) => {
        return (
          <Card
            key={article.id}
            style={{ height: "100%", width: "80%" }}
            className="text-center mx-auto"
          >
            <CardHeader>
              <h6 id="team">{article.info.name}</h6>
            </CardHeader>
            <CardBody>
                <img src={article.info.image} alt="" style={{height:"100px",width:"100px"}}/>
            </CardBody>
          </Card>
        );
      })}
    </Carousel>
  );
}
