import NumericStream from "./NumericStream.ts";

/*
  NumericStream это класс, который раз в секунду генерирует событие с новым следующим числом
*/

/*
Для работы с классом NumericStream создайте экземпляр класса:
*/
const stream = new NumericStream();
/*
Установите необходимые callback'и
*/
stream.setDataHandler((nextNumber) => {
  console.log('Next number: ', nextNumber);
});

stream.setErrorHandler((error) => {
  console.error(error);
});

stream.setEndHandler(() => {
  console.log('Strem ended!');
});

/*
И запустите поток
*/
stream.start();


/*
В результате вы увидите в консоли вывод чисел от 1 до 10 с интервалом в секунду:
Next number: 1
Next number: 2
Next number: 3
Next number: 4
Next number: 5
Next number: 6
Next number: 7
Next number: 8
Next number: 9
Next number: 10
Strem ended!
*/
