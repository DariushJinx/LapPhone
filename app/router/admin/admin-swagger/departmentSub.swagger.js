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
