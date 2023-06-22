// own generated functions

import { Linking } from "react-native";

export const passwordgen = () => {

    const script = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+-=';
    let random = '';
    for (let i = 0; i < 15; i++){
        const randomindex = Math.floor(Math.random() * script.length)
        random += script[randomindex]
    }

    return random
}

export const openEmailApp = () => {
    const email = 'support@trucredit.com';
    const url = `mailto:${email}`;
  
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log('Unable to open email app');
        }
      })
      .catch((error) => console.log(error));
  };