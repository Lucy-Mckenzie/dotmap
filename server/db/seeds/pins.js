/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pins').del()

  // Inserts seed entries
  await knex('pins').insert([
    { id: 1, name: 'wet', lat: '-9.427789' , long: '159.957896', description: 'beetlenut', user: 'zakhynd' },
    { id: 2, name: 'high' , lat: '-43.760494' , long: '170.000381', description: 'feijoa', user: 'zakhynd' },
    { id: 3, name: 'dark', lat: '-64.140352' , long: '338.045948', description: 'hákarl', user: 'zakhynd' },
  ])
}