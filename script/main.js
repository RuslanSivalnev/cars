window.onload = () => {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', wrapper);

    let flagForReload = true;

    //обертка для addEventListener
    function wrapper() {
        let inputValue = document.querySelector('.inputValue').value;
        let allLine = document.querySelectorAll('.line');

        if (inputValue > 0 && flagForReload) {
            doCount(inputValue)
        } else if (inputValue > 0 && flagForReload == false && inputValue != allLine.length) {
            for (let i = 0; i < allLine.length; i++) {
                allLine[i].remove();
            }

            if (document.querySelector('.finish')) {
                document.querySelector('.finish').remove();
            }

            doCount(inputValue)
        }
    }

    let way = 100;

    function doCount(value) {
        let maxLength = document.querySelector('.maxLength')
        let amountCar = document.querySelector('.amountCar')
        let refueling = document.querySelector('.refueling')
        let NumberOfRefueling = value - 1;

        for (let i = value; i > 1; i--) {
            let x = 100;
            let j = x / i;
            way += j;
        }

        flagForReload = false;

        // присвоение значений
        maxLength.innerText = `MaxLength: ${Math.floor(way)}`;
        amountCar.innerText = `AmountCar: ${value}`;
        refueling.innerText = `Refueling: ${NumberOfRefueling}`;

        way = 100;

        //вызов createCar || add class
        if (value <= 10) {
            if (document.querySelector('.way.cars')) {
                document.querySelector('.way.cars').className = 'way';
            }
            createCar(NumberOfRefueling, value);

        } else if (value > 10) {
            if (document.querySelector('.way')) {
                document.querySelector('.way').className = 'way cars';
            }
        }
    }


    function createCar(valueLine, valueCar) {
        let flag = 0;

        //элемент line
        for (let i = 0; i < valueLine + 1; i++) {
            let line = document.createElement('div');
            line.className = `line ${flag} `;
            document.querySelector('.way').appendChild(line)

            //элемент car
            for (let k = valueCar; k > 0; k--) {
                let car = document.createElement('div');
                car.className = 'car';
                let parent = document.querySelectorAll('.line')
                parent[flag].appendChild(car)
            }

            valueCar--;
            flag++

        }

        //элемент finish
        let finish = document.createElement('div');
        finish.className = 'finish';
        finish.innerText = 'FINISH';
        document.querySelector('.way').appendChild(finish)
    }
}