const getRootCssVariableValue = (cssVar) => {
    let cssVarValue = getComputedStyle(document.documentElement)
        .getPropertyValue(cssVar);
        console.log("cssVar: ", cssVar, " ","cssVarValue: ", cssVarValue);
    return cssVarValue;
}

export default getRootCssVariableValue;