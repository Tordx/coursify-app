import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../../Assets/Styles';
import { Radio, TopExit } from '../../Partials/Global/buttons';
import { useNavigation } from '@react-navigation/native';
import { Questions } from '../../Partials/Global/fields';
import { answers, initialmapping, scaleQuestions, school } from '../../Assets/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setschooling } from '../../Library/Redux-actions/schoolingslice';
import { calculateAssessment } from '../../Library/Functions';
import { createAssessment } from '../../Library/Firebase';
import { AlertModal, LoadingModal } from '../../Partials/Global/modals';

type Props = {};

type Question = {
  key: string;
  text: string;
};

interface Scores {
  _score: {
    score: {
      [key: string]: number;
    };
  };
}

const Questionaires = (props: Props) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [modal, setmodal] = useState(false)
  const {score} = useSelector((action: Scores) => action._score)

  const handleSubmit = async() => {

    try {
      console.log('pressed');
      calculateAssessment(selectedAnswers, dispatch);
      console.log('pressed');
      if (score && Object.keys(score).length > 0) {
        await createAssessment(navigation, score);
      } else {
        setmodal(true)
      }
    } catch (error) {
      console.log(error);
    }

  }


  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      if (answers[questionIndex] && answers[questionIndex][answer]) {
        newAnswers[questionIndex] = answers[questionIndex][answer];
      } else {
        newAnswers[questionIndex] = '';
      }
      console.log(newAnswers);
      
      return newAnswers;
    });
  };
  const navigation = useNavigation();
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>

      <ScrollView style={{ width: '100%', height: '100%'}}>
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%' }}>
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%' }}>
        <Text style={[styles.assessmenttext, { fontSize: 50, paddingTop: '3.5%' }]}>Assessment</Text>
        <Text style={[styles.alertmodaltext, { fontSize: 25, textAlign: 'center', width: '95%', marginBottom: 25 }]}>
          Let us know what are your interests, and we'll let you know what courses fit you
        </Text>
      </View>
      {scaleQuestions ? (
        scaleQuestions.map((question: Question, index: number) => (
          <View key={question.key} style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Questions
              key={`${index}`}
              onValueChange={(answer) => handleAnswerSelection(index, answer)}
              question={question.text}
            />
          </View>
        ))
      ) : (
        <LoadingModal visible={true} />
      )}
              

        <Pressable style = {[styles.getstarted, {marginBottom: 30}]} onPress={handleSubmit}>
          <Text style = {[styles.alertmodaltext, {fontFamily: 'monthe'}]}>SUBMIT</Text>
        </Pressable>
        </View>
      </ScrollView>
      <AlertModal
        visible = {modal}
        title = 'The Assessment is empty'
        onPress={() => setmodal(false)}
        onRequestClose={() => setmodal(false)}
      />
      <TopExit onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Questionaires;