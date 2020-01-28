const button = document.querySelector('.talk');
const content = document.querySelector('.content');

// This code adds the speech recognition function
// It also listens to the talking event that happens after the button is pressed
const greetings = ['I am good Sebastian, dont quit on becoming a Developer',
                   'As I said, I am fine',
                   'Dont make me come at you'
    ];

const weather = ['Weather is lovely but you need a life', 'It is too cold to leave the room']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Initialise Voice Over, you may proceed to use the microphone');
}

recognition.onresult = function(event) {
    const currentText = event.resultIndex;

    const transcript = event.results[currentText][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

// add the listener to the button 
button.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Sorry, I did not understand, can you repeat';

    // This statement is used to capture the condition for the message depending on the requirements
    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}