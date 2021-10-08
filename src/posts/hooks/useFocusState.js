const useFocusState = (initVal = null) => {
  const [focus, setFocus] = useState(initVal);
  useEffect( () => {
    if (focus) {
      let el = document.querySelector(`#${focus}`);
      if (el) el.focus();
    }
    setFocus("");
  }, [focus]);
  return [focus, setFocus]; 
};

export default useFocusState;