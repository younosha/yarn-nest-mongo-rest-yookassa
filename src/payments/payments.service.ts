import { Injectable } from "@nestjs/common";
import * as YooKassa from 'yookassa';
import { OrderDto } from "./dto/order.dto";

@Injectable()
export class PaymentsService {
  
  async createPayment(orderDto: OrderDto) {
    const yooKassa = new YooKassa({
      shopId: process.env.YOOKASSA_SHOP_ID,
      secretKey: process.env.YOOKASSA_SECRET_KEY
    });

    const payment = await yooKassa.createPayment({
      amount: {
        value: orderDto.price, // Формат: "100.00"
        currency: "RUB"
      },
      payment_method_data: {
        type: "bank_card"
      },
      confirmation: {
        type: "redirect",
        return_url: "http://localhost:3000"
      },
      description: orderDto.description
    });

    return payment;
  }
}