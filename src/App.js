import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import logo from './assets/heartbeat.png';
import doctors from './assets/doctors-draw.png';
import doctorMale from './assets/doctor-male.png';
import doctorFemale from './assets/doctor-female.png';

App = () => {
  return (
    <Body>
      <Logo source={logo} alt="logo" />
      <Doctors source={doctors} alt="doctors" />
      <Form>
        <Input placeholder="Search" />
        <Button>
          <Span>Search</Span>
        </Button>
      </Form>
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

const Name = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
`;

const Speaciality = styled.Text`
  color: #00a9b1;
  font-size: 20px;
  line-height: 20px;
`;
const Address = styled.Text`
  font-size: 15px;
  color: #777;
  line-height: 15px;
`;

const Details = styled.View``;

const Avatar = styled.View`
  width: 64px;
  height: 64px;
  background: #f3f5f6;
  border-radius: 4px;
  margin-right: 12px;
  padding-top: 12px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const ImageAvatar = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
`;

const DoctorView = styled.View`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

const H1 = styled.Text`
  margin: 12px;
  margin-bottom: 0px;
  font-size: 30px;
  color: #aaa;
`;

const Button = styled.TouchableOpacity`
  background: #00a9b1;
  padding: 12px;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 12px;
  border-radius: 30px;
  align-items: center;
`;

const Span = styled.Text`
  color: white;
  font-size: 18px;
`;

const Form = styled.View`
  padding: 12px;
`;

const Input = styled.TextInput`
  background: #f3f5f6;
  width: 100%;
  border-radius: 30px;
  padding-left: 24px;
  font-size: 18px;
  flex: 1;
`;

const Doctors = styled.Image`
  height: 200px;
  width: 100%;
  margin: 12px;
  resize-mode: contain;
`;
const Logo = styled.Image`
  height: 64px;
  width: 64px;
  margin: 12px;
  margin-bottom: 0px;
`;

const Body = styled.ScrollView`
  flex: 1;
`;

export default App;
