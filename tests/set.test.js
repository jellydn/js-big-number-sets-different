import { different, union, setBuilder, isSuperset } from "../src/set";

test("[1,2] is not superset [3,6]", () => {
  expect(isSuperset(setBuilder(1, 2), setBuilder(3, 6))).toEqual(false);
});

test("[1,3] is not superset [3,6]", () => {
  expect(isSuperset(setBuilder(3, 6), setBuilder(1, 3))).toEqual(false);
});

test("[1,3] is superset [1,3]", () => {
  expect(isSuperset(setBuilder(1, 3), setBuilder(1, 3))).toEqual(true);
});

test("[1,7] is superset [3,6]", () => {
  expect(isSuperset(setBuilder(3, 6), setBuilder(1, 7))).toEqual(true);
});

test("[1,2] - [3,6]", () => {
  expect(different(setBuilder(1, 2), setBuilder(3, 6))).toMatchObject(
    setBuilder(1, 2)
  );
});

test("[3,6] - [1,2]", () => {
  expect(different(setBuilder(3, 6), setBuilder(1, 2))).toMatchObject(
    setBuilder(3, 6)
  );
});

test("[7,8] - [3,6]", () => {
  expect(different(setBuilder(7, 8), setBuilder(3, 6))).toMatchObject(
    setBuilder(7, 8)
  );
});

test("[3,6] - [7,8]", () => {
  expect(different(setBuilder(3, 6), setBuilder(7, 8))).toMatchObject(
    setBuilder(3, 6)
  );
});

test("[4,5] - [3,6]", () => {
  expect(different(setBuilder(4, 5), setBuilder(3, 6))).toMatchObject(
    setBuilder(0, 0)
  );
});

test("[3,6] - [3,6]", () => {
  expect(different(setBuilder(3, 6), setBuilder(3, 6))).toMatchObject(
    setBuilder(0, 0)
  );
});

test("[2,7] - [3,6]", () => {
  expect(different(setBuilder(2, 7), setBuilder(3, 6))).toMatchObject([
    setBuilder(2, 2),
    setBuilder(7, 7)
  ]);
});

test("[5,7] - [6,8]", () => {
  expect(different(setBuilder(5, 7), setBuilder(6, 8))).toMatchObject(
    setBuilder(5, 5)
  );
});

test("[6,8] - [5,7]", () => {
  expect(different(setBuilder(6, 8), setBuilder(5, 7))).toMatchObject(
    setBuilder(8, 8)
  );
});

test("[1,2] + [3,6]", () => {
  expect(union(setBuilder(1, 2), setBuilder(3, 6))).toMatchObject(
    setBuilder(1, 6)
  );
});

test("[3,6] + [1,2]", () => {
  expect(union(setBuilder(3, 6), setBuilder(1, 2))).toMatchObject(
    setBuilder(1, 6)
  );
});

test("[7,8] + [3,6]", () => {
  expect(union(setBuilder(7, 8), setBuilder(3, 6))).toMatchObject(
    setBuilder(3, 8)
  );
});

test("[3,6] + [7,8]", () => {
  expect(union(setBuilder(3, 6), setBuilder(7, 8))).toMatchObject(
    setBuilder(3, 8)
  );
});

test("[4,5] + [3,6]", () => {
  expect(union(setBuilder(4, 5), setBuilder(3, 6))).toMatchObject(
    setBuilder(3, 6)
  );
});

test("[3,6] + [3,6]", () => {
  expect(union(setBuilder(3, 6), setBuilder(3, 6))).toMatchObject(
    setBuilder(3, 6)
  );
});

test("[1,3] + [5,6]", () => {
  expect(union(setBuilder(1, 3), setBuilder(5, 6))).toMatchObject([
    setBuilder(1, 3),
    setBuilder(5, 6)
  ]);
});

test("[5,7] + [6,8]", () => {
  expect(union(setBuilder(5, 7), setBuilder(6, 8))).toMatchObject(
    setBuilder(5, 8)
  );
});

test("[1,2] + [2,2]", () => {
  expect(union(setBuilder(1, 2), setBuilder(2, 2))).toMatchObject(
    setBuilder(1, 2)
  );
});

test("[2,2] + [1,4]", () => {
  expect(union(setBuilder(2, 2), setBuilder(1, 4))).toMatchObject(
    setBuilder(1, 4)
  );
});

test("[1,4] + [2,2]", () => {
  expect(union(setBuilder(1, 4), setBuilder(2, 2))).toMatchObject(
    setBuilder(1, 4)
  );
});
