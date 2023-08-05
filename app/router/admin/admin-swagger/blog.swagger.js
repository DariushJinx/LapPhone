/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateBlog :
 *              type : object
 *              required :
 *                  -   title
 *                  -   text
 *                  -   short_text
 *                  -   images
 *                  -   tags
 *                  -   category
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of blog
 *                  text :
 *                      type : string
 *                      description : the text of blog
 *                  short_text :
 *                      type : string
 *                      description : the short_text of blog
 *                  tags :
 *                      type : array
 *                      description : the list of tags for blog
 *                  images :
 *                      type : array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  category :
 *                      type : string
 *                      description : the id of category for blog
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateBlog :
 *              type : object
 *              properties :
 *                  title :
 *                      type : string
 *                      description : the title of blog
 *                  text :
 *                      type : string
 *                      description : the text of blog
 *                  short_text :
 *                      type : string
 *                      description : the short_text of blog
 *                  tags :
 *                      type : array
 *                      description : the list of tags for blog
 *                  images :
 *                      type : array
 *                      items:
 *                          type: string
 *                          format: binary
 *                  category :
 *                      type : string
 *                      description : the id of category for blog
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CreateComment :
 *              type : object
 *              required :
 *                  -   comment
 *              properties :
 *                  comment :
 *                      type : string
 *                      description : the comment for blog
 *                  parent :
 *                      type : string
 *                      description : the id of comment for answers
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CommentID :
 *              type : object
 *              required :
 *                  -   commentID
 *              properties :
 *                  commentID :
 *                      type : string
 *                      description : the comment id
 */

/**
 * @swagger
 *  /admin/blog/add :
 *      post :
 *          tags : [Blog(AdminPanel)]
 *          summary : create blog
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateBlog'
 *          responses :
 *              201 :
 *                  description : create - blog created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/list :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get list of blogs
 *          responses :
 *              200 :
 *                  description  : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/get-one/{id} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get one blog with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/remove/{id} :
 *      delete :
 *          tags : [Blog(AdminPanel)]
 *          summary : delete one blog with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog removed
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/blog/update/{id} :
 *      patch :
 *          tags : [Blog(AdminPanel)]
 *          summary : update blog with id
 *          parameters :
 *              -   in : path
 *                  name : id
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  multipart/form-data :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateBlog'
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/CreateBlog'
 */

/**
 * @swagger
 *  /admin/blog/bookmark/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update bookmark blog with blogID
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */

/**
 * @swagger
 *  /admin/blog/like/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update like blog with blogID
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/blog/dislike/{blogID} :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : update dislike blog with blogID
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success - blog updated
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /admin/blog/create-comment/{blogID} :
 *      post :
 *          tags : [Blog(AdminPanel)]
 *          summary : create comment for blog
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateComment'
 *          responses :
 *              200 :
 *                  description : success - comment created
 */
/**
 * @swagger
 *  /admin/blog/remove-comment/{blogID} :
 *      patch :
 *          tags : [Blog(AdminPanel)]
 *          summary : remove comment from blog
 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CreateComment'
 *          responses :
 *              200 :
 *                  description : success - comment removed
 */

/**
 * @swagger
 *  /admin/blog/get-comments :
 *      get :
 *          tags : [Blog(AdminPanel)]
 *          summary : get list of comments for blogs
 *          responses :
 *              200 :
 *                  description  : success
 */
/**
 * @swagger
 *  /admin/blog/show-comment/{blogID} :
 *      patch :
 *          tags : [Blog(AdminPanel)]
 *          summary : show comment

 *          parameters :
 *              -   in : path
 *                  name : blogID
 *                  type : string
 *                  required : true
 *          requestBody : 
 *              required : true
 *              content : 
 *                  application/x-www-form-urlencoded : 
 *                      schema : 
 *                          $ref : '#/components/schemas/CommentID'
 *          responses :
 *              200 :
 *                  description  : success
 */
