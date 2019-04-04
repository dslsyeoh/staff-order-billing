import { multiply } from "./calculatorUtils";
import { food_price } from "./../data/food_price";
import { Order } from "./../classes/order";

let receipts = [];
let orders = [];

const place_order = (name, size, quantity) => orders.push(new Order(name, size, quantity));

const submit_orders = (table_number) => {
   
    const table = { [`table_${table_number}`] : orders };
    receipts.push(table);
    orders = []; // reset
}

const get_table_receipt = (table) => {

    for(let i = 0; i < receipts.length; i++)
    {
        if(receipts[i].hasOwnProperty(table)) return receipts[i][table];
    }
}

const get_receipt_items = (orders) => orders.map(({name, size, quantity}) => `${size} ${name} x${quantity} $${multiply(price_lookup(`${name}_${size}`), quantity)}`);

const price_lookup = (food) => food_price.get(food);

const print_receipt = (table_number) => 
{
    const property = `table_${table_number}`;
    if(is_receipt_exist(property)) return `No receipt for table ${table_number}`;
    const table_receipt = get_table_receipt(property);
    const receipt_items = get_receipt_items(table_receipt);
    const total_amount = get_total_amount(table_receipt);
    return generate_receipt(receipt_items, total_amount);
}

const generate_receipt = (receipt_items, total_amount = 0) =>
{
    let receipt = ``;
    
    for(let i = 0; i < receipt_items.length; i++)
    {
        receipt += `${receipt_items[i]}\n`;
    }
   
    receipt += `Total: $${total_amount}`;

    return receipt;
}

const is_receipt_exist = (table) => {

    for(let i = 0; i < receipts.length; i++)
    {
        for(let key in receipts[i]) 
        {   
            if(key === table) return false; 
        }
    }
    return true;
}

const get_total_amount = (orders) => orders.reduce((accumulator, {name, size, quantity}) => accumulator + (multiply(price_lookup(name.concat("_", size)), quantity)), 0);

export { place_order, submit_orders, print_receipt };

