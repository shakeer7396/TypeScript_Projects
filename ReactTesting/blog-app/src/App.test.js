import Users from "./Users";
import renderer from "react-test-renderer";
// User Function Testing

test("Class Components method Testing", () => {
  const componentData = renderer.create(<Users />).getInstance(); //getting all data with instance
  expect(componentData.getUserList()).toMatch("user list");
});
