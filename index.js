import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import DangNhap from './src/components/DangNhap/dangNhap.js';
import Header from './src/components/ManHinh/Untils/Header.js';
import HeaderBack from './src/components/ManHinh/Untils/HeaderBack.js';
import TrangChu from './src/components/ManHinh/Pages/TiepNhan/TrangChu/TrangChu.js';
import ModalDonViVaLinhVuc from './src/components/ManHinh/Untils/ModalDonViVaLinhVuc.js';

AppRegistry.registerComponent(appName, () => TrangChu);
