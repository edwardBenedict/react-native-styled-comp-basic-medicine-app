import React from 'react';

import {H1, Body} from './style';
import Doctor from './Doctor';
import Header from './Header';
import FormComp from './Form';

App = () => {
  return (
    <Body>
      <Header />
      <FormComp />
      <H1>Recent</H1>
      <Doctor
        gender={'female'}
        name={'Jane'}
        speaciality={'Surgery'}
        address={'34.St NY.'}
      />
      <Doctor
        gender={'male'}
        name={'John'}
        speaciality={'Cardiology'}
        address={'45.St WA.'}
      />
    </Body>
  );
};

export default App;
