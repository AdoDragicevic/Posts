export const isValidEmail = val => {
    const atLocation = val.lastIndexOf("@");
    const dotLocation = val.lastIndexOf("."); 
    return (
        atLocation > 0 &&
        dotLocation > atLocation + 1 &&
        dotLocation < val.length - 1
    );
};

export const validation = (page, inputVals, setFocusedInput, setNotification) => {
    const { title, author, email, description, img } = inputVals;
    if (page === 0) {
      if (!title) setFocusedInput("title");
      else if (!author) setFocusedInput("author");
      else if (!email) setFocusedInput("email");
      else if (!isValidEmail(email)) {
        setFocusedInput("email");
        setNotification({ isSuccess: false, txt: "Invalid email" });
      } 
      else return true;
    }
    else if (page === 1) return img.url;
    else if (page === 2) {
      setFocusedInput("description");
      return description;
    }
  };