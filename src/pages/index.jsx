import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Particles from 'react-particles-js';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
	${tw`flex flex-wrap justify-between mt-8`};
	display: grid;
	grid-gap: 4rem;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 1200px) {
		grid-gap: 3rem;
	}
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
`;

const AboutHero = styled.div`
	${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
	${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
	${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
	${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
	${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
	${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
	<>
		<Layout />
		<Particles
			style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#23262B' }}
			params={{
				particles: {
					number: {
						value: typeof window !== 'undefined' ? Math.round(window.innerWidth * .2) : 100,
						density: {
							enable: true,
							value_area: 800
						}
					},
					color: {
						value: '#6c63ff'
					},
					// shape: {
					// 	type: 'circle',
					// 	stroke: {
					// 		width: 0,
					// 		color: '#000000'
					// 	},
					// 	polygon: {
					// 		nb_sides: 5
					// 	},
					// 	image: {
					// 		src: 'img/github.svg',
					// 		width: 100,
					// 		height: 100
					// 	}
					// },
					opacity: {
						value: 0.5,
						random: false,
						anim: {
							enable: false,
							speed: 1,
							opacity_min: 0.1,
							sync: false
						}
					},
					size: {
						value: 3,
						random: true,
						anim: {
							enable: false,
							speed: 40,
							size_min: 0.1,
							sync: false
						}
					},
					line_linked: {
						enable: true,
						distance: 150,
						color: '#6c63ff',
						opacity: 0.4,
						width: 1
					},
					move: {
						enable: true,
						speed: 6,
						direction: 'none',
						random: true,
						straight: false,
						out_mode: 'out',
						bounce: true,
						attract: {
							enable: true,
							rotateX: 600,
							rotateY: 1200
						}
					}
				},
				retina_detect: true
			}}
		/>
		<Parallax pages={5}>
			<Hero offset={0}>
				<BigTitle>
					Hello, <br /> we are Magnetar.
				</BigTitle>
				<Subtitle>We develop software that solves complex problems.</Subtitle>
				<div class="wrap">  
					<div class="magnetar"></div>
					<div class="pulse pulse-1"></div>
					<div class="pulse pulse-2"></div>
					<div class="pulse pulse-3"></div>
					<div class="pulse pulse-4"></div>
					<div class="pulse pulse-5"></div>
					<div class="pulse pulse-6"></div>
					<div class="pulse pulse-7"></div>
					<div class="pulse pulse-8"></div>
					<div class="pulse pulse-9"></div>
					<div class="pulse pulse-10"></div>
				</div>
			</Hero>
			<Projects offset={1}>
				<Title>Projects</Title>
				<ProjectsWrapper>
					<ProjectCard
						title="Inferense"
						link="https://www.inferen.se"
						bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
					>
						Data analysis and automation SaaS app.
					</ProjectCard>
				</ProjectsWrapper>
			</Projects>
			<About offset={3} style={{ height: 800 }}>
				<Title>About</Title>
				<AboutHero>
					<Avatar src={avatar} alt="Mattias Festin" />
					<AboutSub>Mattias Festin - Founder and lead developer of Magnetar.</AboutSub>
				</AboutHero>
				<AboutDesc>
					Background in mathematics, worked as software engeneer for 10 years. Loves solving problems, espesialy the
					complex kind. A strong beliver in the scientific process and data driven disission making.
				</AboutDesc>
			</About>
			<Contact offset={4}>
				<Inner>
					<Title>Get in touch</Title>
					<ContactText>
						Send an <a href="mailto:contact@magnetar.se">email</a>.
						{/* <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
						<a href="https://www.instagram.com/lekoarts.de/">Instagram</a> */}
					</ContactText>
				</Inner>
				<Footer>
					&copy; 2019 by <a href="https://www.lekoarts.de">LekoArts</a>.<br />{' '}
					<a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Gatsby Starter Portfolio Cara</a>. <br />
					<a href="https://www.magnetar.se">Customized by Magnetar</a>.
				</Footer>
			</Contact>
		</Parallax>
	</>
);

export default Index;
