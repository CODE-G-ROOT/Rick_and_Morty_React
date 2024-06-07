import React from "react";

import NavBar from "../../components/Nav_bar/Nav_bar";
import Side_bar from "../../components/Sidebar/Sidebar";
import { BannerGray, BannerPeach } from "../../components/Banner/Banners";
import Block_Card from "../../components/Card/Bloque_Card";
import { RecentBlock } from "../../components/Recient/Recent";
import TheLatest from "../../components/TheLatest";
import AuthorsBlock from "../../components/Author/Author";

const location = "https://rickandmortyapi.com/api/location/1";
const api = "https://rickandmortyapi.com/api/character";
const personaje = "https://rickandmortyapi.com/api/character/1";
const image = "https://get.wallhere.com/photo/illustration-planet-space-Earth-cartoon-atmosphere-Rick-and-Morty-universe-astronomy-Adult-Swim-screenshot-atmosphere-of-earth-outer-space-astronomical-object-105144.png";
import ImageBannerPeach from "../../../public/open_book.svg";
import ImageBannerGray  from "../../../public/reading_book.svg";


const InfoContainer = () => (
	<div className='w-full h-3/5 block sm:h-full sm:mb-80 lg:mb-5 md:h-full lg:4/5 xl:h-4/5 lg:flex xl:flex 2xl:flex mt:8 md:mt-0 gap-0 sm:gap-5'>
		<div className='h-full sm:h-screen md:h-full w-full sm:mt-20 md:m-0 px-5 xl:px-2 flex flex-col'>
			<div className='w-full h-full flex justify-center sm:mb-2.5 lg:mb-0 '>
				<Block_Card />
			</div>
			<AuthorsBlock api={api}/>
		</div>
		<RecentBlock api={api} />
	</div>
);

const Body = () => (
	<div className='w-full h-full flex overflow-y-scroll overflow-x-hidden sm:flex-col lg:flex-row sm:gap-96 lg:gap-0'>
		<Container />
		<SidePanelCards />
	</div>
);

const Container = () => (
	<div className='w-full h-full flex flex-col sm:mb-[44rem] lg:mb-0'>
		<div className='px-6 flex flex-col h-full w-full justify-between gap-10 sm:gap-20 lg:gap-5'>
			<div className='relative h-2/5 md:h-full w-100'>
				<BannerPeach img={ImageBannerPeach} />
			</div>
			<InfoContainer />
			<div className='h-full w-full pb-4 font-Red_Hat'>
				<BannerGray img={ImageBannerGray} />
			</div>
		</div>
	</div>
);

const Content = () => (
	<div className='w-5/6 md:w-full h-full bg-white rounded-l-3xl sm:rounded-none z-10'>
		<div className='w-full h-full z-50 bg-white rounded-l-3xl flex flex-col items-end'>
			<NavBar url={personaje} />
			<Body />
		</div>
	</div>
);

const SidePanelCards = () => (
	<div className='h-fit w-1/4 md:w-full block xl:w-1/3'>
		<TheLatest location={location} personaje={personaje} image={image} />
	</div>
);

const Home = () => (
	<div className='bg-lima_green min-w-screen h-screen flex'>
		<div className='sm:w-full sm:absolute xl:sticky xl:w-2/12 h-full'>
			<Side_bar />
		</div>
		<Content />
	</div>
);

export default Home;
