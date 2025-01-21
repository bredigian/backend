import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Producto } from '@prisma/client';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.producto.findMany();
  }

  async addProducto(data: Producto) {
    return await this.prisma.producto.create({ data });
  }
}
