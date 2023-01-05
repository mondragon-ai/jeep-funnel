import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroWrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 0;
`;

const HeroParagraph = styled(motion.p)`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  margin: 1rem 0;
`;

const HeroButton = styled(motion.button)`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <HeroHeading
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
    >
      Welcome to our sales funnel
    </HeroHeading>
    <HeroParagraph
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id nulla
      est.
    </HeroParagraph>
    <HeroButton
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
    >
      Sign up now
    </HeroButton>
  </HeroWrapper>
);

export default Hero;
