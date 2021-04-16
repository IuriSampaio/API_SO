import { AllowNull, AutoIncrement, Column, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";

 
 interface PlantaI{
    id?: number|null;
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
    agua: number;

    @AllowNull(false)
    @Column
    @NotEmpty
    peso: number;
 }