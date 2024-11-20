/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uqznj97qc9aiomm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkfycaqc",
    "name": "description",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uqznj97qc9aiomm")

  // remove
  collection.schema.removeField("bkfycaqc")

  return dao.saveCollection(collection)
})
