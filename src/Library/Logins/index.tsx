import auth, { firebase } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import md5 from 'md5';
import { NativeModules } from 'react-native';
import { LoginManager } from 'react-native-fbsdk-next';


const { RNTwitterSignIn } = NativeModules;

 export const google = async() => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(idToken);
    
    return auth().signInWithCredential(googleCredential);
    
  }

  export const twitter = async() => {

    const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();
    const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);
    return auth().signInWithCredential(twitterCredential);

  }

  export const login = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then((result: any) => {
          if (result.isCancelled) {
            console.log("Login cancelled");
          } else {
            console.log(
              "Login success with permissions: " +
                result.grantedPermissions.toString()
            );
          }
        },
        function(error) {
          console.log("Login fail with error: " + error);
        }
      );
}

export  const AuthToken = async () => {
  const apiKey = "F7N6wqID";
  const appId = "Iwtc8IjT";
  const apiPwd = "gW2CpuR9";
  const url = 'https://api.onbuka.com/v3/sendSms';
  const timestamp = Math.floor(Date.now() / 1000);
  const sign = md5(apiKey + apiPwd +timestamp.toString());
  const number = 'your number'

  const payload = {
    content: "Your Verification code is: 12512",
    numbers: "+63" + number,
    appId: appId,
    senderId: "POSO Lingayen"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Api-Key': apiKey,
        'Sign': sign,
        'Timestamp': timestamp.toString()
      },
      body: JSON.stringify(payload)
    })
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error(error);
  }
};

//verify via couchdb

  // const verify = async() => {
    
  //   console.log('tired');
  //   console.log(dbtoken);
  //   if(!token) {
  //     settitle('Please enter TruCredit ID')
  //     setalertmodal(true)
  //   } else {
  //     setloadingmodal(true)
  //     try {
        
  //       console.log('tired');
        
  //       var result = await dbtoken.allDocs({
          
  //         include_docs: true,
  //         attachment: true,
  //       })
  //       console.log('tired');
  //       if(result.rows){
  //         var data = result.rows.map(function(item: any){
  //           console.log('tried');
  //           return item.doc
  //         })
  //         var mappedData = data.filter((item: any) => {
  //           console.log('opsie');
  //           return item.token == token;
  //         })
  //         if(mappedData.length > 0) {
  //           var filteredData = mappedData.map((item: any) => {
  //             return item
  //           })
            
  //           const token = filteredData[0].token
  //           const Status = filteredData[0].status
  //           if (Status === 'unregistered') {

  //             dispatch(setusertoken(token))
  //             navigation.navigate('Signup' as never)
  //             setloadingmodal(false)
  //           } else if (Status === 'registered'){
  //             setloadingmodal(false)
  //             settitle("TruCredit ID already Registered")
  //             setalertmodal(true)
  //           }
  //         } else {
  //             setloadingmodal(false)
  //             settitle("TruCredit ID doesn't exist.")
  //             setalertmodal(true)
              
  //         }
  //       }

  //     } catch (error){
  //       console.log(error);
  //       setloadingmodal(false)
  //       settitle("Please check your connection.")
  //       setalertmodal(true)
  //     }
  //   }
  // }

