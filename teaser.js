let a = prompt('Напиши свое имя');
let randomBodyParts = ['глаз', 'нос', 'череп', 'ухо'];
let randomAdjectives = ['вонючая', 'унылая', 'дурацкая', 'дебильная'];
let randomWords = ['муха', 'выдра', 'дубина', 'мартышка', 'крыса'];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];
let randomInsult = a + ' у тебя ' + randomBodyPart + ' словно ' + randomAdjective +
    ' ' + randomWord + '!!!';
//document.innerHTML(randomInsult);
//alert(a);
//console.log(randomInsult);
document.write(randomInsult);