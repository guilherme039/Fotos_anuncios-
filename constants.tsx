import React from 'react';
import type { AdFormat } from './types';

const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7H4Z"/></svg>
);
const BusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.92 6c-.4 -2.2-2.31-3.93-4.65-3.93H9.73C7.39 2.07 5.48 3.8 5.08 6H3v9h1v2a2 2 0 0 0 2 2h.18c.45 1.12 1.5 2 2.82 2s2.37-.88 2.82-2H13v-2h6v-5l-1.42-5H18.92ZM6 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5S6.83 13.5 6 13.5Zm12 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5S18.83 13.5 18 13.5ZM17 9H7V6h10v3Z"/></svg>
);
const NewspaperIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM8 17H6v-1h2v1Zm0-2H6v-1h2v1Zm0-2H6v-1h2v1Zm4 4h-2v-1h2v1Zm0-2h-2v-1h2v1Zm0-2h-2v-1h2v1Zm4 4h-2v-1h2v1Zm0-2h-2v-1h2v1Zm0-2h-2v-1h2v1Zm2-5H6V7h12v3Z"/></svg>
);
const MagazineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5v13c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2Zm14 13H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h1l3.5 4.5 2.5-3 3.5 4.51V17c0 .55-.45 1-1 1Z"/></svg>
);
const SubwayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.8 2.8C16 2.09 13.86 2 12 2s-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V17c0 1.66 1.34 3 3 3h1.28c.45 1.12 1.5 2 2.82 2s2.37-.88 2.82-2h3.76c.45 1.12 1.5 2 2.82 2s2.37-.88 2.82-2H20c.8 0 1.5-.3 2-1V8.86c0-2.81-1.53-5.02-4.2-6.06ZM8.5 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm2.5-6H6V9h12v2Z"/></svg>
);
const SmartphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm-5 20c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm3-3H9V5h6v13Z"/></svg>
);
const MallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m12 12-2-3 2-3 2 3-2 3zm7-7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM9.5 17.5 5.75 12l2-3.25L11.5 11l-2 6.5zm3.25-1.5-2-6.5L14.5 8l3.75 4-2.75 5.5z"/></svg>
);
const CoffeeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2ZM18 8h-2V5h2v3Z"/></svg>
);
const CinemaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 4v1h-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1H4V4c0-1.1-.9-2-2-2s-2 .9-2 2v15c0 1.1.9 2 2 2s2-.9 2-2v-1h2v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1h2v1c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2s-2 .9-2 2Zm-4 11H8V9h6v6Zm-8-5H4V9h2v1Zm14 0h-2V9h2v1Z"/></svg>
);
const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm4.47 14.53-2-2c-.2-.2-.51-.2-.71 0l-1.77 1.77c-.31.31-.85.09-.85-.35V14.5c0-.28-.22-.5-.5-.5h-1.5c-1.38 0-2.5-1.12-2.5-2.5v-1c0-.28-.22-.5-.5-.5H5.2c-.41 0-.62-.47-.35-.74l1.77-1.77c.2-.2.2-.51 0-.71l-2-2C4.05 5.56 4.34 5 4.83 5H6c.55 0 1 .45 1 1v1.5c0 .28.22.5.5.5h1c1.38 0 2.5 1.12 2.5 2.5v1.5c0 .28.22.5.5.5h1.5c.41 0 .63.47.35.74l-1.77 1.77c-.2.2-.2.51 0 .71l2 2c.57.57.29 1.53-.47 1.53Z"/></svg>
);


export const AD_FORMATS: AdFormat[] = [
  {
    id: 'billboard',
    title: 'Outdoor Urbano',
    prompt: 'Place the provided product image onto a massive, photorealistic billboard in a bustling, modern city square like Times Square at dusk. The lighting should be dramatic and eye-catching.',
    icon: <BuildingIcon className="w-8 h-8"/>,
  },
  {
    id: 'bus_stop',
    title: 'Anúncio em Ponto de Ônibus',
    prompt: 'Integrate the product image into an advertisement panel on the side of a modern, clean glass and metal bus stop shelter on a sunny day. Include reflections on the glass.',
    icon: <BusIcon className="w-8 h-8"/>,
  },
  {
    id: 'newspaper',
    title: 'Anúncio em Jornal',
    prompt: 'Place the product image within a full-color advertisement in a folded newspaper. The newspaper should be resting on a wooden table next to a cup of coffee.',
    icon: <NewspaperIcon className="w-8 h-8"/>,
  },
  {
    id: 'magazine',
    title: 'Anúncio em Revista',
    prompt: 'Create a mockup of the product image as a glossy, full-page advertisement in a high-fashion or lifestyle magazine. The magazine should be open to the page, showing the ad clearly.',
    icon: <MagazineIcon className="w-8 h-8"/>,
  },
  {
    id: 'subway',
    title: 'Interior do Metrô',
    prompt: 'Place multiple posters featuring the product image inside a bright, modern subway or train car. The posters should be visible above the windows.',
    icon: <SubwayIcon className="w-8 h-8"/>,
  },
  {
    id: 'social_media',
    title: 'Story de Mídia Social',
    prompt: 'Design an ad that looks like a social media story on a smartphone. The product image should be the central focus, with placeholder UI elements like a username and a "View Product" button at the bottom. The phone is held by a person.',
    icon: <SmartphoneIcon className="w-8 h-8"/>,
  },
  {
    id: 'mall_display',
    title: 'Tela Digital em Shopping',
    prompt: 'Feature the product image on a large, vertical, glowing digital advertising screen inside a bright, modern shopping mall with people walking by in the background.',
    icon: <MallIcon className="w-8 h-8"/>,
  },
  {
    id: 'coffee_shop',
    title: 'Mesa de Cafeteria',
    prompt: 'Create a subtle advertisement by placing the product image on a small tabletop display card in a cozy, warm coffee shop setting. The background should be slightly blurred.',
    icon: <CoffeeIcon className="w-8 h-8"/>,
  },
  {
    id: 'cinema',
    title: 'Tela de Cinema',
    prompt: 'Show the product image as an advertisement on a giant cinema screen in a dark theater, just before a movie starts. The screen should be the main source of light.',
    icon: <CinemaIcon className="w-8 h-8"/>,
  },
  {
    id: 'product_launch',
    title: 'Site de Lançamento',
    prompt: 'Create a mockup of a laptop screen showing a popular tech product launch website (like Product Hunt or TechCrunch). The provided product image should be featured as the main "product of the day".',
    icon: <RocketIcon className="w-8 h-8"/>,
  },
];