import React from "react";
import { Carousel as Slider } from "react-bootstrap";

const Carousel = () => {
  return (
    <Slider>
      <Slider.Item>
        <Slider.Caption>
          <h3 style={{ color: "black" }}>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <Slider.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Slider.Caption>
      </Slider.Item>
      <Slider.Item>
        <Slider.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Slider.Caption>
      </Slider.Item>
    </Slider>
  );
};

export default Carousel;
