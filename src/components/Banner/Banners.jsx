import { ButtonBanner } from "../Button/Buttons";

const Banner = ({ color, img, text, children }) => (
	<div
		className={`${color} flex justify-between rounded-3xl font-Red_Hat font-medium text-white`}
	>
		<div className='px-14 pt-10 pb-8 text-white-50 w-2/3 flex flex-col justify-between'>
			<h1 className='text-3xl leading-tight font-normal'>
				{text}
			</h1>
			<div className='py-5'>{children}</div>
		</div>
		<div className='w-1/3 h-100'>
			<img className='object-contain h-full' src={img} alt='Banner' />
		</div>
	</div>
);

const BannerTexts = [
	"Hola Andrés. Tienes ideas sobre un nuevo libro?",
	"Andrés nos gusta tu contenido y nos gustaría darte los siguientes tips"
];

const BannerGray = ({ img }) => (
	<Banner color='bg-gray_black' img={img} text={BannerTexts[1]}>
		<div className='flex flex-col font-Red_Hat text-white'>
			<ul className='text-lg font-light'>
				<li>1. Lee los comentarios de tus clientes</li>
				<li>2. Elige el género que quieres para tu trabajo</li>
				<li>3. Busca siempre a un editor de confianza</li>
			</ul>
		</div>
	</Banner>
);

const BannerPeach = ({ img }) => (
	<Banner color='bg-peach' img={img} text={BannerTexts[0]}>
		<div className='flex flex-col gap-3'>
			<div className='text-lg'>
				<p>Vuelve tus libros tendencia mundial!</p>
				<p>¿Quieres empezar a escribir una vez más?</p>
			</div>
			<ButtonBanner text={"Crear Borrador"} />
		</div>
	</Banner>
);

export { Banner, BannerGray, BannerPeach };
