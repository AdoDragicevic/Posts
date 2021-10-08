export const isValidEmail = val => {
    const atLocation = val.lastIndexOf("@");
    const dotLocation = val.lastIndexOf("."); 
    return (
        atLocation > 0 &&
        dotLocation > atLocation + 1 &&
        dotLocation < val.length - 1
    );
};

export const validation = (page, inputVals, setFocusedInput) => {
    const { title, author, address, description, img } = inputVals;
    if (page === 0) {
      if (!title) setFocusedInput("title");
      else if (!author) setFocusedInput("author");
      else if ( !isValidEmail(address) ) setFocusedInput("address");
      else return true;
    }
    else if (page === 1) return img.url;
    else if (page === 2) {
      setFocusedInput("description");
      return description;
    }
  };