import { useReducer } from "react";
import { LikeContext } from "./LikeContext";
//  초기 좋아요 상태
const initialState = {
  like: [],
};

function LikeReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      const exist = state.like.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          like: state.like.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          like: [...state.like, action.payload],
        };
      }
    }
    case "removeAll":
      return {
        ...state,
        like: [],
      };
    default:
      return state;
  }
}

export const LikeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LikeReducer, initialState);

  return (
    <LikeContext.Provider value={{ state, dispatch }}>
      {children}
    </LikeContext.Provider>
  );
};
