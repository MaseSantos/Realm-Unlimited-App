const newQuestions = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_QUESTIONS":
      let newState = [];

      // If this is a new question
      if ( state[action.payload.question_index] === undefined ) {
        // Add elements to the state array until there is one for the new question
        while (state.length < action.payload.question_index) {
          state = [ ...state, ''];
        }
      }
      for (let i; i < state.length; i++ ) {
        // Replace whatever element is at that index with the new value
        if ( i === action.payload.question_index ) {
          newState[i] = action.payload.question;
        } else {
          newState[i] = state[i];
        }
      }
      return newState;
    default:
      return state;
  }
};

export default newQuestions;
