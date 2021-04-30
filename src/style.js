import styled from 'styled-components';

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
`;

export const Speaciality = styled.Text`
  color: #00a9b1;
  font-size: 20px;
  line-height: 20px;
`;
export const Address = styled.Text`
  font-size: 15px;
  color: #777;
  line-height: 15px;
`;

export const Details = styled.View``;

export const Avatar = styled.View`
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

export const ImageAvatar = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
`;

export const DoctorView = styled.View`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e1;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

export const H1 = styled.Text`
  margin: 12px;
  margin-bottom: 0px;
  font-size: 30px;
  color: #aaa;
`;

export const Button = styled.TouchableOpacity`
  background: #00a9b1;
  padding: 12px;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 12px;
  border-radius: 30px;
  align-items: center;
`;

export const Span = styled.Text`
  color: white;
  font-size: 18px;
`;

export const Form = styled.View`
  padding: 12px;
`;

export const Input = styled.TextInput`
  background: #f3f5f6;
  width: 100%;
  border-radius: 30px;
  padding-left: 24px;
  font-size: 18px;
  flex: 1;
`;

export const Doctors = styled.Image`
  height: 200px;
  width: 100%;
  margin: 12px;
  resize-mode: contain;
`;
export const Logo = styled.Image`
  height: 64px;
  width: 64px;
  margin: 12px;
  margin-bottom: 0px;
`;

export const Body = styled.ScrollView`
  flex: 1;
`;
