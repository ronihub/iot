CREATE DATABASE iot;

CREATE TABLE results (id SERIAL PRIMARY KEY,aqi float NOT NULL,pm2_5 float NOT NULL,pm10 float NOT NULL,place varchar(255) NOT NULL, created_at TIMESTAMP);

CREATE TABLE latest_activities (id SERIAL PRIMARY KEY,aqi float NOT NULL,pm2_5 float NOT NULL,pm10 float NOT NULL,place varchar(255) NOT NULL, created_at TIMESTAMP);
CREATE TABLE my_history (id SERIAL PRIMARY KEY,aqi float NOT NULL,pm2_5 float NOT NULL,pm10 float NOT NULL,place varchar(255) NOT NULL, created_at TIMESTAMP);

INSERT INTO latest_activities(aqi, pm2_5, pm10, place, created_at) VALUES (1, 0.5, 0.51, 'Washington DC, USA', '2022-01-05 04:27:11.982');
INSERT INTO latest_activities(aqi, pm2_5, pm10, place, created_at) VALUES (1, 4.84, 6.26, 'Vienna, Austria', '2022-01-05 04:28:12.82');
INSERT INTO latest_activities(aqi, pm2_5, pm10, place, created_at) VALUES (3, 14.5, 41.9, 'Rio de janeiro, Brazil', '2022-01-05 04:28:12.82');
INSERT INTO latest_activities(aqi, pm2_5, pm10, place, created_at) VALUES (5, 132.5, 176.66, 'Bejing, China', '2022-01-05 05:28:12.82');