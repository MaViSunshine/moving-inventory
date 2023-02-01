export function isStringEmpty(string: string){
    const splitted: string[] = string.split('')
    return splitted.every(char => char === '')
}