steps = [
    [
        # "Up" SQL statement
        """
        CREATE TABLE users (
            id SERIAL PRIMARY KEY NOT NULL,
            username VARCHAR(50) UNIQUE NOT NULL,
            hashed_password VARCHAR(60) NOT NULL,
            email VARCHAR(50) NOT NULL,
            user_pic_url VARCHAR(500),
            bio TEXT,
            zipcode INTEGER NOT NULL,
            is_artist BOOLEAN DEFAULT FALSE
        );
        """,
        # "Down" SQL statement
        """
        DROP TABLE users;
        """,
    ],
]
