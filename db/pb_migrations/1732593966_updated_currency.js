/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_689492006")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_689492006",
    "hidden": false,
    "id": "relation2312858687",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user_currency",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_689492006")

  // remove field
  collection.fields.removeById("relation2312858687")

  return app.save(collection)
})
