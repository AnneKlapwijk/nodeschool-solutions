'use strict'

const promise = Promise.reject(new Error('SECRET VALUE'))

const onRejected = err => console.error(err.message)

promise.catch(onRejected)
