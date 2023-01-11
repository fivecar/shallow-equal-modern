import { shallowEqual } from "../index";
import { arrTests } from "./arrays.test";
import { objTests } from "./objects.test";

describe("shallowEqual on arrays", () => {
  arrTests.forEach((test) => {
    it("should " + test.should, () => {
      expect(shallowEqual(test.arrA, test.arrB)).toEqual(test.result);
    });
  });
});

describe("shallowEqual on objects", () => {
  objTests.forEach((test) => {
    it("should " + test.should, () => {
      expect(shallowEqual(test.objA, test.objB)).toEqual(test.result);
    });
  });
});
