exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('being_categories').truncate()
    .then(knex('beings').truncate())
    .then(knex('categories').truncate())
    .then(knex('being_actions').truncate())
    .then(function (){
      return knex('beings').insert([
       {name: 'Grocery Clerk', description: 'Works long and hard to make sure the community gets everything they need to survive'},
       {name: 'Starship Captain', description: 'Travels the galaxy, making new discoveries and helping all the beings encountered on the journey'},
       {name: 'Wizard', description: 'Utilizes spells, incantations, and other magical arts'},
       {name: 'Gelatinous Blob', description: 'A bright green, foul smelling gelatinous blob found on the moon of a recently discovered planet - Possibly sentient'},
       {name: 'Mystic', description: 'On a quest to let fall body and mind to become one with the Absolute'},
       {name: 'Scholar', description: 'Spends a lifetime consuming knowledge from books, teachers, and other sources'},
       {name: 'Dragon', description: 'A large, flying magical reptile. Often breathes fire.'},
       {name: 'Whale Shark', description: 'An enormous shark that subsists on plankton. A gentle giant. '},
      ])
    })
    
    .then(function (){
      return knex('categories').insert([
        {category_name: 'Real Life', category_description: 'Everyday, mundane reality'},
        {category_name: 'Science Fiction', category_description: 'Beings from any world, typically from the future, where science has had a profound impact (for better or for worse)'},
        {category_name: 'Fantasy', category_description: 'Beings from a world marked by magic'},
        {category_name: 'Animal', category_description: 'Non-human, Non-plant multicellular life forms from planet Earth.'},

      ])
    })
    .then(function () {
      // Inserts seed entries
      return knex('being_categories').insert([
        {being_id: 1, category_id: 1},
        {being_id: 2, category_id: 2},
        {being_id: 3, category_id: 3},
        {being_id: 4, category_id: 2},
        {being_id: 4, category_id: 3},
        {being_id: 5, category_id: 1},
        {being_id: 6, category_id: 1},
        {being_id: 7, category_id: 3},
        {being_id: 8, category_id: 4},
      ]);
    })
    .then(function (){
      return knex('being_actions').insert([
        {being_id: 1, action_description: 'Ring up customers'},
        {being_id: 1, action_description: 'Stock Shelves'},
        {being_id: 2, action_description: 'Broker a peace treaty between worlds'},
        {being_id: 2, action_description: 'Discover new alien species'},
        {being_id: 3, action_description: 'Go on a quest to find the legendary tome of infinite magic'},
        {being_id: 3, action_description: 'Study the art of healing magic'},
        {being_id: 4, action_description: 'Extract nutrients from sulphur deposit.'},
        {being_id: 5, action_description: 'Meditate on the impermanence of all phenomena.'},
        {being_id: 6, action_description: 'Meditate on the impermanence of all phenomena.'},
        {being_id: 7, action_description: 'Obtain PhD in Computer Science'},
        {being_id: 8, action_description: 'Endlessly swim across the ocean, filter feeding along the way to gather nutrients'},
      ])
    })
};
