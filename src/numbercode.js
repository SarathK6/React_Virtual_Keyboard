
    if (Number(e.target.innerText) >= 0 && Number(e.target.innerText) <= 9) {
      var formeddigits = [];
      while (numbers.length > 0) {
        var singledigit = numbers[Math.floor(Math.random() * numbers.length)];

        formeddigits.push(singledigit);
        var index = numbers.indexOf(singledigit);
        numbers.splice(index, 1);
      }
      setdigits(formeddigits);
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];