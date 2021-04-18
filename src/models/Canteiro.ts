import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";
import Colhido from "./Colhido";
import Plantio from "./Plantio";

 
 interface CanteiroI{
    id: number;
    nome:  string;
    daily_ligth:  string;
    daily_whater: string;
 }

 @Table({
     tableName:"canteiro",
     timestamps:true
 })
 export default class Canteiro extends Model implements CanteiroI{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
    
    @AllowNull(false)
    @Column(DataType.TEXT) 
    nome:  string;
    
    @AllowNull(false)
    @Column(DataType.STRING)
    daily_ligth:  string;
    
    @AllowNull(false)
    @Column(DataType.STRING)
    daily_whater: string;

    @HasMany(() => Plantio)
    plantios: Array<Plantio>;

    @HasMany(()=> Colhido)
    colheita:Array<Colhido>;
}

