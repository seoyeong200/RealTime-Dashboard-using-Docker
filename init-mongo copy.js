db.createUser(
    {
        user: "user_name",
        pwd: "pwd",
        roles: [
            {
                role: "readWrite",
                db: "db_name"
            }
        ]
    }
);
db.createCollection("collection_name"); 