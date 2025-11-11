const allmodles = require('../models/index.js');

class cityRepository {
    async createCity({ name }) {
    try {
      const city = await allmodles.City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity( cityid )
  {
    try {
        await City.destroy({
          where: {
            id: cityid,
          },
        });
    } catch (error) {
        throw {error};
    }
  }

}

module.exports = cityRepository;