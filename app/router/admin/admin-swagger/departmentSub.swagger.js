/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateDepartmentSub :
 *              type : object
 *              required :
 *                  -   title
 *                  -   parent
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title for department sub
 *                  parent :
 *                      type : string
 *                      description : the id of department
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateDepartmentSub :
 *              type : object
 *              required :
 *                  -   title
 *              properties :
 *                  title :
 *                      type : string
 *                      description : title for update department sub
 */

/**
 * @swagger
 *  /admin/departmentSub/add :
 *      post :
 *          tags : [DepartmentSub]
 *          summary : create departmentSub
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartmentSub'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateDepartmentSub'
 *          responses :
 *              201 :
 *                  description : create - departmentSub created
 */
/**
 * @swagger
 *  /admin/departmentSub/list :
 *      get :
 *          tags : [DepartmentSub]
 *          summary : get list of departmentSubs
 *          responses :
 *              200 :
 *                  description : success 
 */
/**
 * @swagger
 *  /admin/departmentSub/update/{field} :
 *      patch :
 *          tags : [DepartmentSub]
 *          summary : create departmentSub
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
 *                          $ref : '#/components/schemas/UpdateDepartmentSub'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateDepartmentSub'
 *          responses :
 *              200 :
 *                  description : success - departmentSub updated
 */
/**
 * @swagger
 *  /admin/departmentSub/remove/{field} :
 *      delete :
 *          tags : [DepartmentSub]
 *          summary : create departmentSub
 *          parameters :
 *              -   in : path
 *                  name : field
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - departmentSub removed
 */
