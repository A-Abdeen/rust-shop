import * as types from "../actions/types";

const initialState = {
  manufacturers: [],
  // loading: true
};

const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_MANUFACTURERS:
      return {
        ...state,
        manufacturers: action.payload,
        // loading: false,

        // loading: false Loading screen to buffer between loading from backend and empty
        // array in the initial state above (Refer to last 25 minutes of Fetch Product List Redux Lesson)
      };
    //------------------------------ADDING
    case types.CREATE_MANUFACTURER:
      const { newManufacturer } = action.payload;
      // newManufacturer.id =
      //   state.manufacturers[state.manufacturers.length - 1].id + 1;
      // newManufacturer.slug = slugify(action.payload.newManufacturer.name);
      return {
        ...state,
        manufacturers: [...state.manufacturers, newManufacturer],
      };

    default:
      return state;
  }
};

export default manufacturerReducer;
