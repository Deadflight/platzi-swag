import { StyledJumbo } from "../styles/components"
import React from 'react';
import Image from "./image";

const Jumbo = ({description}) => {
  return (
    <StyledJumbo>
      <div>
        <h2>
          Consigue el mejor swag exclusivo de platzi
        </h2>
        <small>{description}</small>
      </div>
      <Image name='icon' alt='icon'/>
    </StyledJumbo>
  )
}

export default Jumbo