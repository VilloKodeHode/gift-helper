import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import gifts from "./data/gifts";
import questions from "./data/questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const getGiftSuggestion = () => {
    const matchingGift = gifts.find(
      (gift) =>
        gift.occasion ===
          questions[0].options[answers[questions[0].id] - 1].text &&
        gift.gender ===
          questions[1].options[answers[questions[1].id] - 1].text &&
        gift.ageRange ===
          questions[2].options[answers[questions[2].id] - 1].text
    );
    return matchingGift ? matchingGift.gift : "No gift found";
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {currentQuestion && (
        <>
          <Text style={styles.questionText}>{currentQuestion.text}</Text>
          <View>
            {currentQuestion.options.map((option) => (
              <Pressable
                style={styles.button}
                key={option.id}
                onPress={() => handleAnswer(currentQuestion.id, option.id)}
              >
                {option.text}
              </Pressable>
            ))}
          </View>
        </>
      )}
      {!currentQuestion && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            We recommend getting this as a gift: {"\n"}
            <span style={styles.giftSuggestion}>{getGiftSuggestion()}</span>
          </Text>
          <Button title="Start Over" onPress={resetQuiz} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6865EB",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#EB65CF",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 200,
    color: "white",
    margin: 5,
    textAlign: "center",
  },
  questionText: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  resultContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  resultText: {
    fontSize: 18,
    borderStyle: "solid",
    textAlign: "center",
    marginBottom: 20,
  },
  giftSuggestion: {
    fontSize: 18,
    color: "#EB65CF",
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
});

export default App;
