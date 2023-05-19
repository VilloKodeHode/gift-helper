import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Linking } from "react-native";
// import gifts from "./data/gifts";
import questions from "./data/questions";
import { styles } from "./data/styles";
const gifts = require("./data/gifts.json");


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  //button logic when user presses a question option:
  const handleAnswer = (questionId, answerId) => {
    setAnswers({ ...answers, [questionId]: answerId });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  //logic for the search buttons:
  const openSearchResults = (giftName) => {
    const occasion = questions[0].options[answers[questions[0].id] - 1].text;
    const gender = questions[1].options[answers[questions[1].id] - 1].text;
    const ageRange = questions[2].options[answers[questions[2].id] - 1].text;
    const searchQuery = `${giftName} ${occasion} ${gender} ${ageRange}`;
    const encodedQuery = encodeURIComponent(searchQuery);
    const searchURL = `https://www.google.com/search?q=${encodedQuery}`;
    Linking.openURL(searchURL).catch((error) => {
      console.error("Failed to open URL:", error);
    });
  };

  //find the gift by checking which question options were selected:
  const getGiftSuggestion = () => {
    const occasion = questions[0].options[answers[questions[0].id] - 1].text;
    const gender = questions[1].options[answers[questions[1].id] - 1].text;
    const ageRange = questions[2].options[answers[questions[2].id] - 1].text;

    const matchingGift = gifts.filter(
      (gift) =>
        gift.occasion === occasion &&
        gift.gender === gender &&
        gift.ageRanges[ageRange]
    );

    if (matchingGift.length === 0) {
      return "No gift found";
    } else {
      return (
        <>
          {matchingGift.map((giftsObject) => (
            <View
              style={styles.giftSuggestion}
              key={giftsObject.gift + ageRange}
            >
              {giftsObject.ageRanges[ageRange].map((gift) => (
                <View style={styles.giftSuggestion} key={gift + ageRange}>
                  <Text style={styles.giftSuggestionText}>{gift}</Text>
                  {gift.indexOf("Nothing") === -1 && (
                    <Pressable
                      key={gift + ageRange + " searchButton"}
                      style={styles.searchButton}
                      onPress={() =>
                        openSearchResults(gift, occasion, gender, ageRange)
                      }
                    >
                      <Text style={styles.searchButtonText}>Search</Text>
                    </Pressable>
                  )}
                </View>
              ))}
            </View>
          ))}
        </>
      );
    }
  };

  //logic for resetting the quiz:
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  //renders the current question options:
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {/* only renders on the start screen: */}
      {currentQuestionIndex === 0 ? (
        <Text style={styles.titleText}>Gift Finder</Text>
      ) : null}
      {/* renders when not all questions is anwered: */}
      {currentQuestion && (
        <>
          <Text style={styles.questionText}>{currentQuestion.text}</Text>

          <View style={styles.buttonGrid}>
            {currentQuestion.options.map((option) => (
              //renders the question options as buttons:
              <>
                <View>
                  <Text style={styles.icon}>{option.icon}</Text>
                  <Pressable
                    style={styles.button}
                    key={option.id}
                    onPress={() => handleAnswer(currentQuestion.id, option.id)}
                  >
                    <Text style={styles.buttonText}>
                      {option.text} {"\n"}
                    </Text>
                  </Pressable>
                </View>
              </>
            ))}
          </View>
        </>
      )}
      {/* renders when all questions is anwered: */}
      {!currentQuestion && (
        <View style={styles.resultContainer}>
          <>
            <ScrollView
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                  Here are some recommendations for a{" "}
                  {questions[2].options[answers[questions[2].id] - 1].text} old{" "}
                  {questions[1].options[answers[questions[1].id] - 1].text}, who
                  is celebrating{" "}
                  {questions[0].options[answers[questions[0].id] - 1].text}:
                </Text>
                {/* renders all gifts that are recommended according to the question answered: */}
                {getGiftSuggestion()}
                {/* resets questions answered and goes back to the start: */}
                <Pressable style={styles.resetButton} onPress={resetQuiz}>
                  <Text style={styles.resetButtonText}>Reset</Text>
                </Pressable>
              </View>
            </ScrollView>
          </>
        </View>
      )}
    </View>
  );
};



export default App;
