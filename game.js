window.onload = function() {
    let n; // количество фишек на странице n = 100
    let countOfLetter = 0; // всего букв
    let panel; // панель инфо
    let hint;  //кол-во попыток
    let letter // буква, которую нужно удалить с поля (рандомно выводится на panel)
    let score = 0; // баллы
    let started = false; // игра начата?
    let found = 0; // найдено

    let masLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let masColors = ["red", "yellow", "blue", "green", "purple", "cyan", "grey", "brown", "pink", "orange", "#0f0", "#80f"];
    
    let btStart = document.getElementById("start");
    let cont = document.getElementById("container");

    btStart.onclick = function() {
        // если игра начата, то выйти из функции
        if (started === true){
            return;
        }

        found = 0;
        score = 0;
        countOfLetter = 0;
        document.getElementById('found').innerHTML = found;
        document.getElementById('all').innerHTML = countOfLetter;
        document.getElementById('score').innerHTML = score;
        cont.innerHTML = '';

        letter = masLetters[Math.floor(Math.random()*masLetters.length)];
        document.getElementById("letter").innerHTML = letter;  // задаётся рандомная буква из массива


        let b, x, y, bColor, red, green, blue, bLetterNumber, bLetter;
        let contRect = cont.getBoundingClientRect();

        for(n = 0; n < 100; n++){
            b = document.createElement("span");
            b.classList.add("b");

            x = Math.floor(Math.random() * (contRect.width - 50));
            y = Math.floor(Math.random() * (contRect.height - 40));
            b.style.left = contRect.left + x + "px";
            b.style.top = contRect.top + y + "px";

            //цвет фишки
            bColor = Math.floor(Math.random() * masColors.length);
            b.style.backgroundColor = masColors[bColor];

            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);

            b.style.backgroundColor = "rgba("+red+","+green+","+blue+",0.7)";

            //вывод случайной буквы из массива на фишку
            bLetterNumber = Math.floor(Math.random() * masLetters.length); // ключ буквы в массиве
            bLetter = masLetters[bLetterNumber]; // буква фишки
            if (bLetter === letter){
                countOfLetter++;
            }
            b.letter = bLetter;

            b.innerHTML = bLetter;

            b.onclick = function(){
                if (this.innerHTML === letter){
                    found++;
                    score++;
                    this.remove();
                } else {
                    score--;
                }
                document.getElementById('found').innerHTML = found;
                document.getElementById('score').innerHTML = score;

                if (found === countOfLetter){
                    cont.innerHTML = "<h1>Вы победили! Ваш счет: " + score + "</h1>";
                    started = false;
                }
            }

            cont.append(b);
        }

        document.getElementById('all').innerHTML = countOfLetter;
        
        started = true;
        
    } //btStart.onclick 
} // window.onload