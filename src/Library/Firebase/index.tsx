import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { school } from '../../Assets/Constants';

export interface Data {
  // Define the structure of your data
  id: string;
  school: string
  description: string
  course: any,
  _course: any
}


export const loginauth = async(email: string, password: string, navigation: any)  => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log('User account signed in!', userCredential.user);
        
        const user = firebase.auth().currentUser
        if(user?.emailVerified) {
          if (user.displayName === null) {
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
  export const info = async(firstname: string, lastname: string, gender: string , strands: string ,  navigation: any) => {
    const user = firebase.auth().currentUser

    try {
      user?.updateProfile({
        displayName: firstname + " " + lastname,
        // photoURL: 'yesss'
      })
      firestore()
      .collection('Users')
      .doc(user?.uid)
      .set({
        uid: user?.uid,
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        strands: strands,
      })
      .then(() => {
        navigation.navigate('Bottomtabs' as never)
      });
    } catch (error: any) {
        throw error;
      }
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
  
  export const createAssessment = async(navigation: any) => {
    const serverTimestamp = firestore.FieldValue.serverTimestamp();
    const uid = firestore().collection('assessment').doc().id
    const user = firebase.auth().currentUser
    firestore()
      .collection('assessment')
      .doc(user?.uid)
      .set({
        uid: uid,
        userid: user?.uid,
        Time: serverTimestamp,
        displayName: user?.displayName,
        totalscores: 0,
        schools: school,
      }).then(() => {
        navigation.navigate('Questionaires' as never)
      })
  }

  export const getAllCourse = async (parameter: string): Promise<Data[]> => {
    try {
      const collectionRef = firestore().collection('realcourse');
      const querySnapshot = await collectionRef.where('school', '==', parameter).get();
  
      const data: Data[] = [];
      querySnapshot.forEach((documentSnapshot) => {
        const docData = documentSnapshot.data() as Data;
        data.push(docData);
      });
  
      // console.log('Retrieved data:', data);
      return data;
    } catch (error) {
      console.log('Error retrieving data:', error);
      return [];
    }
  };

