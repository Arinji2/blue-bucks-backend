/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2979533346")

  // update collection data
  unmarshal({
    "name": "cosmetics_users"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2979533346")

  // update collection data
  unmarshal({
    "name": "user_cosmetics"
  }, collection)

  return app.save(collection)
})
