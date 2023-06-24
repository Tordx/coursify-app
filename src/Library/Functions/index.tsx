// own generated functions

import { Linking } from "react-native";
import { setscore } from "../Redux-actions/scoreslice";

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

  export const calculateAssessment = (selectedAnswers: string[], dispatch: any) => {

    const countObject: { [key: string]: number } = {};

    selectedAnswers.forEach((str: string) => {
      if (countObject[str]) {
        countObject[str] += 1;
      } else {
        countObject[str] = 1;
      }
    });

    delete countObject['undefined'];
    const countArray = Object.entries(countObject);

    countArray.sort((a, b) => b[1] - a[1]);
  
    const highestObjects = countArray
    .filter(([key, value]) => value !== undefined)
    .slice(0, 2);
    
  
    console.log(highestObjects);
    console.log(countObject);
    dispatch(setscore(highestObjects))

    
  }