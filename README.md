# 10000 Beings API

I created this API for creative writers, role playing game enthusiasts, front end web developers, and other creatives. This API contains a number of real and fictional “beings”, their categories, and some actions that these beings might take in their respective worlds. The idea here is that if a creative writer or individual playing a tabletop RPG has a block and needs some inspiration, they can use this API to generate a new “being”, or character. 

This API is a work in progress. There are currently only 15 beings in the database, although I will continue to add more over the coming weeks and months. 

The API is hosted at [ten-thousand-beings-api.herokuapp.com](https://ten-thousand-beings-api.herokuapp.com)

## Beings

### Beings Endpoints

| Method | Endpoint   | Function                                                              |
| ------ | ---------- | --------------------------------------------------------------------- |
| GET    | /api/beings | Returns an array of all beings in the database                         |
| GET    | /api/beings/:id | Returns an object containing a being at a particular `id`             |
| GET    | /api/:id/actions | Returns an array of actions belonging to a being at a particular `id`                      |

### Being Schema 

```javascript
{
  id: integer, // unique integer, automatically generated 
  name: string, // not nullable
  description: string, // not nullable
}
```

### Being Database Access Functions

| Function         | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| `getAllBeings`    | Resolves to an array of all beings in the database. |
| `getBeingById`    | Takes an `id` and resolves to the being specified at that `id` |
| `getBeingActions`     | Takes an `id` and resolves to an array of all actions belonging to the being at that `id`|

## Categories

The categories in the database are as follows: 

| id | Category   | Description                                                              |
| ------ | ---------- | --------------------------------------------------------------------- |
| 1 | Real Life | Everyday, mundane reality |
| 2 | Science Fiction | Beings from any world, typically from the future, where science has had a profound impact (for better or for worse) |
| 3 | Fantasy | Beings from a world marked by magic |
| 4 | Animal | Non-human, Non-plant multicellular life forms from planet Earth |

### Categories Endpoints

| Method | Endpoint   | Function                                                              |
| ------ | ---------- | --------------------------------------------------------------------- |
| GET    | /api/categories | Returns an array of all categories in the database |                         |
| GET    | /api/categories/:id | Returns an object containing a category at a particular `id` |                        |
| GET    | /api/categories/beings-by-category/:id | Returns an array of beings associated with a particular category at a specified `id` |
| GET    | /api/categories/categories-by-being/:id | Returns an array of categories associated with a particular being at a specified `id`|


### Categories Schema 

```javascript
{
  id: integer, // unique integer, automatically generated 
  category_name: string, // not nullable
  category_description: string, // not nullable
}
```

### Categories Database Access Functions

| Function         | Purpose                                           |
| ---------------- | ------------------------------------------------- |
| `getAllCategories`    | Resolves to an array of all beings in the database. |
| `getCategoryById`    | Takes an `id` and resolves to an object containing the being specified at that `id` |
| `getBeingsByCategory` | Takes an `id` and resolves to an array of all beings associated with a particular category specified at that `id` |
| `getCategoriesByBeing` | Takes an `id` and resolves to an array of all categories associated with a particular being specified at that `id` |


