
/*---- Function to check whether received file is audio or not ----*/
export const isAudio = (file) => {
    const supportedTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/flac'];
    return supportedTypes.includes(file.type);
}

/*---- Function to convert bytes to megabytes ----*/
export const convertToMB = (size) => {
    return ((size / (1024 * 1024)).toFixed(2)) + " " +"MB";
}