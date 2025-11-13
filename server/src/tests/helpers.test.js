import { validateBug } from "../utils/validation.js";

describe("Bug validation helper", () => {
  it("should return error if title is missing", () => {
    const result = validateBug({ description: "Missing title" });
    expect(result).toBe("Title is required");
  });

  it("should return error if description too long", () => {
    const longDesc = "a".repeat(301);
    const result = validateBug({ title: "Bug", description: longDesc });
    expect(result).toBe("Description too long");
  });

  it("should return null for valid bug", () => {
    const result = validateBug({ title: "Bug A", description: "Valid" });
    expect(result).toBeNull();
  });
});
