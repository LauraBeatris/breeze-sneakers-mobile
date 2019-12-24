export function formatMoney(number) {
    const price = number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return `$${price}`;
}
