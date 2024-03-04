import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

import Header from '../../../Untils/Header';
import Footer from '../../../Untils/Footer';
import ModalThongBao from '../../../Untils/ModalThongBao';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TrangChu = () => {
  const [thongTinTimKiem, setThongTinTimKiem] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="THỦ TỤC HÀNH CHÍNH" onPress={() => {}} />

      <ModalThongBao
        visible={showModal}
        onClose={closeModal}
        message="Chưa hoàn thành!"
      />

      <View style={styles.body}>
        <TouchableOpacity style={styles.openMenu} onPress={openModal}>
          <Image
            source={require('../../../../../images/right-arrow.png')}
            tintColor={'#ffff'}
            style={styles.iconOpenMenu}
          />
        </TouchableOpacity>

        <View style={styles.marginBody}>
          {/* Tìm kiếm */}
          <View
            style={{
              marginTop: 5,
              marginBottom: 15,
              width: 50,
              width: '100%',
              flexDirection: 'row',
            }}>
            <TextInput
              autoCapitalize="none"
              placeholderTextColor={'gray'}
              style={styles.textInput}
              placeholder="   Tìm kiếm"
              value={thongTinTimKiem}
              onChangeText={text => setThongTinTimKiem(text)}
            />

            <View style={styles.containerSearchAndClose}>
              {thongTinTimKiem !== '' ? (
                <View style={styles.containerClose}>
                  <TouchableOpacity
                    onPress={() => {
                      setThongTinTimKiem('');
                    }}>
                    <Image
                      source={require('../../../../../images/icon_close.png')}
                      style={styles.image}
                      tintColor={'gray'}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
              <View
                style={[
                  styles.containerClose,
                  {position: 'absolute', right: 0},
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Tìm kiếm');
                  }}>
                  <Image
                    source={require('../../../../../images/icon_search.png')}
                    style={styles.image}
                    tintColor={'gray'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView style={{height: 415}}>
            {/* Danh sách thủ tục */}
            <View style={styles.danhSachThuTucTieuDe}>
              <View style={styles.viewSTT}>
                <Text style={styles.text}>STT</Text>
              </View>

              <View style={styles.viewTenThuTuc}>
                <Text style={styles.text}>Tên thủ tục</Text>
              </View>

              <View style={styles.viewLinhVuc}>
                <Text style={styles.text}>Lĩnh vực</Text>
              </View>
            </View>

            {/* Chi tiết danh sách tên thủ tục */}
            <View style={styles.viewData}>
              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>

              <View style={styles.chiTietDanhSachThuTuc}>
                <View style={styles.chiTietViewSTT}>
                  <Text style={[styles.text, {color: 'black'}]}>1</Text>
                </View>

                {/* chi tiết danh sách thủ tục */}
                <View style={styles.chiTietViewTenThuTuc}>
                  <Text style={[styles.text2, {fontWeight: 'bold'}]}>
                    QUY TRÌNH XIN NGHỈ THAI SẢN
                  </Text>

                  <View style={styles.chiTietViewTenThuTucMucDo}>
                    <Text style={[styles.text2, {marginTop: 2}]}>Mức độ:</Text>
                    <View style={styles.viewMucDo}>
                      <Text style={[styles.text1, {color: '#ffffff'}]}>4</Text>
                    </View>
                  </View>

                  <Text style={[styles.text2, {color: 'red', marginTop: 2}]}>
                    Nộp hồ sơ
                  </Text>
                </View>

                <View style={styles.chiTietViewLinhVuc}>
                  <Text style={[styles.text1, {color: 'black'}]}>TCCB</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.viewContainerPreNext}>
            <View style={styles.viewPreNext}>
              <TouchableOpacity
                onPress={() => {
                  openModal();
                }}>
                <View style={styles.viewButtonNext}>
                  <Image
                    source={require('../../../../../images/previous.png')}
                    style={styles.iconButtonNext}
                    tintColor={'#ffffff'}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  openModal();
                }}>
                <View style={[styles.viewButtonNext, {marginLeft: 6}]}>
                  <Image
                    source={require('../../../../../images/backk.png')}
                    style={styles.iconButtonNext}
                    tintColor={'#ffffff'}
                  />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  position: 'absolute',
                  right: 0,
                  flexDirection: 'row',
                  height: 31,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    openModal();
                  }}>
                  <View
                    style={[
                      styles.viewButtonNext,
                      {backgroundColor: '#245d7c'},
                    ]}>
                    <Image
                      source={require('../../../../../images/nextt.png')}
                      style={styles.iconButtonNext}
                      tintColor={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    openModal();
                  }}>
                  <View
                    style={[
                      styles.viewButtonNext,
                      {
                        marginLeft: 6,
                        backgroundColor: '#245d7c',
                        borderRadius: 4,
                      },
                    ]}>
                    <Image
                      source={require('../../../../../images/right_right.png')}
                      style={styles.iconButtonNext}
                      tintColor={'#ffffff'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              {/*  */}
            </View>
          </View>
        </View>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -45,
  },

  openMenu: {
    width: 53,
    height: 33,
    backgroundColor: '#245d7c',
    marginTop: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconOpenMenu: {
    width: 16,
    height: 16,
  },

  containerSearchAndClose: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 70,
    height: 44,
    flexDirection: 'row',
  },

  containerClose: {
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.7,
    padding: 3,
    borderRadius: 20,
    color: 'black',
  },

  image: {
    width: 16,
    height: 16,
    marginTop: 8,
  },

  marginBody: {
    marginLeft: 10,
    marginRight: 10,
  },

  danhSachThuTucTieuDe: {
    flexDirection: 'row',
    height: 30,
    marginBottom: 8,
  },

  text: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  text1: {
    fontSize: 17,
  },

  text2: {
    fontSize: 17,
    marginLeft: 10,
    color: 'black',
  },

  viewSTT: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },

  viewTenThuTuc: {
    width: 265,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    marginLeft: 1.5,
    marginRight: 1,
  },

  viewLinhVuc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#245d7c',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },

  chiTietDanhSachThuTuc: {
    flexDirection: 'row',
    height: 80,
    borderWidth: 0.5,
    marginBottom: 15,
    borderRadius: 8,
    borderColor: 'gray',
  },

  chiTietViewSTT: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.3,
    borderRightColor: 'gray',
  },

  chiTietViewTenThuTuc: {
    width: 265,
    marginLeft: 1.5,
    marginRight: 1,
    justifyContent: 'center',
  },

  chiTietViewLinhVuc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.3,
    borderLeftColor: 'gray',
  },

  chiTietViewTenThuTucMucDo: {
    flexDirection: 'row',
  },

  viewMucDo: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 5,
  },

  viewData: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
    marginBottom: 10,
  },

  viewContainerPreNext: {
    height: 31,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },

  viewPreNext: {
    width: 270,
    height: '100%',
    flexDirection: 'row',
  },

  viewButtonNext: {
    width: 31,
    height: '100%',
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  iconButtonNext: {
    height: 15,
    width: 15,
  },
});
export default TrangChu;
