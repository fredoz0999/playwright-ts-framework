/**
 * Public Sauce Demo accounts (printed on the login page). Not secrets.
 * https://www.saucedemo.com
 */
export const users = {
  standard: { username: "standard_user", password: "secret_sauce" },
  lockedOut: { username: "locked_out_user", password: "secret_sauce" },
} as const;
