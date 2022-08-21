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
						src="images/huy_window4k.jpg"
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
						src="images/huy_praha.PNG"
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
