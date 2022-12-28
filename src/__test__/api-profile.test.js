import ExampleService from "Services/Instances/ExampleService";

describe("Unit Test Category APIs", () => {
  it("List of categories is correct", async () => {
    const response = await ExampleService.getProfile();
    console.log("1111111", response);
    expect(response).toMatchSnapshot();
  });
});
