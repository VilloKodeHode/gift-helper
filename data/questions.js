const questions = [
  {
    id: 1,
    text: "What is the occasion for the gift?",
    options: [
      { id: 1, text: "Birthday" },
      { id: 2, text: "Anniversary" },
      { id: 3, text: "Graduation" },
      { id: 4, text: "Christmas" },
      { id: 5, text: "Valentine's Day" },
      { id: 6, text: "Mother's Day" },
      { id: 7, text: "Father's Day" },
      { id: 8, text: "Wedding" },
    ],
    occasionKey: "occasions",
  },
  {
    id: 2,
    text: "What is the recipient’s gender?",
    options: [
      { id: 1, text: "Male" },
      { id: 2, text: "Female" },
    ],
    genderKey: "genders",
  },
  {
    id: 3,
    text: "What is the recipient’s age range?",
    options: [
      { id: 1, text: "Under 18" },
      { id: 2, text: "18-24" },
      { id: 3, text: "25-34" },
      { id: 4, text: "35-44" },
      { id: 5, text: "45-54" },
      { id: 6, text: "55+" },
    ],
    ageRangeKey: "ageRanges",
  },
];

export default questions;
