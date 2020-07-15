const db = require('../models');
const point = db.point;

const methods = {
  async find(req) {
    return new Promise(async (resolve, reject) => {
      try {
        let inserted = await point.findAll();
        resolve(inserted)
      } catch (error) {
        reject(methods.error(error.message, 400))
      }
    });
  },
  error(msg, status = 500){
    let error = new Error(msg)
    error.status = status
    return error;
  }
}

module.exports = {...methods}