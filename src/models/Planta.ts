import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";
import Plantio from "./Plantio";

 
 interface PlantaI{
    id: number;
    nome:  string;
    daily_ligth:  number;
    agua: number;
    peso: number;
 }

 @Table({
     tableName:"planta",
     timestamps:true
 })
 export default class Planta extends Model implements PlantaI{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
    
    @AllowNull(false)
    @NotEmpty
    @Column(DataType.TEXT)
    nome:  string;
    
    @AllowNull(false)
    @NotEmpty
    @Column(DataType.FLOAT)
    daily_ligth:  number;
    
    @AllowNull(false)
    @NotEmpty
    @Column(DataType.FLOAT)
    agua: number;

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.FLOAT)
    peso: number;
 
   @HasMany(() => Plantio)
   plantios: Array<Plantio>;

}