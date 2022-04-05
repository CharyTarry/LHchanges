import React from 'react';
import Image from 'next/image';
import styles from '../styles/slider.module.scss';

const logoSlider = () => {
	return (
		<div className={styles.slider}>
			<div className={styles.slideTrack}>
				<div className={styles.slide}>
					<Image
						src="https://www.scorepromotions.com/assets/score/img/clients/Air-Canada-01.jpg"
						alt="slider-img"
						height={100}
						width={100}
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
				<div className={styles.slide}>
					<Image
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
						height={100}
						width={250}
						alt="slider-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default logoSlider;
