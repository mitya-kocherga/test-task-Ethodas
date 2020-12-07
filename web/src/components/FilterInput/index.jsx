import { useState, useEffect } from 'react';
import { TEST_IDS } from '../../constants/test-ids';
import { testIds } from '../../utils/test-ids-prop';
import styles from './FilterInput.module.css';

const FilterInput = ({
	onChange = () => {},
	defaultValue = '',
	placeholder = 'Type to search...',
}) => {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		onChange(value);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const handleChange = (e) => setValue(e.target.value);

	return (
		<div className={styles.container} {...testIds(TEST_IDS.filterInput)}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='20'
				height='20'
				viewBox='0 0 172 172'
				style={{ fill: '#000000', position: 'absolute', margin: '6px' }}
			>
				<g
					fill='none'
					fillRule='nonzero'
					stroke='none'
					strokeWidth='2'
					strokeLinecap='butt'
					strokeLinejoin='miter'
					strokeMiterlimit='10'
					strokeDasharray=''
					strokeDashoffset='0'
					fontFamily='none'
					fontWeight='none'
					fontSize='none'
					textAnchor='none'
					style={{ mixBlendMode: 'normal' }}
				>
					<path d='M0,172v-172h172v172z' fill='none'></path>
					<g fill='#95a5a6'>
						<path d='M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z'></path>
					</g>
				</g>
			</svg>{' '}
			<input
				className={styles.input}
				onChange={handleChange}
				placeholder={placeholder}
				value={value}
				type='text'
			/>
		</div>
	);
};

export default FilterInput;
