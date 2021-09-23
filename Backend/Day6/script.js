console.log(
    "1. Write a JavaScript function to check whether an `input` is an array or not"
  );
  
  const is_array = (data) => {
    return Array.isArray(data);
  };
  
  console.log(is_array("w3resource"));
  console.log(is_array([1, 2, 4, 0]));
  
  console.log("2. Write a JavaScript function to clone an array");
  
  const array_Clone = (data) => {
    return data.slice(data);
  };
  
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));
  
  console.log(
    "3. Write a JavaScript function to get the first element of an array."
  );
  
  const first = (arr, num) => {
  
      return arr[0];
   
  };
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));
  
  
  console.log(
    "4. Write a simple JavaScript program to join all elements of the following array into a string."
  );
  
  let myColor = ["Red", "Green", "White", "Black"];
  console.log(myColor.join(","));
  console.log(myColor.join("+"));
  
  
  console.log(
    "5. Write a JavaScript program to find the most frequent item of an array"
  );
  
  let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  let high = 0,
    item,
    count;
  
  for (var i = 0; i < arr1.length; i++) {
    count = 0;
    for (var j = i; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        count++;
      }
      if (count > high) {
        high = count;
        item = arr1[i];
      }
    }
  }
  
  console.log(item, "(", high, "times )");