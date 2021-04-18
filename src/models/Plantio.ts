import { AutoIncrement, Column, DataType, ForeignKey, PrimaryKey, Table, Model, BelongsTo} from "sequelize-typescript"; 
import Canteiro from "./Canteiro";
import Funcionario from "./Funcionario";
import Planta from "./Planta";

interface PlantioI {
    id: number;
    planta_id: number;
    funcionario_id:number;
    canteiro_id:number;
    data:Date;
    sementes:number;

}

@Table({
    tableName:"plantio",
    timestamps:true
})
export default class Plantio extends Model implements PlantioI{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
    
    @ForeignKey(() => Planta)
    @Column(DataType.INTEGER)
    planta_id: number;

    @BelongsTo(() => Planta)
    planta:Planta;
    
    @ForeignKey(() => Funcionario)
    @Column(DataType.INTEGER)
    funcionario_id: number;
    
    @BelongsTo(() => Funcionario)
    funcionario:Funcionario

    @ForeignKey(() => Canteiro)
    @Column(DataType.INTEGER)
    canteiro_id: number;
    
    @BelongsTo(() => Canteiro)
    canteiro:Canteiro;

    @Column(DataType.DATE)
    data: Date;

    @Column(DataType.INTEGER)
    sementes: number;

}
