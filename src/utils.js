
/*---- Function to check whether received file is audio or not ----*/
export const isAudio = (file) => {
    const supportedTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/flac'];
    return supportedTypes.includes(file.type);
}

/*---- Function to convert bytes to megabytes ----*/
export const convertToMB = (size) => {
    return ((size / (1024 * 1024)).toFixed(2)) +" MB";
}

/*---- Function to convert JSON structure to 2DArray ----*/
//For using in Table component
export const JSONTo2DArray = (json) => {
    let array = [], arrayItem = [];

    json.forEach(obj => {
        Object.keys(obj).forEach(key => arrayItem.includes(key) || arrayItem.push(key))
            let thisRow = new Array(arrayItem.length);
            arrayItem.forEach((col, i) => thisRow[i] = obj[col] || '')
            array.push(thisRow);
    });

    array.unshift(arrayItem);
    return array;
}