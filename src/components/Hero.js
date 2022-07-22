/** @jsxImportSource @emotion/react */
import { Carousel, Image } from "antd";
import { css } from '@emotion/react'

const Hero = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {/* <div
        css={css`
          background-color: rgba(0,0,0,.4);
          position: absolute;
          z-index: 20;
          width: 100vw;
          height: 100vh;
        `}
      /> */}
      <Carousel 
        effect="fade"
      >
        <div>
          <div
            css={css`
              background-color: rgba(0,0,0,.4);
              position: absolute;
              z-index: 10;
              width: 100%;
              height: 100vh;
            `}
          />
          <Image
            width="100%"
            height="100vh"
            preview={false}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            style={{
              objectFit: 'cover',
              position: 'relative'
            }}
          />
        </div>
        <div>
          <div
            css={css`
              background-color: rgba(0,0,0,.4);
              position: absolute;
              z-index: 10;
              width: 100%;
              height: 100vh;
            `}
          />
          <Image
            width="100%"
            height="100vh"
            preview={false}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            style={{
              objectFit: 'cover',
              position: 'relative'
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
