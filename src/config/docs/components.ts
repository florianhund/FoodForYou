export default {
  components: {
    schemas: {
      Id: {
        type: 'string',
        description: 'ObjectId',
        example: '6253f6610d5ef0a5f7cbde76'
      },
      Meal: {
        type: 'object',
        required: ['name, price', 'isVegetarian', 'isVegan'],
        properties: {
          _id: {
            type: 'string',
            description: 'Id of Meal',
            length: 24,
            example: '6253f6610d5ef0a5f7cbde76'
          },
          name: {
            type: 'string',
            description: 'Name of Meal',
            minLength: 5,
            maxLength: 25,
            example: 'burger'
          },
          price: {
            type: 'number',
            description: 'Price of Meal',
            min: 0,
            max: 50,
            example: '8.5'
          },
          isVegetarian: {
            type: 'boolean',
            description: 'true if meal is vegetarian',
            example: 'false'
          },
          isVegan: {
            type: 'boolean',
            description: 'true if meal is vegan',
            example: 'false'
          },
          description: {
            type: 'string',
            description: 'Description of Meal',
            minLength: 10,
            maxLength: 40,
            example: 'This is a tasty Burger!'
          },
          allergenics: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'L',
                'M',
                'N',
                'O',
                'P',
                'R'
              ]
            },
            description: 'Allergenics of Meal',
            example: ['A', 'E']
          },
          tags: {
            type: 'array',
            items: {
              type: 'string',
              minLength: 1,
              maxLength: 15
            },
            description: 'tags',
            example: ['steak, tasty, good']
          },
          __v: {
            type: 'number',
            description: 'version of Meal',
            example: 0
          }
        }
      },
      User: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Id of Meal',
            length: 24,
            example: '6253f6610d5ef0a5f7cbde76'
          },
          __v: {
            type: 'number',
            description: 'version of Meal',
            example: 0
          },
          firstName: {
            type: 'string',
            description: 'first name of user',
            example: 'John'
          },
          lastName: {
            type: 'string',
            description: 'last name of user',
            example: 'Doe'
          },
          email: {
            type: 'string',
            description: 'email',
            example: 'john.doe@gmail.com'
          },
          password: {
            type: 'string',
            description: 'secret password',
            example: 'my_secret_password23'
          },
          isVerified: {
            type: 'boolean',
            description: 'true if user is verified',
            example: 'true',
            default: false
          },
          isAdmin: {
            type: 'boolean',
            description: 'true if user is admin',
            example: 'false',
            default: false
          },
          fullName: {
            type: 'string',
            description: 'virtual property',
            example: 'John Doe'
          }
        }
      },
      Order: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Id of Meal',
            length: 24,
            example: '6253f6610d5ef0a5f7cbde76'
          },
          __v: {
            type: 'number',
            description: 'version of Meal',
            example: 0
          },
          orderTime: {
            type: 'string',
            example: '2022-06-23T19:23:24.538Z',
            description: 'order Time'
          },
          deliveryTime: {
            type: 'string',
            example: '2022-06-23T19:58:32.873Z',
            description: 'delivery Time'
          },
          isPaid: {
            type: 'boolean',
            example: 'false',
            description: 'true if order is paid'
          },
          isDelivered: {
            type: 'boolean',
            example: 'false',
            description: 'true if order is delivered'
          },
          status: {
            type: 'string',
            example: 'in delivery',
            enum: ['in progress', 'in delivery', 'delivered'],
            description:
              'in progress before delivery, in delivery during delivery, delivered if delivered'
          },
          address: {
            type: 'string',
            example: 'Rudolfstr. 7b',
            description: 'address to deliver'
          },
          postalCode: {
            type: 'number',
            example: '6067',
            description: 'postal code to deliver'
          },
          totalPrice: {
            type: 'number',
            example: '17.3',
            description: 'total price'
          },
          userId: {
            type: 'string',
            example: '6293cd8bec9db4c3cbb85155',
            description: 'user id'
          },
          meals: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['6293cd8bec9db4c3cbb85155'],
            description: 'ids of ordered meals'
          }
        }
      },
      ValidationError: {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            example: 400,
            description: 'Http statuscode'
          },
          status: {
            type: 'string',
            example: 'INVALID INPUT',
            description: 'short error description'
          },
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'min_price has to be a number',
                  description: 'error message'
                },
                location: {
                  type: 'string',
                  example: 'query',
                  description: 'location of error'
                },
                param: {
                  type: 'string',
                  example: 'min_price',
                  description: 'name of field where error occurred'
                },
                value: {
                  type: 'string',
                  example: 'nonumber',
                  description: 'given input of error field'
                }
              }
            }
          }
        }
      },
      HttpError: {
        type: 'object',
        properties: {
          code: {
            type: 'number',
            example: 500,
            description: 'Http statuscode'
          },
          status: {
            type: 'string',
            example: 'INTERNAL SERVER ERROR',
            description: 'short error description'
          },
          message: {
            type: 'string',
            example: 'Something went wrong.',
            description: 'error message'
          }
        }
      }
    }
  }
};
