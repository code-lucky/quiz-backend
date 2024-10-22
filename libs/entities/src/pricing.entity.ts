import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity('pricing')
export class Pricing extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        comment: '名称'
    })
    name: string;

    @Column({
        comment: '原价',
        type: 'decimal',
    })
    original_price: number;

    @Column({
        comment: '价格',
        type: 'decimal',
    })
    price: number;

    @Column({
        comment: '折扣 off',
        type: 'int',
    })
    discount: number;
}
