import shallowEqualObjects, { validObjectValue } from "../objects";

const obj1 = { game: "chess", year: "1979" };
const obj2 = { language: "elm" };

export const objTests: {
  should: string;
  objA: validObjectValue<any>;
  objB: validObjectValue<any>;
  result: boolean;
}[] = [
  {
    should: "return false when A is falsy",
    objA: null,
    objB: {},
    result: false,
  },
  {
    should: "return false when B is falsy",
    objA: {},
    objB: undefined,
    result: false,
  },
  {
    should: "return true when objects are ===",
    objA: obj1,
    objB: obj1,
    result: true,
  },
  {
    should: "return true when both objects are empty",
    objA: {},
    objB: {},
    result: true,
  },
  {
    should: "return false when objects do not have the same amount of keys",
    objA: { game: "chess", year: "1979", country: "Australia" },
    objB: { game: "chess", year: "1979" },
    result: false,
  },
  {
    should: "return false when there corresponding values which are not ===",
    objA: { first: obj1, second: obj2 },
    objB: { first: obj1, second: { language: "elm" } },
    result: false,
  },
  {
    should: "return true when all values are ===",
    objA: { first: obj1, second: obj2 },
    objB: { second: obj2, first: obj1 },
    result: true,
  },
  {
    should: "return false when objectA contains undefined",
    objA: { first: undefined },
    objB: { second: "green" },
    result: false,
  },
];

describe("shallowEqualObjects", () => {
  objTests.forEach((test) => {
    it("should " + test.should, () => {
      expect(shallowEqualObjects(test.objA, test.objB)).toEqual(test.result);
    });
  });
});
