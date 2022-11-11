import { State, SetFeaturesErrorAction, SetFeaturesIsLoadingAction, Actions } from "./types/featuresType";

const initialState: State = {
  token: null,
  isLoading: false,
  error: null,
}

const featuresReducer = (
  state: State = initialState,
  action: Actions,
): State => {
  switch (action.type) {
    case 'featuresState/set_features_token':
      return {
        ...state,
        token: action.payload,
      };

    case 'featuresState/set_features_loading':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'featuresState/set_features_error':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  };
};

export const SetFeaturesTokenActionCreator = (
  token: string | null,
) : SetFeaturesErrorAction => ({
  type: 'featuresState/set_features_error',
  payload: token,
});

export const SetFeaturesLoadingActionCreator = (
  isLoading: boolean,
) : SetFeaturesIsLoadingAction => ({
  type: 'featuresState/set_features_loading',
  payload: isLoading,
});

export const SetFeaturesErrorActionCreator = (
  errorMessage: string | null,
) : SetFeaturesErrorAction => ({
  type: 'featuresState/set_features_error',
  payload: errorMessage,
});

export default featuresReducer;