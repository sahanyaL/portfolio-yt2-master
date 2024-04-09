import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import pic1 from "./img1.png";
import pic2 from "./img2.png";
import pic3 from "./img3.png";

let data = [
    {
        img : pic1,
        disc : "HearLink /br HearLink is a cutting-edge communication platform designed to facilitate seamless interaction for individuals with hearing disabilities. It offers real-time sign language translation and speech recognition, revolutionizing digital communication. HearLink aims to enhance accessibility and inclusivity, empowering users with hearing impairments to engage effortlessly in meaningful conversations."
    },
    {
        img : pic2,
        disc : "ToursSL /br ToursSL is your gateway to unforgettable travel experiences in Sri Lanka. Discover curated tours showcasing the country's beauty and charm, from cultural expeditions to wildlife adventures and beach escapes. With seamless booking and expert guides, we ensure every journey is extraordinary. Explore Sri Lanka with ToursSL and create lasting memories"
    },
    {
        img : pic3,
        disc : "Shopping Manager /br The Shopping Manager System is a Java-based solution designed to streamline inventory management for businesses. This system offers essential functionalities such as adding, deleting, selecting, and displaying products. Built with modularity and scalability in mind, it simplifies inventory tasks, optimizing workflow efficiency for managers."
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
