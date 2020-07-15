const pointService = require('../services/point.service');

const methods = {
  async onGetAll(req, res){
    try {
      let result = await pointService.find(req)
      res.success(result);
    } catch (error) {
      res.error(error.message, error.status)
    }
  },
  // async onGetById(req, res){

  // },
  // async onInsert(req, res){
  //     try {
  //       let result = await memberService.insert(req.body);
  //       res.status(201).send(result);
  //     } catch (error) {
  //       res.status(500).send({ error: error.message })
  //     }
  // }
}

module.exports = {...methods}