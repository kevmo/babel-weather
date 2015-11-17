const cities = [{name:'London', weather:'gorge'},
                {name: 'DC', weather: 'ugly'},
                {name: 'Nashville', weather: 'beautiful'}];

class City {
    constructor(name, weather){
        this.name = name;
        this.weather = weather;
    }

    getReport() {
        return `The weather in ${this.name} is ${this.weather}`;
    }
}

for (let city of cities) {
    let cityObj = new City(city.name, city.weather);
    console.log(cityObj.getReport())
}

const kevmo = {name: 'kevin moore', age: 31, hair: 'sort of'};

const {age, name} = kevmo;

console.log(`${name} is ${age}`);
