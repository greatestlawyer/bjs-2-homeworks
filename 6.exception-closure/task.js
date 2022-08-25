function parseCount(meaning) {
  let parsedOne = Number.parseInt(meaning);
   if (Number.isNaN(parsedOne)) {
    throw new Error("Невалидное значение");
  }
  return parsedOne;
}

function validateCount(value) {
  try { 
    return parseCount(value);
  } catch (error){
      return error;
    }
}