import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "",
        position : "",
        disc : `Machine Learning with Python 🐍`,
        link:"https://www.coursera.org/account/accomplishments/records/KMYUR6N584LX"
    },
    {
        name : "",
        position : "",
        
        disc : `Business Analysis and Process Management 📚`,
        link:"https://www.coursera.org/account/accomplishments/records/8ULPZE7RMDYG"
    },
    {
        name : "",
        position : "",
        
        disc : `Solving Problems with Creative and Critical Thinking 📚 `,
        link:"https://www.coursera.org/account/accomplishments/records/4UYFHFLSY5V5"
    },
    {
        name : "",
        position : "",
        
        disc : `Javascript and React.JS from A to Z by AWS Community 💻`,
        link:"https://cert.devtown.in/verify/2iAGwM"
    },
    {
        name : "",
        position : "",
        
        disc : `Javascript And PHP Programming Complete Course 💻`,
        link:"https://www.udemy.com/certificate/UC-ae50597b-3ea3-4964-ae0f-d3be76c7e66d/"
    },
    {
        name : "",
        position : "",
        
        disc : `Python from A to Z Community builders 🐍`,
        link:"https://cert.devtown.in/verify/1z68Bh"
    },
    {
        name : "",
        position : "",
        
        disc : `🌟 Organized SYNOTEC 24 ICT Day at Wallasmulla National School, igniting passion and creativity in students through engaging activities like quizathons and ideathons. Inspired by their dedication, we're shaping a brighter tomorrow, one innovative solution at a time! 🚀`,
        link:"https://www.linkedin.com/feed/update/urn:li:activity:7181276787740475392/"
    },

    
]
var settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">Certifications and Volunteer</span>
            <h1>Certifications</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`