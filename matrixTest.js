const assert = require('assert');
const chai = require('chai');
const Matrix = require('./matrix'); // Ваша бібліотека
const expect = chai.expect;

describe('Matrix Library', () => {
  it('тест на створення матриці з відповідними рядками і стовпцями', () => {
    const matrix = new Matrix(2, 3);
    expect(matrix.rows).to.equal(2);
    expect(matrix.cols).to.equal(3);
  });

  it('тест на заповнення матриці нулями за замовчуванням', () => {
    const matrix = new Matrix(2, 2);
    expect(matrix.data).to.deep.equal([[0, 0], [0, 0]);
  });

  it('тест на додавання матриць', () => {
    const matrix1 = new Matrix([[1, 2], [3, 4]]);
    const matrix2 = new Matrix([[5, 6], [7, 8]]);
    const result = matrix1.add(matrix2);
    expect(result.data).to.deep.equal([[6, 8], [10, 12]]);
  });

  it('тест на знаходження транспонованої матриці', () => {
   const matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
   const transposedMatrix = matrix.transpose();
   expect(transposedMatrix.data).to.deep.equal([[1, 4], [2, 5], [3, 6]]);
 });

  it('тест на множення матриць', () => {
   const matrixA = new Matrix([[1, 2], [3, 4]]);
   const matrixB = new Matrix([[5, 6], [7, 8]]);
   const productMatrix = matrixA.multiply(matrixB);
   expect(productMatrix.data).to.deep.equal([[19, 22], [43, 50]]);
 });

  it('тест на знаходження рангу матриці', () => {
   const matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
   const rank = matrix.rank();
   expect(rank).to.equal(2);
 });
});
