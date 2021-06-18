const sensor1 = new Sensor('1001', 'humidity');
const sensor2 = new Sensor('1002', 'humidity');
const sensorsArr = [sensor1, sensor2];

const sprinkler1 = new Sprinkler('001', 220, 80, sensorsArr);
const sprinkler2 = new Sprinkler('002', 220, 80, sensorsArr);
const sprinklersArr = [sprinkler1, sprinkler2];

const mainField = new Field('1', 100, 200, sprinklersArr);
const reserveField = new ReserveField('21', 80, 180, sprinklersArr, 'grass');
const headGardener = new Gardener('Bob', 'staff', '100', mainField);
const sunSensor = new Sensor('1000', 'sun');
const additionalSprinkler = new Sprinkler('010', 220, 80, sensorsArr);

console.log(mainField);
console.log(reserveField);
console.log(headGardener);
console.log(sunSensor);
console.log(additionalSprinkler);

headGardener.onWatering(true);
mainField.addSprinkler(additionalSprinkler);

mainField.getSquareAsync((square: number) => {
    console.log(`Main Field square: ${square}`);
    reserveField.getSquareAsync((square: number) => {
        console.log(`Reserve field square: ${square}`);
    })
});
    
async function asyncSquare(): Promise<void> {
    console.log(`Async avait started`);
    const result: number = await mainField.getSquareByPromise();
    console.log(`Async await result: ${result}`);
}

asyncSquare();

