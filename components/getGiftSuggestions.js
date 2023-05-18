// import React from "react";
// import { View, Text, Pressable } from "react-native";
// import { styles } from "../data/styles";

// export const GetGiftSuggestions = () => {
//   const occasion = questions[0].options[answers[questions[0].id] - 1].text;
//   const gender = questions[1].options[answers[questions[1].id] - 1].text;
//   const ageRange = questions[2].options[answers[questions[2].id] - 1].text;

//   const matchingGift = gifts.filter(
//     (gift) =>
//       gift.occasion === occasion &&
//       gift.gender === gender &&
//       gift.ageRanges[ageRange]
//   );

//   if (matchingGift.length === 0) {
//     return "No gift found";
//   } else {
//     return (
//       <>
//         {matchingGift.map((giftsObject) => (
//           <View style={styles.giftSuggestion} key={giftsObject.gift}>
//             {giftsObject.ageRanges[ageRange].map((gift) => (
//               <View style={styles.giftSuggestion} key={gift + ageRange}>
//                 <Text style={styles.giftSuggestionText}>{gift}</Text>
//                 {gift.indexOf("Nothing") === -1 && (
//                   <Pressable
//                     key={gift + " searchButton"}
//                     style={styles.searchButton}
//                     onPress={() =>
//                       openSearchResults(gift, occasion, gender, ageRange)
//                     }
//                   >
//                     <Text style={styles.searchButtonText}>Search</Text>
//                   </Pressable>
//                 )}
//               </View>
//             ))}
//           </View>
//         ))}
//       </>
//     );
//   }
// };
