/**
 * @swagger
 *  components :
 *      schemas :
 *          GetOtp :
 *              type : object
 *              required :
 *                  -   mobile
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for sign up or sign in
 */

/**
 * @swagger
 *  /auth/get-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : get otp code with mobile
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *              400 :
 *                  description : Bad Request
 *              401 :
 *                  description : UnAuthorization
 *              500 :
 *                  description : Internal Server Error
 */
