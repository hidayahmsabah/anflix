import React from "react";
import { Wrapper, LogoML, LogoAL } from "./Footer.styles";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        Powered by
        <a href="https://myanimelist.net/" target="_blank" rel="noreferrer">
          <LogoML />
        </a>
        and
        <a href="https://anilist.co/" target="_blank" rel="noreferrer">
          <LogoAL />
        </a>
      </div>
      {/* <div>
                Design inspiration from
                <a href="https://www.netflix.com/" target="_blank" rel="noreferrer">
                    <LogoNF />
                </a>
            </div> */}
    </Wrapper>
  );
};

export default Footer;
