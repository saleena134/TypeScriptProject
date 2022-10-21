import React from "react";
import renderer from "react-test-renderer";
import Form from "../Screens/Form";

// test("renders correctly", () => {
//   const tree = renderer.create(<Form />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe("<Form/>", () => {
  test("should display a blank login form, with remember me checked by default", async () => {
    // ???
  });
});

const mockedFirebaseAuthSignInWithCustomToken = jest.fn();
jest.mock("@react-native-firebase/auth", () => () => {
  return {
    signInWithCustomToken: mockedFirebaseAuthSignInWithCustomToken,
  };
});
