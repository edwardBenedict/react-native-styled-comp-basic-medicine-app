import React from 'react';
import doctorMale from './assets/doctor-male.png';
import doctorFemale from './assets/doctor-female.png';
import {
  Name,
  Speaciality,
  Address,
  Details,
  Avatar,
  ImageAvatar,
  DoctorView,
} from './style';

const Doctor = ({gender, name, speaciality, address}) => {
  return (
    <DoctorView>
      <Avatar>
        <ImageAvatar source={gender == 'female' ? doctorFemale : doctorMale} />
      </Avatar>
      <Details>
        <Name>{name}</Name>
        <Speaciality>{speaciality}</Speaciality>
        <Address>{address}</Address>
      </Details>
    </DoctorView>
  );
};

export default Doctor;
