import { setBuilder } from "../src/set";
import { substract } from "../src/index";

test("[[1-5],[2-20]] - [[3,7]]", () => {
  expect(
    substract([setBuilder(1, 5), setBuilder(2, 20)], [setBuilder(3, 7)])
  ).toMatchObject([setBuilder(1, 2), setBuilder(8, 20)]);
});

test("[[3-15],[2-20],[5-10]] - [[3,5]]", () => {
  expect(
    substract(
      [setBuilder(3, 15), setBuilder(2, 20), setBuilder(5, 10)],
      [setBuilder(3, 5)]
    )
  ).toMatchObject([setBuilder(2, 2), setBuilder(6, 20)]);
});

test("[[3-15],[2-20],[5-10]] - [[3,5],[8-10]]", () => {
  expect(
    substract(
      [setBuilder(3, 15), setBuilder(2, 20), setBuilder(5, 10)],
      [setBuilder(3, 5), setBuilder(8, 10)]
    )
  ).toMatchObject([setBuilder(2, 2), setBuilder(6, 7), setBuilder(11, 20)]);
});

test("[[1-7],[5-20],[25-100]] - [[6,9],[8-11],[30-50]]", () => {
  expect(
    substract(
      [setBuilder(1, 7), setBuilder(5, 20), setBuilder(25, 100)],
      [setBuilder(6, 9), setBuilder(8, 11), setBuilder(30, 50)]
    )
  ).toMatchObject([
    setBuilder(1, 5),
    setBuilder(12, 20),
    setBuilder(25, 29),
    setBuilder(51, 100)
  ]);
});

test("[[1-7],[10-20],[25-100]] - [[2,5],[11-21],[30-50]]", () => {
  expect(
    substract(
      [setBuilder(1, 7), setBuilder(10, 20), setBuilder(25, 100)],
      [setBuilder(2, 5), setBuilder(11, 21), setBuilder(30, 50)]
    )
  ).toMatchObject([
    setBuilder(1, 1),
    setBuilder(6, 7),
    setBuilder(10, 10),
    setBuilder(25, 29),
    setBuilder(51, 100)
  ]);
});

test("[[1-50000000],[2-20000000]] - [[3-7]]", () => {
  expect(
    substract(
      [setBuilder(1, 50000000), setBuilder(2, 20000000)],
      [setBuilder(3, 7)]
    )
  ).toMatchObject([setBuilder(1, 2), setBuilder(8, 50000000)]);
});
