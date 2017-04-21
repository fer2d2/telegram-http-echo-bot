function objectToFormattedText(object) {
    let message = '';
    for (let property in object) {
        message += `${property}: ${object[property]}\n`;
    }

    return message;
}

function arrayOfStringToMultipleLines(collection) {
    let message = '';

    collection.forEach((element) => {
        message += `${element}\n`;
    });

    return message;
}

module.exports.objectToFormattedText = objectToFormattedText;
module.exports.arrayOfStringToMultipleLines = arrayOfStringToMultipleLines;