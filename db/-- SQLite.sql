-- SQLite
-- create table tags (
--     id_tag integer PRIMARY KEY AUTOINCREMENT,
--     omschrijvingKort text not null UNIQUE
-- );
-- create table videoTags (
--     id_videoTag integer PRIMARY KEY AUTOINCREMENT,
--     video integer not NULL,
--     id_tag integer NOT NULL,
--     Foreign KEY (id_tag) REFERENCES tags(id_tag),
--   Foreign KEY (video) REFERENCES videos(video)
-- );
-- insert into tags (omschrijvingKort) values ("opbouwen");

-- insert into videoTags (video, id_tag)
-- values (1,1),(2,1)
-- ALTER TABLE videos
-- ADD naam varchar(255);
 
-- DELETE FROM VIDEOS