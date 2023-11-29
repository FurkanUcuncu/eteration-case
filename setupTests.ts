// import '@testing-library/jest-dom';

jest.mock("redux-persist/integration/react", () => ({
  PersistGate: (props: any) => props.children,
}));
jest.mock("redux-persist", () => ({
  ...jest.requireActual("redux-persist"),
  persistReducer: jest.fn().mockImplementation((config, reducer) => reducer),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

jest.mock("@react-navigation/bottom-tabs", () => ({
  createBottomTabNavigator: jest.fn().mockImplementation(() => {
    return {
      Navigator: jest.fn(),
    };
  }),
}));

jest.mock("@react-navigation/native-stack", () => ({
  createNativeStackNavigator: jest.fn().mockImplementation(() => {
    return {
      Navigator: jest.fn(),
    };
  }),
}));

jest.mock("axios", () => ({
  create: jest.fn(),
  config: {
    paramsSerializer: jest.fn(),
  },
}));

jest.mock("qs", () => jest.fn());
