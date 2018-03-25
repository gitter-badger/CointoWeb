// import { AuthActionTypes, AuthActions } from './../actions/auth.action';

// import { AuthenticateResultModel } from '../../shared/service-proxies/service-proxies';

// export interface State {
//   loggedIn: boolean;
//   user: AuthenticateResultModel | null;
//   token: string;
//   encodedToken: string;
// }

// export const initialState: State = {
//   loggedIn: false,
//   user: null,
//   token: null,
//   encodedToken: null
// };

// export function reducer(state = initialState, action: AuthActions): State {
//   switch (action.type) {
//     case AuthActionTypes.LoginSuccess: {
//       return {
//         ...state,
//         loggedIn: true,
//         user: action.payload.user,
//         token: action.payload.user.accessToken,
//         encodedToken: action.payload.user.encryptedAccessToken
//       };
//     }

//     case AuthActionTypes.Logout: {
//       return initialState;
//     }

//     default: {
//       return state;
//     }
//   }
// }

// export const getLoggedIn = (state: State) => state.loggedIn;
// export const getUser = (state: State) => state.user;
