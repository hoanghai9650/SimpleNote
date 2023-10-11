import CryptoJS from 'react-native-crypto-js';

export const useEncryption = () => {
  const encryptionKey = '12345678901234567890123456789012';

  const encrypt = (data: {}) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), encryptionKey).toString();
  };

  const decrypt = (data: string) => {
    return CryptoJS.AES.decrypt(data, encryptionKey)
      .toString(CryptoJS.enc.Utf8)
      .replace(/"/g, '');
  };

  return {encrypt, decrypt};
};
