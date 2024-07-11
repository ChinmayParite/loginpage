/*
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});*/

/*typescript code for the same

const elements: HTMLElements = {
    signUpButton: document.getElementById('signUp'),
    signInButton: document.getElementById('signIn'),
    container: document.getElementById('container'),
};

if (elements.signUpButton && elements.signInButton && elements.container) {
    elements.signUpButton.addEventListener('click', () => {
        elements.container!.classList.add("right-panel-active");
    });

    elements.signInButton.addEventListener('click', () => {
        elements.container!.classList.remove("right-panel-active");
    });
}

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

/*typescript code for the same

const elements: HTMLElements = {
    signUpButton: document.getElementById('signUp'),
    signInButton: document.getElementById('signIn'),
    container: document.getElementById('container'),
};

if (elements.signUpButton && elements.signInButton && elements.container) {
    elements.signUpButton.addEventListener('click', () => {
        elements.container!.classList.add("right-panel-active");
    });

    elements.signInButton.addEventListener('click', () => {
        elements.container!.classList.remove("right-panel-active");
    });
}

*/
