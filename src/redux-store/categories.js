let initialState = {
  // TODO this sholud be a list of unique categorys found by looking at current state of all items
  categories: [
    { name: 'All', displayName: 'All' ,active:true},
    { name: 'Managerie', displayName: 'Managerie' ,active:false},
    { name: 'Workshop', displayName: 'Workshop',active:false },
  ],
  selected : {}
};

// actions
export const select = (name) => {
  return {
    type: 'SELECT',
    payload: name
  }
}

function categoriesReducer(state=initialState, action){
  let { type, payload } = action;
  switch (type) {

    case 'SELECT':
      console.log('HELLO',state)
      let selectedCategory = state.categories.map(category => {
        if((category.name === payload)&& (!category.active)){
          category.active = true;
          state.selected = category;
        }
        return category;
      });
      return {...state, selectedCategory};
        
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default categoriesReducer;