const questions = [
  {
    id: 1,
    text: "What is the occasion for the gift?",
    options: [
      { id: 1, text: "Birthday", icon: "🎂" },
      { id: 2, text: "Anniversary", icon: "🎉" },
      { id: 3, text: "Graduation", icon: "🎓" },
      { id: 4, text: "Christmas", icon: "🎄" },
      { id: 5, text: "Valentine's Day", icon: "💝" },
      { id: 6, text: "Mother's Day", icon: "👩‍🍼" },
      { id: 7, text: "Father's Day", icon: "👨‍🍼" },
      { id: 8, text: "Wedding", icon: "💒" },
    ],
    occasionKey: "occasions",
  },
  {
    id: 2,
    text: "What is the recipient’s gender?",
    options: [
      { id: 1, text: "Male", icon: "♂️" },
      { id: 2, text: "Female", icon: "♀️" },
    ],
    genderKey: "genders",
  },
  {
    id: 3,
    text: "What is the recipient’s age range?",
    options: [
      { id: 1, text: "Under 18", icon: "🎁" },
      { id: 2, text: "18-24", icon: "🎁" },
      { id: 3, text: "25-34", icon: "🎁" },
      { id: 4, text: "35-44", icon: "🎁" },
      { id: 5, text: "45-54", icon: "🎁" },
      { id: 6, text: "55+", icon: "🎁" },
    ],
    ageRangeKey: "ageRanges",
  },
];

export default questions;
