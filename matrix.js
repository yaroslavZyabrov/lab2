class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = this.createMatrix(rows, cols);
  }

  createMatrix(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
  }

  add(otherMatrix) {
    if (this.rows !== otherMatrix.rows || this.cols !== otherMatrix.cols) {
      throw new Error("Матриці мають різну розмірність");
    }

    const resultMatrix = new Matrix(this.rows, this.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        resultMatrix.data[i][j] = this.data[i][j] + otherMatrix.data[i][j];
      }
    }

    return resultMatrix;
  }

  transpose() {
    const transposedMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        transposedMatrix.data[j][i] = this.data[i][j];
      }
    }

    return transposedMatrix;
  }

  multiply(otherMatrix) {
    if (this.cols !== otherMatrix.rows) {
      throw new Error("Кількість стовпців першої матриці повинна дорівнювати кількості рядків другої матриці");
    }

    const result = new Matrix(this.rows, otherMatrix.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < otherMatrix.cols; j++) {
        let sum = 0;
        for (let k = 0; k < this.cols; k++) {
          sum += this.data[i][k] * otherMatrix.data[k][j];
        }
        result.data[i][j] = sum;
      }
    }

    return result;
  }

  getRank() {
    const augmentedMatrix = new Matrix(this.rows, this.cols + 1);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        augmentedMatrix.data[i][j] = this.data[i][j];
      }
      augmentedMatrix.data[i][this.cols] = 0;
    }

    let rank = 0;

    for (let i = 0; i < this.rows; i++) {
      let nonZeroRow = -1;

      for (let j = 0; j < this.cols; j++) {
        if (augmentedMatrix.data[i][j] !== 0) {
          nonZeroRow = i;
          break;
        }
      }

      if (nonZeroRow !== -1) {
        rank++;

        for (let j = nonZeroRow + 1; j < this.rows; j++) {
          const scale = augmentedMatrix.data[j][i] / augmentedMatrix.data[nonZeroRow][i];

          for (let k = i; k <= this.cols; k++) {
            augmentedMatrix.data[j][k] -= scale * augmentedMatrix.data[nonZeroRow][k];
          }
        }
      }
    }

    return rank;
  }
}
