// У нас есть сломанная машина сообщений, которая вносит шум в наши входящие сообщения. Мы знаем, что наши сообщения нельзя писать с 
// использованием %$&/#·@|º\ª и белых символов (например, пробелов или табуляции). К сожалению, наша машина создает шум, а это означает,
// что наше сообщение приходит с такими символами, как: %$&/#·@|º\ª в исходном сообщении.

// Ваша задача — написать функцию, которая уберет этот шум из сообщения.
// Обратите внимание, что шумом могут быть только %$&/#·@|º\ª символы, другие символы не считаются шумом

function removeNoise(str) {
    return str.replace(/[%$&/#·@\|º\\ª]/g, '')
}