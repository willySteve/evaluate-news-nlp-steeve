const { checkForName } = require('./nameChecker');
const error = document.getElementById('error');
const polarity = document.getElementById('polarity');
const polConfidence = document.getElementById('pol-confidence');
const subjectivity = document.getElementById('subjectivity');
const subConfidence = document.getElementById('sub-confidence');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if (Client.checkForName(formText)) {
        error.style.visibility = 'hidden';

        polarity.innerHTML = "";
        polConfidence.innerHTML = "";
        subjectivity.innerHTML = "";
        subConfidence.innerHTML = "";

        // Call post data
        postData(formText)
            .then(function(data) {
                // Update Webpage 
                polarity.innerHTML = `Polarity: ${data.polarity}`;
                polConfidence.innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
                subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
                subConfidence.innerHTML = `Subjectivity Confidence: ${data.subjectivity_confidence}`;
            })
    }
}

const postData = async(url = '') => {

    const response = await fetch('http://localhost:8080/article', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url": url }), // body data type must match "Content-Type" header        
    });

    try {
        const newData = await response.json();

        return newData
    } catch (error) {
        console.log("error", error);
    }
}


export { handleSubmit }
