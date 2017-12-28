const appInitialState = {
  subscribed: false,
  accountForm: 'login'
}

export const actionTypes = {
  SUBSCRIBE: 'SUBSCRIBE',
  SET_ACCOUNT_FORM_VIEW: 'SET_ACCOUNT_FORM_VIEW',
  SUBMIT_ACCOUNT_FORM: 'SUBMIT_ACCOUNT_FORM'
}

export default {
  app: (state = appInitialState, { type, payload }) => {
    switch (type) {
    case actionTypes.SET_ACCOUNT_FORM_VIEW:
      return Object.assign({}, state, {
        accountForm: payload.view
      })
    case actionTypes.SUBSCRIBE:
      return Object.assign({}, state, {
        subscribed: true,
        subcriptionEmail: payload.email
      })
    default: return state
    }
  }
}

export function subscribe ({ email }) {
  return {
    type: actionTypes.SUBSCRIBE,
    payload: {
      email
    }
  }
}

export const setAccountFormView = (view) => {
  return {
    type: actionTypes.SET_ACCOUNT_FORM_VIEW,
    payload: {
      view
    }
  }
}

export const submitAccountForm = (username, email, password) => {
  return {
    type: actionTypes.SUBMIT_ACCOUNT_FORM,
    payload: {
      username,
      email,
      password
    }
  }
}
