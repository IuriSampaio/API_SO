import { AllowNull, AutoIncrement, Column, DataType, HasMany, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";
import Colhido from "./Colhido";
import Plantio from "./Plantio";
 
 interface FuncionarioI{
    id: number;
    nome:  string;
    age_nasc:  Date;
 }

 @Table({
     tableName:"funcionario",
     timestamps:true
 })
 export default class Funcionario extends Model implements FuncionarioI{
    
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
    @Column(DataType.DATE)
    age_nasc:  Date;

    @HasMany(() => Plantio)
    plantios: Array<Plantio>;

    @HasMany(()=> Colhido)
    colheita:Colhido;
}