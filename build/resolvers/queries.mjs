export default {
    leagues: async (root, args, { db }, info) => {
        try {
            const where = args.leagueIDs ? { id: { Op } } : {};
            return await db.League.findAll({
                include: [
                    {
                        model: db.Team,
                        as: 'teams'
                    }
                ]
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    teams: async (root, args, { db }, info) => {
        try {
            const where = args.leagueId ? { id: args.leagueId } : {};
            return await db.Team.findAll({
                include: [
                    {
                        model: db.League,
                        as: 'league',
                        where
                    }
                ]
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
