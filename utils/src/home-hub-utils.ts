export type AuthInfo = {
  email: string;
  authId: number;
  firstName?: string;
  lastName?: string;
};

export const loginFunction = (email: AuthInfo["email"]) => {
  const authId = email.replace("@", "").replace(".", "").codePointAt(1);
  localStorage.setItem(
    "auth",
    JSON.stringify({ email: email, authId: authId })
  );
  location.replace(`/dashboard/${authId}/`);
};

export const logoutFunction = () => {
  localStorage.removeItem("auth");
  return location.replace("/");
};

export const checkIsAuthenticated = () => {
  const auth = localStorage.getItem("auth");
  if (!auth) {
    return { authInfo: undefined, isAuthenticated: true };
  }

  const authObj: AuthInfo = JSON.parse(auth);
  if (!location.pathname.includes(authObj.authId.toString())) {
    return { authInfo: undefined, isAuthenticated: false };
  }

  return { authInfo: authObj, isAuthenticated: true };
};
