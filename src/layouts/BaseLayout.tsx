import React from 'react';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const data = [
  {
    name: 'Clocks',
    description: '12 product',
    img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
    link: '',
  },
  {
    name: 'Clocks',
    description: '12 product',
    img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
    link: '',
  },
  {
    name: 'Clocks',
    description: '12 product',
    img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
    link: '',
  },
  {
    name: 'Clocks',
    description: '12 product',
    img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
    link: '',
  },
  {
    name: 'Clocks',
    description: '12 product',
    img: 'https://woodmart.xtemos.com/wp-content/uploads/2017/01/clock.svg',
    link: '',
  },
];
const BaseLayout = ({ children }: any) => {
  return (
    <>
      <TopHeader />
      <Header />
      <BottomBar />
      <Breadcrumb title="Lighting" data={data} />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
