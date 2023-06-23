// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { styles } from '../../Assets/Styles'
// import {IconButton, NumpadButton} from '../../Partials/Global/buttons'
// import { errors } from '../../Assets/Colors'
// import { setResults } from '../../Library/Redux-actions/usertokenslice'
// import { useDispatch } from 'react-redux'

// type Props = {}

// const Numpad = (props: Props) => {

//   const [result, setResult] = useState('');
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setResults(result));
//   }, [result, dispatch]);

//   const handlepress = (e: string) => {
//     if (e === 'backspace') {
//       if (!result){
        
//         return 
//       } else {
//         setResult((prevResult) => prevResult.slice(0, -1));
//       }
//     } else if(e ==='AC') {
//       setResult('');
//     } else {
//       setResult((prevResult) => prevResult + e);
//     }
//   };

//   const calculateResult = () => {

//     if (result) {
//         let evaluatedResult = '';
//         if (result.includes('%')) {
//           const parts = result.split('%');
//           if (parts.length === 2) {
//             const operand: number = parseFloat(parts[0]);
//             const percentage: number = parseFloat(parts[1]);
//             const calculatedValue = (operand * percentage) / 100;
//             setResult(`${operand} x ${percentage}% = ${calculatedValue}`);
//           } else {
//             evaluatedResult = 'Invalid input';
//           }
//         } else {
//           evaluatedResult = eval(result);
//         }
//         setResult(evaluatedResult);
//         dispatch(setResults(evaluatedResult));
//     } else {

//       return 
//     }
//   };

//   return (
//     <View style = {styles.numpadcontainer}>
//       <View style = {styles.numpad}>
//         <NumpadButton
//           numbers= 'AC'
//           onPress={() => {handlepress('AC')}}
//         />
//         <IconButton
//           name= 'backspace-outline'
//           onPress={() => {handlepress('backspace'); console.log(result);
//           }}
//         />
//         <NumpadButton
//           numbers= '%'
//           onPress={() => {handlepress('%')}}
//         />
//         <NumpadButton
//           numbers= '÷'
//           onPress={() => {handlepress('/')}}
//         />
//       </View>
//       <View style = {styles.numpad}>
//         <NumpadButton
//           numbers= '7'
//           onPress={() => {handlepress('7')}}
//         />
//         <NumpadButton
//           numbers= '8'
//           onPress={() => {handlepress('8')}}
//         />
//         <NumpadButton
//           numbers= '9'
//           onPress={() => {handlepress('9')}}
//         />
//         <NumpadButton
//           numbers= '×'
//           onPress={() => {handlepress('*')}}
//         />
//       </View>
//       <View style = {styles.numpad}>
//         <NumpadButton
//           numbers= '4'
//           onPress={() => {handlepress('4')}}
//         />
//         <NumpadButton
//           numbers= '5'
//           onPress={() => {handlepress('5')}}
//         />
//         <NumpadButton
//           numbers= '6'
//           onPress={() => {handlepress('6')}}
//         />
//         <NumpadButton
//           numbers= '-'
//           onPress={() => {handlepress('-')}}
//         />
//       </View>
//       <View style = {styles.numpad}>
//         <NumpadButton
//           numbers= '1'
//           onPress={() => {handlepress('1')}}
//         />
//         <NumpadButton
//           numbers= '2'
//           onPress={() => {handlepress('2')}}
//         />
//         <NumpadButton
//           numbers= '3'
//           onPress={() => {handlepress('3')}}
//         />
//         <NumpadButton
//           numbers= '+'
//           onPress={() => {handlepress('+')}}
//         />
//       </View>
//       <View style = {styles.numpad}>
//         <NumpadButton
//           numbers= '±'
//           onPress={() => {handlepress('±')}}
//         />
//         <NumpadButton
//           numbers= '0'
//           onPress={() => {handlepress('0')}}
//         />
//         <NumpadButton
//           numbers= '·'
//           onPress={() => {handlepress('·')}}
//         />
//         <NumpadButton
//         style = {{backgroundColor: errors.M003}}
//           numbers= '='
//           onPress={() => {calculateResult()}}
//         />
//       </View>
     
//     </View>
//   )
// }

// export default Numpad