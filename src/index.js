module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  for (let i = 0; i < matrix.length;i++){
    if (i % 2 === 0) matrix[i] = matrix[i].sort((a, b) => a - b);
    else matrix[i] = matrix[i].sort((a, b) => b - a)
  }
  return matrix.flat();
}
