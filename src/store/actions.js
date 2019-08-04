export const LOADING_APP = "LOADING_APP";

export function isLoadingAction() {
  return { type: LOADING_APP, data: true };
}

export default {
  isLoadingAction
};
