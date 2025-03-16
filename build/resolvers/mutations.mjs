export default {
    addLeague: (parent, args, { db }, info) => {
        return db.League.create({
            title: args.title,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(newLeague => {
            return db.League.findAll();
        });
    }
};
