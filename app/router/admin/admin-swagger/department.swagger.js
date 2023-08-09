/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateDepartment :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title for department
 */

/**
 * @swagger
 *  /admin/department/add :
 *      post :
 *          tags : [Department]
 *          summary : create department
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *          responses :
 *              201 :
 *                  description : create - department created
 */
/**
 * @swagger
 *  /admin/department/update/{field} :
 *      patch :
 *          tags : [Department]
 *          summary : create department
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : string
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartment'
 *          responses :
 *              201 :
 *                  description : create - department created
 */

/**
 * @swagger
 *  /admin/department/remove/{field} :
 *      delete :
 *          tags : [Department]
 *          summary : remove department with id or title
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : string
 *          responses :
 *              200 :
 *                  description : success - department removed
 */
