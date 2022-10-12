/**
 * Lerp - linear interpolation
 *
 * @param { number } x range start
 * @param { number } y range end
 * @param { number } a specified point
 *
 * @return { number } returns the value in a given range at a specified point
 */

const lerp = (x: number, y: number, a: number): number => {
  return x * (1 - a) + y * a;
};

export { lerp };
