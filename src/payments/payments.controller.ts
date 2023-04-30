import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { OrderDto } from './dto/order.dto';

@Controller('payments')
export class PaymentsController {

  constructor(private readonly paymentsService: PaymentsService) {
  }

  @Post()
  createPayment(@Body() orderDto: OrderDto) {
    return this.paymentsService.createPayment(orderDto)
  }

}
