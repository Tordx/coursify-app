import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface Data {
  // Define the structure of your data
  id: string;
  // Add more properties as needed
  // For example: name: string;
}


export const loginauth = async(email: string, password: string, navigation: any)  => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log('User account signed in!', userCredential.user);
        
        const user = firebase.auth().currentUser
        if(user?.emailVerified) {
          if (user.displayName) {
            navigation.navigate('Signup' as never)
          } else {
            navigation.navigate('Bottomtabs' as never)
            return userCredential.user
          }
        } else {
          navigation.navigate('Signup' as never)
        }

      } catch (error) {
        console.error(error);
        throw error;
      }
  }

  export const signup = async(email: string, password: string, navigation: any) => {

    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      console.log(response);
      const user = firebase.auth().currentUser;
      await user?.sendEmailVerification().then((checkcode) => {
        console.log(user)
        console.log(checkcode);
        navigation.navigate('Signup' as never);
        
      })
    } catch (error: any) {
        throw error;
      }
  };
  export const info = async(firstname: string, lastname: string, phonenumber: string , gender: string , strands: string ,  navigation: any) => {
    const user = firebase.auth().currentUser
    const useruid = firebase.auth().currentUser?.uid
    console.log('====================================');
    console.log(user);
    console.log('====================================');

    // if (user) {
    //   await user.updateProfile({
    //     displayName: firstname,
    //     // photoURL: user.photoURL,
    //   });

    //   // Refresh the user to reflect the updated changes
    //   await user.reload();
    //   console.log('====================================');
    //   console.log(user);
    //   console.log('====================================');
    // }
    try {
      firestore()
      .collection('Users')
      .doc(useruid)
      .set({
        uid: useruid,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        gender: gender,
        strands: strands,
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Bottomtabs' as never)
      });
    } catch (error: any) {
        throw error;
      }
      console.log('====================================');
      console.log('end of info');
      console.log('====================================');
  };

  export const onDelete = async() => {

    await firebase.auth().currentUser?.delete()
    .then((response) => {
      throw response;
    })
    

  }

 export const getAllData = async (): Promise<Data[]> => {
    try {
      const collectionRef = firestore().collection('course');
      const querySnapshot = await collectionRef.get();
  
      const data: Data[] = [];
      querySnapshot.forEach((documentSnapshot) => {
        const docData = documentSnapshot.data() as Data;
        data.push(docData);
      });
  
      console.log('Retrieved data:', data);
      return data;
    } catch (error) {
      console.log('Error retrieving data:', error);
      return [];
    }
  };
  
  