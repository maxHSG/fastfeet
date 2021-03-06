import Sequelize, { Model } from 'sequelize';
import SequelizePaginate from 'sequelize-paginate';

class Deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

SequelizePaginate.paginate(Deliveryman);
export default Deliveryman;
