import firstImg from '../assets/posts/first.png';
import secondImg from '../assets/posts/second.png';
import thirdImg from '../assets/posts/third.png';

import firstImgV from '../assets/ourValues/first.png';
import secondImgV from '../assets/ourValues/second.png';
import thirdImgV from '../assets/ourValues/third.png';
import fourImgV from '../assets/ourValues/four.png';
import fiveImgV from '../assets/ourValues/five.png';
import sixImgV from '../assets/ourValues/six.png';
import sevenImgV from '../assets/ourValues/seven.png';
import nineImgV from '../assets/ourValues/nine.png';
import eightImgV from '../assets/ourValues/eight.png';

export interface IPost {
	title: string
	desc: string
	img: string
	reverse: boolean
}

export interface IValue {
	title: string
	desc: string
	img: string
}

export const posts: IPost[] = [
	{
		title: '5 popular Rust web frameworks—which one is right for you?',
		desc: 'From the simplicity of Poem to the full-featured speed of Actix, there\'s a Rust web framework for most every user and need.',
		img: firstImg, reverse: false,
	},
	{
		title: 'JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?',
		desc: 'Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision.',
		img: secondImg,
		reverse: true,
	},
	{
		title: 'Dive into the world of an iOS Developer – career, salary, and skills',
		desc: 'When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design. ',
		img: thirdImg,
		reverse: false,
	},
]


export const ourValues = [
	{
		title: 'Courageous',
		img: firstImgV,
		desc: 'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.',
	},
	{
		title: 'Cheerfulness',
		img: secondImgV,
		desc: 'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.',
	},
	{
		title: 'Empowerment',
		img: thirdImgV,
		desc: 'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.',
	},
	{
		title: 'Empowerment',
		img: fourImgV,
		desc: 'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.',
	},
	{
		title: 'Courageous',
		img: fiveImgV,
		desc: 'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.',
	},
	{
		title: 'Cheerfulness',
		img: sixImgV,
		desc: 'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.',
	},
	{
		title: 'Empowerment',
		img: sevenImgV,
		desc: 'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.',
	},
	{
		title: 'Courageous',
		img: eightImgV,
		desc: 'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.',
	},
	{
		title: 'Cheerfulness',
		img: nineImgV,
		desc: 'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.',
	},
]
