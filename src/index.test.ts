import { error, success } from "./index.js";

describe("success", () => {
  it("should return a successful response", () => {
    const result = success(
      { id: 1, name: "Abdelaziz" },
      "User fetched successfully",
    );

    expect(result).toEqual({
      success: true,
      message: "User fetched successfully",
      data: {
        id: 1,
        name: "Abdelaziz",
      },
    });
  });
});

describe("error", () => {
  it("should return an error response", () => {
    const result = error("User not found");

    expect(result).toEqual({
      success: false,
      message: "User not found",
      data: null,
    });
  });
});
