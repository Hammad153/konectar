  CREATE TABLE waitlist (
   id SERIAL PRIMARY KEY,
   fullName VARCHAR(255) NOT NULL,
   farmName VARCHAR(255) NOT NULL,
   farmLocation VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   phone VARCHAR(20),
   farmSize VARCHAR(255),
   produceTypes TEXT[], 
   supplyFrequency VARCHAR(255),
   distributionChannels TEXT[], 
   additionalOfferings TEXT,
   mainChallenges TEXT,
   receiveUpdates BOOLEAN
  );

  CREATE TABLE contact (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   message TEXT
  );
