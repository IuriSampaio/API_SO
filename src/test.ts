import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";

const sequelize = new Sequelize("mysql://root:bcd127@172.18.0.2:3306/project");

interface UserAttributes {
  id: number;
  name: string;
  preferredName: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
  public getProjects!: HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  public addProject!: HasManyAddAssociationMixin<Project, number>;
  public hasProject!: HasManyHasAssociationMixin<Project, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<Project>;

  public readonly projects?: Project[]; // Note this is optional since it's only populated when explicitly requested in code

  public static associations: {
    projects: Association<User, Project>;
  };
}

interface ProjectAttributes {
  id: number;
  ownerId: number;
  name: string;
}

interface ProjectCreationAttributes extends Optional<ProjectAttributes, "id"> {}

class Project extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes {
  public id!: number;
  public ownerId!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

interface AddressAttributes {
  userId: number;
  address: string;
}

class Address extends Model<AddressAttributes> implements AddressAttributes {
  public userId!: number;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

interface NoteAttributes {
  id: number;
  title: string;
  content: string;
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id' | 'title'> {};

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    ownerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "projects",
  }
);

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
);

Address.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "address",
    sequelize, // passing the `sequelize` instance is required
  }
);

const Note: ModelDefined<
  NoteAttributes,
  NoteCreationAttributes
> = sequelize.define(
  'Note',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(64),
      defaultValue: 'Unnamed Note',
    },
    content: {
      type: new DataTypes.STRING(4096),
      allowNull: false,
    },
  },
  {
    tableName: 'notes',
  }
);

User.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "ownerId",
  as: "projects", // this determines the name in `associations`!
});

Address.belongsTo(User, { targetKey: "id" });
User.hasOne(Address, { sourceKey: "id" });

async function doStuffWithUser() {
  const newUser = await User.create({
    name: "Johnny",
    preferredName: "John",
  });
  console.log(newUser.id, newUser.name, newUser.preferredName);

  const project = await newUser.createProject({
    name: "first!",
  });

  const ourUser = await User.findByPk(1, {
    include: [User.associations.projects],
    rejectOnEmpty: true, // Specifying true here removes `null` from the return type!
  });

  console.log(ourUser.projects![0].name);
}
