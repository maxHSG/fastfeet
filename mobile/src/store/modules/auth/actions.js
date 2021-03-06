export function signInRequest(id) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {id},
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {user},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function singOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
