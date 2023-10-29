import {User} from '../../models/User.js'


export function getUserByEmail(request) {
    return User.findOne({
      email: request.body.email,
    });
  }