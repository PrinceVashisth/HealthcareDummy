const Heading = document.querySelector('.heading__tips h2');
let Lines = [
            " “I believe health care is a civil right ” ",
            " “Like education, healthcare also needs to be given importance ” ",
            " “We need a cost-effective, high-quality health care system, guaranteeing health care to all of our people as a right” ",
            " “My whole professional life has been dedicated to improving access, affordability, quality and choice of health care” ",
            " “Experience taught me that working families are often just one pay check away from economic disaster. And it showed me first-hand the importance of every family having access to good health care” ",
            " “It’s a real niche we’ve made for ourselves. The healthcare industry really stresses an importance on quick, accurate communication between doctors, nurses and patients. That’s a need we try to address” ",
            " “A man too busy to take care of his health is like a mechanic too busy to take care of his tools” ",
            " “Take care of your health, that it may serve you to serve God” ",
            " “Take care of your body. It’s the only place you have to live” ",
            " “Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted” ",
            " “Remember to take care of yourself, you can’t pour from an empty cup” ",
            " “Treat your body like it belongs to someone you love” ",
            " “Taking care of your mental and physical health is just as important as any career move or responsibility” ",
            " “My whole professional life has been dedicated to improving access, affordability, quality and choice of health care” ",
            " “The closest thing to being cared for is to care for someone else” ",
            " “The character of the nurse is as important as the knowledge she posses” ",
            " “The closest thing to being cared for is to care for someone else” ",
            " “It is not how much you do, but how much love you put in the doing” "
            ];
            setInterval(() => {
                Heading.textContent = Lines[Math.floor(Math.random()*18)];                
            }, 3000);
