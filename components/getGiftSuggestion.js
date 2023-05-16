export const getGiftSuggestion = () => {
  const matchingGift = gifts.filter(
    (gift) =>
      gift.occasion ===
        questions[0].options[answers[questions[0].id] - 1].text &&
      gift.gender === questions[1].options[answers[questions[1].id] - 1].text &&
      gift.ageRange === questions[2].options[answers[questions[2].id] - 1].text
  );
  if (matchingGift.length === 0) {
    return "No gift found";
  } else {
    return (
      <>
        {matchingGift.map((giftsObject) => (
          <View style={styles.giftSuggestion} key={gifts.gift}>
            {giftsObject.gift.map((gift) => (
              <View style={styles.giftSuggestion}>
                <Text style={styles.resultText}>{gift.gift}</Text>
                {gift.gift.indexOf("Nothing") === -1 && (
                  <Pressable
                    style={styles.searchButton}
                    onPress={() =>
                      openSearchResults(
                        gift.gift,
                        questions[0].options[answers[questions[0].id] - 1].text,
                        questions[1].options[answers[questions[1].id] - 1].text,
                        questions[2].options[answers[questions[2].id] - 1].text
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
