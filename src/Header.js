import React from 'react';
import logo from './assets/heartbeat.png';
import doctors from './assets/doctors-draw.png';
import {H1, Doctors, Logo} from './style';

export default function Header() {
  return (
    <>
      <Logo source={logo} alt="logo" />
      <Doctors source={doctors} alt="doctors" />
    </>
  );
}
