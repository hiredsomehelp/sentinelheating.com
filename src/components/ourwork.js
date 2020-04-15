import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import '@brainhubeu/react-carousel/lib/style.css';
import logo from '../images/logo.png';

function OurWork(props) {
  const query = graphql`
    query MyQuery {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 1000, fit: CONTAIN) {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
            fixed(quality: 85, width: 900, fit: CONTAIN) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  return (
    <div className="lg:text-center" id={props.id}>
      <p className="text-base mb-2 leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
        Our Work
      </p>
      <Carousel infinite centered dots keepDirectionWhenDragging>
        {data.allImageSharp.edges.map((edge, idx) => (
          <Img key={idx} fixed={edge.node.fixed} />
        ))}
      </Carousel>
    </div>
  );
}

export default OurWork;
