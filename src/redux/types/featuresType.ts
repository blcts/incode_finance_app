export interface State {
  token: string | null,
  isLoading: boolean,
  error: string | null,
}

export type SetFeaturesTokenAction = {
  type: 'featuresState/set_features_token',
  payload: string | null
};

export type SetFeaturesIsLoadingAction = {
  type: 'featuresState/set_features_loading',
  payload: boolean
};

export type SetFeaturesErrorAction = {
  type: 'featuresState/set_features_error',
  payload: string | null
};

export type Actions = SetFeaturesTokenAction | SetFeaturesIsLoadingAction | SetFeaturesErrorAction;
