/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1626296654")

  // update collection data
  unmarshal({
    "name": "currency_users"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1626296654")

  // update collection data
  unmarshal({
    "name": "user_currency"
  }, collection)

  return app.save(collection)
})
