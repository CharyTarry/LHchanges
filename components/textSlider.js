import React from 'react';
import styles from '../styles/textSlider.module.scss';

const textSlider = (props) => {
	const { values } = props;
	console.log(values);

	return (
		<div className={styles.slider}>
			<div className={styles.slideTrack}>
				{values?.map((text, index) => {
					return (
						<div key={index} className={styles.slide}>
							<h4 className="mt-2 text-white text-base md:text-2xl">{text}</h4>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default textSlider;
