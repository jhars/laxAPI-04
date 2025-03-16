// const League = require('../../database/models').League
export default {
    leagues: async (root, args, context, info) => {
        try {
            // console.log(root)
            // console.log(args)
            // console.log(context)
            console.log(context);
            return await context.db.League.findAll(); // Using Sequelize model
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    // leagues: (parent, args, { db }, info) => {
    //   // console.log(parent)
    //   // console.log(args)
    //   // console.log(info)
    //   console.log(db)
    //   return db.League.findAll();
    // },
    // leagues: async (root, args, { models }) => {
    //   console.log(models)
    //   return models.League.findAll();
    // },
    // leagues: (parent, args, { db }, info) => {
    //   // console.log(parent)
    //   // console.log(args)
    //   console.log(info)
    //   // console.log(db)
    //   return db.League.findAll();
    // },
    teams: (parent, args, { db }, info) => {
        const where = args.leagueId ? { id: args.leagueId } : {};
        return db.Team.findAll({
            include: [
                {
                    model: db.Leauge,
                    attributes: ["name"],
                    where
                }
            ]
        });
    }
};
