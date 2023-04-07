import {sequelize} from '../config/sequelize.js'
import { Sequelize } from 'sequelize'

export const CameraNetworks =sequelize.define(
  'cameranetworks',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    descriptions: {
      type: Sequelize.TEXT
    },
    cameras: {
      type: Sequelize.INTEGER
    },
    deletedAt: {
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  
});
