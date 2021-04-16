import { AllowNull, AutoIncrement, Column, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";

 
 interface CanteiroI{
    id?: number|null;
    nome:  string;
    daily_ligth:  number;
    daily_whater: number;
 }

 @Table({
     tableName:"canteiro",
     timestamps:true
 })
 export default class Canteiro extends Model implements CanteiroI{
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number|null;
    
    @AllowNull(false)
    @Column
    @NotEmpty
    nome!:  string;
    
    @AllowNull(false)
    @Column
    @NotEmpty
    daily_ligth:  number;
    
    @AllowNull(false)
    @Column
    @NotEmpty
    daily_whater: number;
 }
