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

const ChiTetHoSo = navigation => {
  const dataChiTietHoSoDaGui = [
    {tenCongViec: 'Tiếp nhận hồ sơ', ngayXuLy: '17/01/2024 22:47:34'},
    {tenCongViec: 'Xử lý hồ sơ', ngayXuLy: '17/01/2024 23:12:32'},
    {tenCongViec: 'Trả kết quả', ngayXuLy: '17/01/2024 23:12:49'},
    {tenCongViec: 'Hoàn thành', ngayXuLy: '17/01/2024 23:12:52'},
    {tenCongViec: 'Tiếp nhận hồ sơ', ngayXuLy: '17/01/2024 22:47:34'},
    {tenCongViec: 'Xử lý hồ sơ', ngayXuLy: '17/01/2024 23:12:32'},
    {tenCongViec: 'Trả kết quả', ngayXuLy: '17/01/2024 23:12:49'},
    {tenCongViec: 'Hoàn thành', ngayXuLy: '17/01/2024 23:12:52'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title="CHI TIẾT HỒ SƠ" onPress={() => {}} />

      <View style={styles.body}>
        <ScrollView>
          {/* Thông tin hồ sơ */}
          <View style={styles.viewThongTinHoSo}>
            <Text style={styles.textTieuDe}>I. THÔNG TIN HỒ SƠ:</Text>

            <View style={styles.viewText}>
              <Text style={styles.textBold}>Thủ tục</Text>
              <Text style={styles.text}>: QUY TRÌNH XIN NGHỈ THAI SẢN</Text>
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textBold}>Mã hồ sơ</Text>
              <Text style={styles.text}>: TTHC-TCCB-01</Text>
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textBold}>Người nộp hồ sơ</Text>
              <Text style={styles.text}>: Nguyễn Thành Chung</Text>
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textBold}>Ngày gửi</Text>
              <Text style={styles.text}>: 23/02/2024 10:41:20</Text>
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textBold}>Trạng thái</Text>
              <Text style={styles.text}>: Chưa tiếp nhận</Text>
            </View>
          </View>

          <Text style={[styles.textTieuDe, {marginTop: 25, marginLeft: 7}]}>
            II. QUÁ TRÌNH XỬ LÝ:
          </Text>

          <View>
            <View style={styles.danhSachThuTucTieuDe}>
              <View style={styles.viewBuoc}>
                <Text style={styles.textWhite}>Bước</Text>
              </View>

              <View style={styles.viewTenCongViec}>
                <Text style={styles.textWhite}>Công việc</Text>
              </View>

              <View style={styles.viewNgayXuLy}>
                <Text style={styles.textWhite}>Ngày xử lý</Text>
              </View>
            </View>

            <View style={{alignItems: 'center', width: getWidth}}>
              {dataChiTietHoSoDaGui.map((item, index) => (
                <View style={styles.chiTietDanhSachHoSo} key={index}>
                  <View style={styles.chiTietViewBuoc}>
                    <Text style={styles.text}>{index + 1}</Text>
                  </View>

                  <View style={styles.chiTietViewTenCongViec}>
                    <Text style={styles.text}>{item.tenCongViec}</Text>
                  </View>

                  <View style={styles.chiTietViewNgayXuLy}>
                    <Text style={styles.text}>{item.ngayXuLy}</Text>
                  </View>
                </View>
              ))}
            </View>
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

  viewThongTinHoSo: {
    width: 0.95 * getWidth,
    marginTop: 20,
    marginLeft: 7,
  },

  textTieuDe: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },

  text: {
    color: 'black',
    fontSize: 17,
  },

  textBold: {
    width: 120,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },

  textWhite: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  viewText: {
    flexDirection: 'row',
    marginTop: 10,
  },

  danhSachThuTucTieuDe: {
    flexDirection: 'row',
    height: 30,
    marginBottom: 7,
    marginTop: 8,
    justifyContent: 'center',
  },

  viewBuoc: {
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopLeftRadius: 13,
  },

  viewTenCongViec: {
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    marginLeft: 1.5,
    marginRight: 1.5,
  },

  viewNgayXuLy: {
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopRightRadius: 13,
  },

  chiTietDanhSachHoSo: {
    width: 399,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 67,
    marginBottom: 13,
    borderRadius: 8,
    borderColor: 'gray',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 7,
  },

  chiTietViewBuoc: {
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
    backgroundColor: '#f8f8ff',
  },

  chiTietViewTenCongViec: {
    width: 162,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
    backgroundColor: '#f8f8ff',
  },

  chiTietViewNgayXuLy: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'gray',
    backgroundColor: '#f8f8ff',
  },
});

export default ChiTetHoSo;
