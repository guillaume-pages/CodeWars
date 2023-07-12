// Kuy 4 Strip comments

// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
    let lines = input.split('\n');
  
    for (var i = 0; i < lines.length; i++) {
      let line = lines[i];
  
      for (let j = 0; j < markers.length; j++) {
        let marker = markers[j];
        let index = line.indexOf(marker);
  
        if (index !== -1) {
          line = line.substring(0, index);
        }
      }
      line = line.trim();
      lines[i] = line;
    }
    let result = lines.join('\n');
  
    return result;
  }