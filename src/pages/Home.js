import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { findAllFlights } from '../redux/actions';

import Logo from '../components/Logo';

import '../assets/styles/pages/Home.scss';

let Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllFlights());
  }, [dispatch]);

  return (
    <div>
      <Logo />
      <div className="container">
        <h1 className="header">
          Il modo più semplice per gestire Spedizioni, Tracking e Resi dei tuoi
          ordini
        </h1>
        <p className="text">
          ShippyPro è la piattaforma di spedizioni completa per l'e-commerce:
          configura il tuo account e spedisci i tuoi ordini in 30 secondi.
        </p>
        <a href="/search" className="home_action-btn">
          Cerca un volo
        </a>
      </div>
    </div>
  );
};

Home = connect()(Home);

export default Home;
