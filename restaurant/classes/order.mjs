import { Food } from './food';

export const Order = class Order extends Food
{
    constructor(name, size, quantity)
    {
        super(name);
        this.size = size;
        this.quantity = quantity;
    }
}