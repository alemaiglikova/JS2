function create(label) {
    let result = "";
    for (let i = 0; i < label; i++) {
      for (let j = 0; j < label; j++) {
        if ((i + j) % 2 === 0) {
          result += " ";
        } else {
          result += "#";
        }
      }
      result += "\n";
    }
    return result;
  }
  