import hyRequest from '../index'

import { ResultType } from '../types'
import { IAccount, ILoginResult, IDataType } from './type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<ResultType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: {
      ...account,
      name: 'coderwhy'
    }
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<ResultType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<ResultType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
