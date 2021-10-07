export const isValidEmail = val => {
    const atLocation = val.lastIndexOf("@");
    const dotLocation = val.lastIndexOf("."); 
    return (
        atLocation > 0 &&
        dotLocation > atLocation + 1 &&
        dotLocation < val.length - 1
    );
};