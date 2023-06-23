import auth, { firebase } from '@react-native-firebase/auth';


export const loginauth = async(email: string, password: string, navigation: any)  => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log('User account signed in!', userCredential.user);
        
        const user = firebase.auth().currentUser
        if(user?.emailVerified) {
          if (!user.displayName || user.phoneNumber || user.photoURL) {
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

  export const onDelete = async() => {

    await firebase.auth().currentUser?.delete()
    .then((response) => {
      throw response;
    })
    

  }
  
  