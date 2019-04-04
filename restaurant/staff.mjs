import { place_order, submit_orders, print_receipt } from "./utils/restaurantUtils";
import { order_map } from "./data/input_data";

for(let i = 1; i <= 6; i++)
{
    order_map.get(i).forEach(([name, size, quantity]) => place_order(name, size, quantity));
    submit_orders(i);
}

for(let i = 1; i <= 6; i++)
{
    const receipt_items = print_receipt(i);
    console.log(`Table ${i}`);
    console.log(receipt_items, "\n");
}