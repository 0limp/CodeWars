// Вам нужно написать функцию ( addOrChangeUrlParameter(url, keyValueParameter) ), которая может манипулировать параметрами URL.
// Она должна иметь возможность:
// - добавить параметр к существующему URL
// - изменить параметр, если он уже существует.

function addOrChangeUrlParameterXXX(url, param) {
    if (url.includes('?')) {
        const [name, value] = param.split('=');
        const [host, queryString] = url.split('?');
        const params = new URLSearchParams(queryString);

        if (params.has(name)) {
            params.set(name, value)
        } else {
            params.append(name, value)
        }
        return `${host}?${params.toString()}`
    }
    return `${url}?${param}`;
}

function addOrChangeUrlParameter(url, param) {
    const [updateName, updateValue] = param.split('=');

    if (updateName === undefined || updateValue === undefined) {
        return `${url}`;
    }

    if (url.includes('?')) {
        const [host, queryString] = url.split('?');
        const parameters = queryString.split('&');
        let isFound = false;

        const updatedParameters = parameters.map((parameter) => {
            let [name, value] = parameter.split('=');
            if (name === updateName) {
                isFound = true;
                return `${name}=${updateValue}`;
            }
            return `${name}=${value}`;
        });

        if (!isFound) {
            updatedParameters.push(`${updateName}=${updateValue}`);
        }

        return `${host}?${updatedParameters.join('&')}`;
    }
    return `${url}?${updateName}=${updateValue}`;
}

