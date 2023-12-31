// # =============================================================================================================================================
// После тяжелого квартала в офисе вы решаете немного отдохнуть в отпуске. Итак, вы забронируете рейс для себя и своей девушки
// и постараетесь оставить позади весь этот беспорядок. Вам понадобится арендованный автомобиль, чтобы передвигаться во время отпуска.
// Менеджер по прокату автомобилей делает вам несколько выгодных предложений. Каждый день аренды автомобиля стоит 40 долларов. Если вы
// арендуете автомобиль на 7 и более дней, вы получите скидку 50 долларов США. Альтернативно, если вы арендуете автомобиль на 3 или более
// дней, вы получите скидку 20 долларов США. Напишите код, который выдает общую сумму за разные дни(d).
const rentalCarCost = d => {
    return (d >= 7) ? (d * 40) - 50 : (d >= 3) ? (d * 40) - 20 : d * 40;
}