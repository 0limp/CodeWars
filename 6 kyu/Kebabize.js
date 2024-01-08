// Измените функцию так, чтобы она преобразовывала строку регистра верблюда в регистр кебаба.

function kebabize(str) {
    return str.replace(/\B[A-Z]/g, '-$&').replace(/\d/g, '').toLowerCase()
}


console.log(kebabize("camelsHaveThreeHumps"));                      // ==>      "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps"));                          // ==>      "camels-have-humps"
console.log(kebabize("CAMEL"));                                     // ==>      "c-a-m-e-l"

console.log(kebabize("MyCamelHas3Humps"));                          // ==>      "my-camel-has3-humps"
console.log(kebabize("AbstractSingletonProxyFactoryBean"));         // ==>      'abstract-singleton-proxy-factory-bean'




