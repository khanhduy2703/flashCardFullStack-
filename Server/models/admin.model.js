const withTransaction = require("../service/withTransaction.mysql");
const {
  getResquestQuery,
  setStatusUser,
  banFolder,
  banFlashCard,
  banCard,
} = require("../repositories/adminQuery");
const { error } = require("console");

const adminModel = {
  async getResquest(cb) {
    try {
      await withTransaction(async (connection) => {

        const [listRequest] = await connection.query(getResquestQuery);
      })
      cb(null, listRequest);
    } catch (error) {
      cb(error, null);
    }
  },
  async banUser(idUser, cb) {
    try {
      const result = withTransaction(async (connection) => {
        // ban user
        const [resultUser] = await connection.query(setStatusUser, [3, idUser]);
        if (resultUser.affectedRows == 0) {
          throw new Error("error at ban user , roll back");
        }
        // ban folder of user
        const [resultFolder] = await connection.query(banFolder, [0, idUser]);
        if (resultFolder.affectedRows == 0) {
          throw new Error("error at ban folder , roll back");
        }

        // ban flashCard
        const [resultFlashCard] = await connection.query(banFlashCard, [0, idUser]);
        if (resultFlashCard.affectedRows == 0) {
          throw new Error("error at ban flashCard , roll back");
        }

        //ban Card
        const [resultCard] = await connection.query(banCard, [0, idUser]);
        if (resultCard.affectedRows == 0) {
          throw new Error("error at ban card , roll back ");
        }
        return result
      });
      cb(null, { idUser });
    } catch (error) {
      cb(error, null);
    }
  }
};
module.exports = adminModel;
