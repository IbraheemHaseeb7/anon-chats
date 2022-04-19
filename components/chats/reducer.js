export function reducer(state, action) {
  switch (action.type) {
    case "typing":
      return {
        ...state,
        value: action.payload,
      };

    case "send":
      return {
        ...state,
        value: "",
      };
  }
}
