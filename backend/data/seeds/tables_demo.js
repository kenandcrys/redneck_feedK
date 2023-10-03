exports.seed = function(knex) {
  return knex.transaction(async (trx) => {
    // Seed data for the 'Cattle' table
    await trx('Cattle').del();
    await trx('Cattle').insert([
      {
        name: 'Cow',
        description: 'A cow for testing',
        pricePerBag: 50.0,
        pricePer20: 900.0,
        pricePer40: 1600.0,
        image: 'cow.jpg'
      },
      {
        name: 'Bull',
        description: 'A bull for testing',
        pricePerBag: 55.0,
        pricePer20: 950.0,
        pricePer40: 1700.0,
        image: 'bull.jpg'
      },
      {
        name: 'Calf',
        description: 'A calf for testing',
        pricePerBag: 45.0,
        pricePer20: 850.0,
        pricePer40: 1500.0,
        image: 'calf.jpg'
      },
    ]);

    // Seed data for the 'Swine' table
    await trx('Swine').del();
    await trx('Swine').insert([
      {
        name: 'Pig',
        description: 'A pig for testing',
        pricePerBag: 40.0,
        pricePer20: 750.0,
        pricePer40: 1300.0,
        image: 'pig.jpg'
      },
      {
        name: 'Sow',
        description: 'A sow for testing',
        pricePerBag: 42.0,
        pricePer20: 770.0,
        pricePer40: 1350.0,
        image: 'sow.jpg'
      },
      {
        name: 'Boar',
        description: 'A boar for testing',
        pricePerBag: 45.0,
        pricePer20: 800.0,
        pricePer40: 1400.0,
        image: 'boar.jpg'
      },
    ]);

  });
};

