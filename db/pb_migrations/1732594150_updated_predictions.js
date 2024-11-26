/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2121703314")

  // remove field
  collection.fields.removeById("date1820088086")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number975630480",
    "max": null,
    "min": null,
    "name": "expires_in",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2121703314")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date1820088086",
    "max": "",
    "min": "",
    "name": "expires_on",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("number975630480")

  return app.save(collection)
})
