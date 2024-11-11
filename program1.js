const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS and mark all connected 'L' cells
  const dfs = (r, c) => {
    // Base case: if out of bounds or at water, return
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the cell as visited by setting it to 'W'
    grid[r][c] = 'W';

    // Explore the neighboring cells
    dfs(r + 1, c); 
    dfs(r - 1, c); 
    dfs(r, c + 1); 
    dfs(r, c - 1); 
  };
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L') {
      
        islandCount++; 
        dfs(r, c); 
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
