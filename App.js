import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Linking } from "react-native";
import gifts from "./data/gifts";
import questions from "./data/questions";
import { styles } from "./data/styles";

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
    const matchingGift = gifts.filter(
      (gift) =>
        gift.occasion ===
          questions[0].options[answers[questions[0].id] - 1].text &&
        gift.gender ===
          questions[1].options[answers[questions[1].id] - 1].text &&
        gift.ageRange ===
          questions[2].options[answers[questions[2].id] - 1].text
    );
    if (matchingGift.length === 0) {
      return "No gift found";
    } else {
      return (
        <>
          {matchingGift.map((giftsObject) => (
            <View style={styles.giftSuggestion} key={gifts.gift}>
              {giftsObject.gift.map((gift) => (
                <View
                  style={styles.giftSuggestion}
                  key={gifts.gift + " innerView"}
                >
                  <Text style={styles.resultText}>{gift.gift}</Text>
                  {gift.gift.indexOf("Nothing") === -1 && (
                    <Pressable
                      key={gifts.gift + " searchButton"}
                      style={styles.searchButton}
                      onPress={() =>
                        //inserting what the search query should be:
                        openSearchResults(
                          gift.gift,
                          questions[0].options[answers[questions[0].id] - 1]
                            .text,
                          questions[1].options[answers[questions[1].id] - 1]
                            .text,
                          questions[2].options[answers[questions[2].id] - 1]
                            .text
                        )
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
              <Pressable
                style={styles.button}
                key={option.id}
                onPress={() => handleAnswer(currentQuestion.id, option.id)}
              >
                <Text style={styles.buttonText}>
                  {option.text} {"\n"}
                  {option.icon}
                </Text>
              </Pressable>
            ))}
          </View>
        </>
      )}
      {/* renders when all questions is anwered: */}
      {!currentQuestion && (
        <View style={styles.resultContainer}>
          <>
            <ScrollView style={styles.scrollView}>
              <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                  We recommend getting this as a gift:
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
