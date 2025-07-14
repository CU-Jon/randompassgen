$(document).ready(function() {
    $('#final_pass').val('Your new password will appear here.');
    
    // Set current year in footer
    $('#currentYear').text(new Date().getFullYear());
    
    // Load saved settings from localStorage
    loadSettings();
    
    // Generate initial password
    roll_password();
});

function word_list(password) {
	 var list = ["apple", "bestbuy", "coffee", "drip", "egg", "fruit", "golf", "hulu", "iphone", "jack", "korean", "laptop", "music", "nut", "omelet", "park", "queen", "rope", "skype", "tokyo", "usa", "visa", "walmart", "xbox", "yelp", "zip"];


	if (document.getElementById("NATO").checked) {
         list = ["alfa","bravo","charlie","delta","echo","foxtrot","golf","hotel","india","juliett","kilo","lima","mike","november","oscar","papa","quebec","romeo","sierra","tango","uniform","victor","whiskey","x-ray","yankee","zulu"];

    }

    var out = "";
    for (var b = 0; b < password.length; b++) {
        var letter = password.charCodeAt(b);
        if (65 <= letter && letter <= 90) {
            letter -= 65;
            out += list[letter].toUpperCase()
        } else {
            if (97 <= letter && letter <= 122) {
                letter -= 97;
                out += list[letter]
            } else {
                out += password.substring(b, b + 1)
            }
        }
        out += " "
    }
    return out
}

function add_random(input, limit, output) {
    var d = Math.floor(Math.random() * input.length);
    var c = Math.floor(Math.random() * limit);
    var e = output.substring(0, c) + input.substring(d, d + 1) + output.substring(c, limit);
    output = e;
    return output
}
function make_password(pwlen, nosim, inclower, incupper, incnumbers, incsymbol, noamb) {
    var lower_letters = "abcdefghjkmnpqrstuvwxyz";
    var upper_letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var numbers = "23456789";
    var symbols = "!#$%&*+-=?@^_";
    if (!nosim) {
        lower_letters += "ilo";
        upper_letters += "IO";
        numbers += "01";
        symbols += "|"
    }
    var letter_list = "";
    var password_length = 0;
    if (!noamb) {
        symbols += "{}[]()\/'\"`~,;:.<>\\";
    }
    if (inclower == 1) {
        letter_list += lower_letters;
        password_length++
    }
    if (incupper == 1) {
        letter_list += upper_letters;
        password_length++
    }
    if (incnumbers == 1) {
        letter_list += numbers;
        password_length++
    }
    if (incsymbol == 1) {
        letter_list += symbols;
        password_length++
    }
    if (password_length == 0) {
        out = "You must select at least one character set!";
        return out
    }
    var list_len = letter_list.length;
    var limit = pwlen - password_length;
    var out = "";
    for (var e = 0; e < limit; e++) {
        var randomsymbol = Math.floor(Math.random() * list_len);
        out += letter_list.substring(randomsymbol, randomsymbol + 1)
    }
    if (incupper) {
        out = add_random(upper_letters, limit, out);
        limit++
    }
    if (inclower) {
        out = add_random(lower_letters, limit, out);
        limit++
    }
    if (incnumbers) {
        out = add_random(numbers, limit, out);
        limit++
    }
    if (incsymbol) {
        out = add_random(symbols, limit, out)
    }
    return out
}

function roll_password() {
    var pwlen = document.getElementById("pwlen").value;
    var nosim = 0;
    if (document.getElementById("Nosimilar").checked) {
        nosim = 1
    }
    var incsymbol = 0;
    if (document.getElementById("Symbols").checked) {
        incsymbol = 1
    }
    var noamb = 0;
    if (document.getElementById("NoAmb").checked) {
        noamb = 1
    }
    var inclower = 0;
    if (document.getElementById("Lowercase").checked) {
        inclower = 1
    }
    var auto_select = 0;
    if (document.getElementById("AutoSelect").checked) {
        auto_select = 1
    }
    var incupper = 0;
    if (document.getElementById("Uppercase").checked) {
        incupper = 1
    }
    var incnumbers = 0;
    if (document.getElementById("Numbers").checked) {
        incnumbers = 1
    }
    
    var password = make_password(pwlen, nosim, inclower, incupper, incnumbers, incsymbol, noamb);
    var phonetic = word_list(password);
    document.getElementById("final_pass").value = password;
    if (pwlen > 50) phonetic = "";
    document.getElementById("PhoneticPronunciation").innerHTML = phonetic;
    
    // Update password strength indicator
    updatePasswordStrength(password, pwlen, inclower, incupper, incnumbers, incsymbol);
    
    if (auto_select){
        $("#final_pass").select();
    }
}

function updatePasswordStrength(password, length, hasLower, hasUpper, hasNumbers, hasSymbols) {
    const strengthIndicator = document.getElementById('passwordStrength');
    if (!strengthIndicator) return;
    
    let score = 0;
    let feedback = [];
    
    // Length scoring
    if (length >= 12) score += 2;
    else if (length >= 8) score += 1;
    else feedback.push('Use at least 8 characters');
    
    // Character variety scoring
    if (hasLower) score += 1;
    else feedback.push('Add lowercase letters');
    
    if (hasUpper) score += 1;
    else feedback.push('Add uppercase letters');
    
    if (hasNumbers) score += 1;
    else feedback.push('Add numbers');
    
    if (hasSymbols) score += 1;
    else feedback.push('Add symbols');
    
    // Determine strength level
    let strength, className, color;
    if (score >= 6) {
        strength = 'Very Strong';
        className = 'very-strong';
        color = '#28a745';
    } else if (score >= 4) {
        strength = 'Strong';
        className = 'strong';
        color = '#28a745';
    } else if (score >= 3) {
        strength = 'Medium';
        className = 'medium';
        color = '#ffc107';
    } else {
        strength = 'Weak';
        className = 'weak';
        color = '#dc3545';
    }
    
    strengthIndicator.textContent = `Password Strength: ${strength}`;
    strengthIndicator.className = `password-strength ${className}`;
    strengthIndicator.style.color = color;
}


function loadSettings() {
    const settings = ['Symbols', 'Lowercase', 'Uppercase', 'Numbers', 'Nosimilar', 'NoAmb', 'NATO', 'AutoSelect', 'SaveSettings'];
    
    // Check if SaveSettings is enabled
    const saveSettings = localStorage.getItem('SaveSettings');
    if (saveSettings === 'true') {
        document.getElementById('SaveSettings').checked = true;
        
        // Load all other settings
        settings.forEach(setting => {
            const value = localStorage.getItem(setting);
            if (value !== null) {
                const element = document.getElementById(setting);
                if (element) {
                    element.checked = value === 'true';
                }
            }
        });
        
        // Load password length
        const pwlen = localStorage.getItem('pwlen');
        if (pwlen) {
            document.getElementById('pwlen').value = pwlen;
        }
    }
}

function saveSettings(isTogglingSaveSettings) {
    const isChecked = document.getElementById("SaveSettings").checked;
    
    if (isChecked) {
        // Save all settings to localStorage
        const settings = ['Symbols', 'Lowercase', 'Uppercase', 'Numbers', 'Nosimilar', 'NoAmb', 'NATO', 'AutoSelect', 'SaveSettings'];
        
        settings.forEach(setting => {
            const element = document.getElementById(setting);
            if (element) {
                localStorage.setItem(setting, element.checked);
            }
        });
        
        // Save password length
        const pwlen = document.getElementById("pwlen").value;
        localStorage.setItem('pwlen', pwlen);
    } else {
        if (isTogglingSaveSettings) {
            // Clear all saved settings
            localStorage.clear();
        }
    }
}

function copyText() {
    const passwordField = document.getElementById('final_pass');
    
    // Use modern Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            showCopyFeedback();
        }).catch(err => {
            // Fallback to old method
            fallbackCopyText(passwordField);
        });
    } else {
        // Fallback for older browsers or non-HTTPS
        fallbackCopyText(passwordField);
    }
}

function fallbackCopyText(passwordField) {
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    try {
        document.execCommand('copy');
        showCopyFeedback();
    } catch (err) {
        console.error('Failed to copy password:', err);
        alert('Failed to copy password. Please select and copy manually.');
    }
}

function showCopyFeedback() {
    const copyBtn = document.querySelector('.CopyBtn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.classList.add('btn-success');
    copyBtn.classList.remove('btn-secondary');
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.add('btn-secondary');
        copyBtn.classList.remove('btn-success');
    }, 2000);
}

function select_text(element_id) {
    const element = document.getElementById(element_id);
    element.select();
    element.setSelectionRange(0, 99999); // For mobile devices
}

// Add keyboard shortcuts and accessibility improvements
document.addEventListener('keydown', function(event) {
    // Generate password with Ctrl+Enter or Cmd+Enter
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        roll_password();
    }
    
    // Copy password with Ctrl+C when password field is focused
    if ((event.ctrlKey || event.metaKey) && event.key === 'c' && 
        document.activeElement === document.getElementById('final_pass')) {
        event.preventDefault();
        copyText();
    }
    
    // Generate new password with spacebar when generate button is focused
    if (event.key === ' ' && document.activeElement.classList.contains('GenerateBtn')) {
        event.preventDefault();
        roll_password();
    }
});

// Add accessibility attributes
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels and descriptions
    const generateBtn = document.querySelector('.GenerateBtn');
    generateBtn.setAttribute('aria-describedby', 'generate-help');
    generateBtn.insertAdjacentHTML('afterend', 
        '<small id="generate-help" class="sr-only">Press Ctrl+Enter to generate a new password</small>'
    );
    
    const passwordField = document.getElementById('final_pass');
    passwordField.setAttribute('aria-describedby', 'password-help');
    passwordField.insertAdjacentHTML('afterend', 
        '<small id="password-help" class="sr-only">Generated password. Press Ctrl+C to copy.</small>'
    );
    
    // Improve form accessibility
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.setAttribute('role', 'checkbox');
        checkbox.setAttribute('aria-checked', checkbox.checked);
        
        checkbox.addEventListener('change', function() {
            this.setAttribute('aria-checked', this.checked);
        });
    });
});


