const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.email.value = formData.email;
    form.message.value = formData.message;
}

const saveToLocalStorage = event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

form.addEventListener('input', saveToLocalStorage);

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log('Submitted data:', formData);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
});

const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.setAttribute("placeholder", "Type area");
});

input.addEventListener("blur", () => {
    input.removeAttribute("placeholder");
});
