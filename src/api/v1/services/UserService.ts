import { UpdateQuery } from 'mongoose';
import bcrypt from 'bcrypt';

import { IUser } from '../interfaces/models';
import { PromiseHandler } from '../interfaces/types';
import { UserRepository } from '../repositories';
import HttpError from '../utils/HttpError';

export default class UserService {
  private _repo = new UserRepository();

  public async getAll(sort?: string, fields?: string): PromiseHandler<IUser[]> {
    try {
      const users = await this._repo.findAll(
        UserRepository.getSortQuery(sort || ''),
        fields?.split(',')
      );
      return [users, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }

  public async getById(id: string, fields?: string): PromiseHandler<IUser> {
    const objectId = UserRepository.createIdFromString(id);
    try {
      const user = await this._repo.findById(objectId, fields?.split(','));
      if (!user) return [null, new HttpError('Invalid Id', 404)];
      return [user, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }

  public async getByUsername(
    username: string,
    sortQuery?: string,
    fields?: string
  ): PromiseHandler<IUser> {
    try {
      const [user] = await this._repo.find(
        { username },
        UserRepository.getSortQuery(sortQuery || ''),
        fields?.split(',')
      );
      if (!user) return [null, new HttpError('No User found!', 404)];
      return [user, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }

  public async create(data: IUser): PromiseHandler<IUser> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const otp = Math.floor(Math.random() * 9000) + 1000;
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      birthday: data.birthday,
      address: data.address,
      postalCode: data.postalCode,
      password: hashedPassword,
      isVerified: false,
      isAdmin: false,
      otp
    } as unknown as IUser;

    try {
      const user = await this._repo.create(userData);
      return [user, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }

  public async update(
    id: string,
    data: UpdateQuery<IUser>
  ): PromiseHandler<IUser> {
    const objectId = UserRepository.createIdFromString(id);
    try {
      const user = await this._repo.update(objectId, data);
      if (!user) return [null, new HttpError('Invalid id', 404)];
      return [user, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }

  public async delete(id: string): PromiseHandler<IUser> {
    const objectId = UserRepository.createIdFromString(id);
    try {
      const user = await this._repo.delete(objectId);
      if (!user) return [null, new HttpError('Invalid id', 404)];
      return [user, undefined];
    } catch (err) {
      return [null, new HttpError()];
    }
  }
}
