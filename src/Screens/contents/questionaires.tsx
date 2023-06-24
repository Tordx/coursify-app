import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../Assets/Styles';
import { Radio, TopExit } from '../../Partials/Global/buttons';
import { useNavigation } from '@react-navigation/native';
import { Questions } from '../../Partials/Global/fields';
import { answers, initialmapping, scaleQuestions, school } from '../../Assets/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setschooling } from '../../Library/Redux-actions/schoolingslice';

type Props = {};

type AnswerOptions = {
  [key: string]: string;
};
type Question = {
  key: string;
  text: string;
};

const Questionaires = (props: Props) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      if (answers[questionIndex] && answers[questionIndex][answer]) {
        newAnswers.push(answers[questionIndex][answer]);
      } else {
        newAnswers.push('');
      }
      console.log(selectedAnswers);
      
      return newAnswers;
    });
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%' }}>
        <Text style={[styles.assessmenttext, { fontSize: 50 }]}>Assessment</Text>
        <Text style={[styles.alertmodaltext, { fontSize: 25, textAlign: 'center', width: '95%', marginBottom: 25 }]}>
          Let us know what are your interests, and we'll let you know what courses fit you
        </Text>
      </View>

      <ScrollView style={{ width: '100%', height: '100%', marginTop: '1%' }}>
        {scaleQuestions.map((question: Question, index: number) => (
          <View key={question.key} style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Questions
              key={`${index}`}
              onValueChange={(answer) => handleAnswerSelection(index, answer)}
              question={question.text}
            />
          </View>
        ))}
      </ScrollView>

      <Text>{selectedAnswers}</Text>

      <TopExit onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Questionaires;