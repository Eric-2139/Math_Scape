CREATE TABLE IF NOT EXISTS Users(
    id VARCHAR (36) PRIMARY KEY,
    nickname VARCHAR (150),
    email VARCHAR(255),
    senha VARCHAR(255)
)