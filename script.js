document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('CognifyzForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const contact = document.getElementById('contact');
        const city = document.getElementById('city');
        const gender = document.getElementById('gender');
        const applyingfor = document.getElementById('applyingfor');

        let hasError = false;

        if (!validateName(name.value.trim())) {
            showError(name, 'Name is required');
            hasError = true;
        }

        if (!validateEmail(email.value.trim())) {
            showError(email, 'Email is not valid');
            hasError = true;
        }

        if (!validateContact(contact.value.trim())) {
            showError(contact, 'Contact must be 10 characters');
            hasError = true;
        }

        if (!validateCity(city.value.trim())) {
            showError(city, 'Enter your city name');
            hasError = true;
        }

        if (!validateGender(gender.value.trim())) {
            showError(gender, 'Select gender');
            hasError = true;
        }

        if (!validateApplyingrole(applyingfor.value.trim())) {
            showError(applyingfor, 'Select applying role');
            hasError = true;
        }

        if (hasError) {
            return false;
        }

        form.submit();
    });

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const errorDiv = input.nextElementSibling;
            errorDiv.innerText = '';
            errorDiv.style.display = 'none';
        });
    });

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
    }

    function validateName(name) {
        return name !== '';
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateContact(contact) {
        return contact.length === 10;
    }

    function validateCity(city) {
        return city !== '';
    }

    function validateGender(gender) {
        return gender !== '';
    }

    function validateApplyingrole(applyingfor) {
        return applyingfor !== '';
    }
});
