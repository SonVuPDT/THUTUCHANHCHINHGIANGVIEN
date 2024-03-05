import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

import HeaderBack from '../../../Untils/HeaderBack';
import Footer from '../../../Untils/Footer';

const TheoDoiDeNghi = navigation => {
  const dataDanhSachHoSoDaGui = [
    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },
    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },

    {
      tenThuTuc: 'QUY TRÌNH XIN NGHỈ ỐM HƯỞNG BHXH',
      ngayGui: '17/01/2024',
      tenTrangThai: 'Xử lí hồ sơ',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title="THEO DÕI ĐỀ NGHỊ" onPress={() => {}} />

      <View style={styles.body}>
        <Text style={styles.textTieuDe}>DANH SÁCH HỒ SƠ ĐÃ GỬI</Text>

        <ScrollView>
          {/* Danh sách thủ tục */}
          <View style={styles.danhSachThuTucTieuDe}>
            <View style={styles.viewSTT}>
              <Text style={styles.text}>STT</Text>
            </View>

            <View style={styles.viewTenThuTuc}>
              <Text style={styles.text}>Tên thủ tục</Text>
            </View>

            <View style={styles.viewNgayGui}>
              <Text style={styles.text}>Ngày gửi</Text>
            </View>

            <View style={styles.viewTrangThai}>
              <Text style={styles.text}>Trạng thái</Text>
            </View>
          </View>

          <View style={{alignItems: 'center', width: getWidth}}>
            {dataDanhSachHoSoDaGui.map((item, index) => (
              <View style={styles.chiTietDanhSachHoSoDaGui} key={index}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={styles.text1}>{index + 1}</Text>
                </View>

                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={styles.text1}>{item.tenThuTuc}</Text>
                </View>

                <View style={styles.chiTietViewNgayGui}>
                  <Text style={styles.text1}>{item.ngayGui}</Text>
                </View>

                <View style={styles.chiTietViewTrangThai}>
                  <Text style={styles.text1}>{item.tenTrangThai}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getWidth,
    height: getHeight,
  },

  body: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  textTieuDe: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },

  danhSachThuTucTieuDe: {
    flexDirection: 'row',
    height: 30,
    marginBottom: 7,
    justifyContent: 'center',
  },

  viewSTT: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopLeftRadius: 13,
  },

  viewTenThuTuc: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    marginLeft: 1.5,
    marginRight: 1,
  },

  viewNgayGui: {
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    marginRight: 1.5,
  },

  viewTrangThai: {
    width: 95,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopRightRadius: 13,
  },

  text: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  text1: {
    fontSize: 17,
    color: 'black',
  },

  chiTietDanhSachHoSoDaGui: {
    width: 399,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 70,
    borderWidth: 0.5,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: 'gray',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 7,
  },

  chiTietViewSTT: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
  },

  chiTietViewTenThuTuc: {
    width: 171,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
  },

  chiTietViewNgayGui: {
    width: 91,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
  },

  chiTietViewTrangThai: {
    //width: 96,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TheoDoiDeNghi;
