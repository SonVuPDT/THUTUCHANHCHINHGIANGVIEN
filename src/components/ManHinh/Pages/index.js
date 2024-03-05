import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DangNhap from '../../DangNhap/dangNhap';
import TrangChu from './TiepNhan/TrangChu/TrangChu';
import ChiTetHoSo from './TiepNhan/ChiTietHoSo/ChiTietHoSo';
import TheoDoiDeNghi from './TiepNhan/TheoDoiDeNghi/TheoDoiDeNghi';
import TrangCaNhan from '../Untils/TrangCaNhan';
import TrangThongBao from '../Untils/TrangThongBao';
import chitietthutuc from './TiepNhan/ChiTietThuTuc/ChiTietThuTuc';

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TrangChu"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="TrangChu" component={TrangChu} />
        <Stack.Screen name="ChiTetHoSo" component={ChiTetHoSo} />
        <Stack.Screen name="TheoDoiDeNghi" component={TheoDoiDeNghi} />
        <Stack.Screen name="TrangCaNhan" component={TrangCaNhan} />
        <Stack.Screen name="TrangThongBao" component={TrangThongBao} />
        <Stack.Screen name="ChiTietThuTuc" component={chitietthutuc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
