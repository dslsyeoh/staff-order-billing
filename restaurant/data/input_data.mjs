const table_1 = [["burger", "large", 2], ["sandwich", "regular", 1]];
const table_2 = [["burger", "large", 2], ["sandwich", "regular", 2], ["sandwich", "large", 1], ["coca-cola", "regular",  1], ["coca-cola", "large",  2]];
const table_3 = [["burger", "regular", 2], ["sandwich", "regular", 1], ["coca-cola", "large",  2]];
const table_4 = [["burger", "large", 2],  ["coca-cola", "large",  1]];
const table_5 = [["sandwich", "large", 1],  ["coca-cola", "large",  1]];
const table_6 = [["burger", "large", 1], ["sandwich", "large", 1], ["coca-cola", "large",  2]];

export const order_map = new Map();
order_map.set(1, table_1);
order_map.set(2, table_2);
order_map.set(3, table_3);
order_map.set(4, table_4);
order_map.set(5, table_5);
order_map.set(6, table_6);
