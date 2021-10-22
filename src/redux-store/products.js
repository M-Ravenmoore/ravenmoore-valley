const serverUrl = process.env.REACT_APP_SERVER_URL;
const callApi = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/listings`);
    console.log(response)
    
    const responseData = await response.json();
    console.log(responseData)
    return (responseData);
  } catch (error) {
    return (error.message);
  }
};

let initialState = callApi();
// actions
export const details = (id) => {
  return {
    type: 'DETAILS',
    payload: id
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADDTOCART',
    payload: item
  }
}
// TODO create cart reducer to manage cart state

function productsReducer(state=initialState, action){


  let { type, payload } = action;

  // TODO sort by activeSelection here and assign to state... then do action on current selection

  switch (type) {

    case 'DETAILS':
      console.log('clicked details for',payload)
     
      return {state};

    case 'ADDTOCART':
      console.log('clicked add to cart with item',payload)
      
      return {state};
      
    default:
      console.log('state on 31',state)
      return state;
  }
}

export default productsReducer;