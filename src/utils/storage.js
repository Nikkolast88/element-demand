
export function getStorage(name) {
  return sessionStorage.getItem(name)
}

export function setStorage(name, token) {
  return sessionStorage.setItem(name, token)
}

export function removeStorage(name) {
  return sessionStorage.removeItem(name)
}
