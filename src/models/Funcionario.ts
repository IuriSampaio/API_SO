import { AllowNull, AutoIncrement, Column, Model, NotEmpty, NotNull, PrimaryKey, Table } from "sequelize-typescript";
 
 interface FuncionarioI{
    id?: number|null;
    nome:  string;
    idade:  number;
 }

 @Table({
     tableName:"funcionario",
     timestamps:true
 })
 export default class Funcionario extends Model implements FuncionarioI{
    
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
    idade:  number;
 }