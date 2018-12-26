function decorateCoffee(target, key, descriptor) {

    const method = descriptor.value;

    descriptor.value = () => {
        let ret;
        ret = method.apply(target);
        console.log('咖啡是热的，还送咖啡杯。')
        return ret;
    }

    return descriptor;
}

class CoffeeShop {
    constructor(name) {
        this.name = name;
    }

    @decorateCoffee
    sell() {
        console.log('卖咖啡。');
    }
}

var cf = new CoffeeShop();
cf.sell();
