function createO(Arrays) {
    const result = {};
    for (const [key, value] of Arrays) {
      result[key] = value;
    }
    return result;
  }