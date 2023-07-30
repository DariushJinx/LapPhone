/**
 * @swagger
 *  components :
 *      schemas :
 *          AddCategory :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of category
 *                  parent :
 *                      type : string
 *                      description : the id of category parent
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *         UpdateCategory :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of category
 */

/**
 * @swagger
 *  /admin/category/add :
 *      post :
 *          tags : [Category(AdminPanel)]
 *          summary : create category
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCategory'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/AddCategory'
 *          responses :
 *              201 :
 *                  description : create - category created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CategoryDefinition'
 */

/**
 * @swagger
 *  /admin/category/list :
 *      get :
 *          tags : [Category(AdminPanel)]
 *          summary : get all categories
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListCategoryDefinition'
 */
/**

/**
 * @swagger
 *  /admin/category/remove/{field} :
 *      delete :
 *          tags : [Category(AdminPanel)]
 *          summary : remove category with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - category removed
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/category/update/{field} :
 *      patch :
 *          tags : [Category(AdminPanel)]
 *          summary : update category with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateCategory'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateCategory'
 *          responses :
 *              200 :
 *                  description : success - category update
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/category/getOne/{field} :
 *      get :
 *          tags : [Category(AdminPanel)]
 *          summary : get one category
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListCategoryDefinition'
 */

/**
 * @swagger
 *  /admin/category/children/{parent} :
 *      get :
 *          tags : [Category(AdminPanel)]
 *          summary : get children category of parent
 *          parameters :
 *              -   in : path
 *                  name : parent
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/ListCategoryDefinition'
 */
