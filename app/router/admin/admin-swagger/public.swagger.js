/**
 * @swagger
 *  definitions :
 *      PermissionDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      permissions :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  name :
 *                                      type : string
 *                                      example : all
 *                                  description :
 *                                      type : string
 *                                      example : the best description for permission
 */

/**
 * @swagger
 *  definitions :
 *      CategoryDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      category :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  title :
 *                                      type : string
 *                                      example : the title of category
 *                                  parent :
 *                                      type : string
 *                                      example : the id of parent category
 */

/**
 * @swagger
 *  definitions :
 *      ListCategoryDefinition :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for permission
 *                      categories :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c51bbdcc2bffaac359da5d"
 *                                  title :
 *                                      type : string
 *                                      example : the title of category
 *                                  children :
 *                                      type : array
 *                                      items :
 *                                          type : object
 *                                          properties :
 *                                              _id :
 *                                                  type : string
 *                                                  example : "64c51bbdcc2bffaac359da5d"
 *                                              title :
 *                                                  type : string
 *                                                  example : the title of category
 *                                              parent :
 *                                                  type : string
 *                                                  example : the id of parent category
 *                                              children :
 *                                                  type : array
 *                                                  items :
 *                                                      type : object
 */

/**
 * @swagger
 *  definitions :
 *      DeleteAndUpdate :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for routes
 */

/**
 * @swagger
 *  definitions :
 *      Create :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      roles :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c53b2e2eb15b78bb369ce9"
 *                                  title :
 *                                      type : string
 *                                      example : the best title
 *                                  description :
 *                                      type : string
 *                                      example : the best description
 *                                  permissions :
 *                                      type : array
 *                                      items :
 *                                          type : object
 *                                          properties :
 *                                              _id :
 *                                                  type : string
 *                                                  example : "64c53b2e2eb15b78bb369ce9"
 *                                              title :
 *                                                  type : string
 *                                                  example : the best title
 *                                              description :
 *                                                 type : string
 *                                                 example : the best description
 */

/**
 * @swagger
 *  definitions :
 *      CreateBlog :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      blog :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c53b2e2eb15b78bb369ce9"
 *                                  title :
 *                                      type : string
 *                                      example : the best title
 *                                  text :
 *                                      type : string
 *                                      example : the best text
 *                                  short_text :
 *                                      type : string
 *                                      example : the best short text
 *                                  tags :
 *                                      type : array
 *                                      items :
 *                                          type : string
 *
 *                                  category :
 *                                      type : string
 *                                      example : the id of category blog
 *                                  author :
 *                                      type : string
 *                                      example : the id of author blog
 *                                  images :
 *                                      type : array
 *                                      items :
 *                                          type : string
 */

/**
 * @swagger
 *  definitions :
 *      CreateMenu :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 *              data :
 *                  type : object
 *                  properties :
 *                      message :
 *                          type : string
 *                          example : the best message for route
 *                      menu :
 *                          type : array
 *                          items :
 *                              type : object
 *                              properties :
 *                                  _id :
 *                                      type : string
 *                                      example : "64c7a63c69c2d3480160f729"
 *                                  title :
 *                                      type : string
 *                                      example : the title of menu
 */
