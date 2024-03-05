import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ModalThongBao from './ModalThongBao';

const ModalDonViVaLinhVuc = props => {
  const {visible, onClose} = props;
  const [checked, setChecked] = useState('DonVi');

  const {getTenDonVi, setTenDonVi} = props;

  const [showModalThongBao, setShowModalThongBao] = useState(false);
  const openModalThongBao = () => {
    setShowModalThongBao(true);
  };

  const closeModalThongBao = () => {
    setShowModalThongBao(false);
  };

  const mangDonVi = [
    'Phòng Công tác sinh viên',
    'Phòng Đào tạo',
    'Phòng Hành chính quản trị',
    'Phòng Khảo thí và Đảm bảo chất lượng',
    'Phòng Khoa học công nghệ',
    'Phòng Tổ chức cán bộ',
  ];

  const mangLinhVuc = [
    'CNTT - Hệ thống web',
    'CNTT - Phần mềm',
    'Cơ sở vật chất',
    'CT&CTSV',
    'Đào tạo - Giảng dạy',
    'HCQT',
    'KHCN',
    'TCCB',
  ];

  return (
    <View>
      <ModalThongBao
        visible={showModalThongBao}
        onClose={closeModalThongBao}
        message="Chưa hoàn thành!"
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.viewContainer}>
          <View style={styles.viewModal}>
            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.radioItem, {marginLeft: 15}]}>
                  <RadioButton
                    value="DonVi"
                    color="#ffffff"
                    uncheckedColor="#ffffff"
                  />
                  <Text style={styles.modalText}>Đơn vị</Text>
                </View>

                <View style={[styles.radioItem, {marginLeft: 30}]}>
                  <RadioButton
                    value="LinhVuc"
                    color="#ffffff"
                    uncheckedColor="#ffffff"
                  />
                  <Text style={styles.modalText}>Lĩnh vực</Text>
                </View>

                <TouchableOpacity onPress={onClose}>
                  <Image
                    source={require('../../../images/backk.png')}
                    style={styles.iconBack}
                    tintColor={'#ffffff'}
                  />
                </TouchableOpacity>
              </View>
            </RadioButton.Group>

            {checked === 'DonVi' ? (
              <View style={{marginTop: 10}}>
                {mangDonVi.map((mdv, index) => (
                  <TouchableOpacity
                    style={styles.TouchableOpacity}
                    key={index}
                    onPress={() => {
                      setTenDonVi(mangDonVi[index]);
                      onClose();
                    }}>
                    <Text style={styles.modalText}>{mdv}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={{marginTop: 10}}>
                {mangLinhVuc.map((mlv, index) => (
                  <TouchableOpacity style={styles.TouchableOpacity} key={index}>
                    <Text style={styles.modalText}>{mlv}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },

  viewModal: {
    width: 269,
    height: 269,
    backgroundColor: '#245d7c',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 8,
    shadowRadius: 4,
    elevation: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginTop: 175.5,
  },

  modalText: {
    fontSize: 16,
    color: '#ffffff',
  },

  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBack: {
    width: 30,
    height: 30,
    marginLeft: 35,
  },

  TouchableOpacity: {
    marginLeft: 7,
    marginBottom: 6,
  },
});
export default ModalDonViVaLinhVuc;
