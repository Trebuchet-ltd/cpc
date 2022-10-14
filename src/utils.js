
/*---- Function to check whether received file is audio or not ----*/
export const isAudio = (file) => {
    const supportedTypes = ['audio/mp3', 'audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/aac', 'audio/flac'];
    return supportedTypes.includes(file.type);
}
