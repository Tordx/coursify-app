import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../Assets/Styles'
import { Radio, TopExit } from '../../Partials/Global/buttons'
import { useNavigation } from '@react-navigation/native'
import { Questions } from '../../Partials/Global/fields'
import { scaleQuestions } from '../../Assets/Constants'

type Props = {}

const Questionaires = (props: Props) => {

    const [selectedvalue, setSelectedValue] = useState(0);
    const navigation = useNavigation();
    const handleQuestionsValueChange = (newValue: number) => {
      setSelectedValue(selectedvalue + newValue);
    };
  return (
    <View style = {styles.container}>
      
        <ScrollView style = {{width: '100%', height: '100%', marginTop: '5%'}}>
          <View style = {{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
      <Text style = {[styles.assessmenttext, { fontSize: 50}]}>Assessment</Text>
      <Text style = {[styles.alertmodaltext, { fontSize: 25, textAlign: 'center', width: '90%', marginBottom: 25}]}>Let us know what are your interests, and we'll let you know what courses fits you</Text>
            {scaleQuestions.map((question, index) => (
              <Questions
                key={index}
                onValueChange={handleQuestionsValueChange}
                question={question}
              />
            ))}
            <Text>{selectedvalue}</Text>
          </View>
      </ScrollView>
      <TopExit
              onPress={() => {navigation.goBack()}}
          />
    </View>
  )
}

export default Questionaires